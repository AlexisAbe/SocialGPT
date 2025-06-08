import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { PostgresRepo } from './adapters/PostgresRepo.js'
import { MongoRepo } from './adapters/MongoRepo.js'
import { SupabaseRepo } from './adapters/SupabaseRepo.js'
import { AdsRepository, Ad } from './repo.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

function getRepo(): AdsRepository {
  switch (process.env.DATA_BACKEND) {
    case 'postgres':
      return new PostgresRepo()
    case 'mongo':
      return new MongoRepo()
    case 'supabase':
      return new SupabaseRepo()
    default:
      return new PostgresRepo()
  }
}

const repo = getRepo()

const typeDefs = gql`
  type Ad {
    id: ID!
    date: String!
    brand: String!
    budget: Float!
    reach: Float!
  }
  type Query {
    ads: [Ad!]!
  }
  type Mutation {
    insertAds(data: [AdInput!]!): Boolean
  }
  input AdInput {
    id: ID!
    date: String!
    brand: String!
    budget: Float!
    reach: Float!
  }
`

const resolvers = {
  Query: {
    ads: async () => repo.getAll()
  },
  Mutation: {
    insertAds: async (_: any, { data }: { data: Ad[] }) => {
      await repo.insertBulk(data)
      return true
    }
  }
}

async function start() {
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()
  server.applyMiddleware({ app: app as any })

  app.listen({ port: 4000 }, () => {
    console.log('Server ready at http://localhost:4000' + server.graphqlPath)
  })
}

start()