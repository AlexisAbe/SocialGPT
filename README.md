# SocialGPT
# Social Bench Next

This repository contains a basic implementation of a Meta Ads dashboard with a React frontend and a Node GraphQL backend.

## Requirements
- Node.js 18+
- pnpm

## Development

Install dependencies and run the frontend:

```bash
pnpm install
pnpm dev
```

Start the backend separately:

```bash
pnpm --filter backend dev
```

The frontend expects the GraphQL API at `http://localhost:4000/graphql`.