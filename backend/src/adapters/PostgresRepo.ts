import { AdsRepository, Ad } from '../repo.js'

export class PostgresRepo implements AdsRepository {
  async insertBulk(ads: Ad[]): Promise<void> {
    console.log('PostgresRepo.insertBulk', ads.length)
    // TODO implement with drizzle
  }
  async getAll(): Promise<Ad[]> {
    console.log('PostgresRepo.getAll')
    return []
  }
}