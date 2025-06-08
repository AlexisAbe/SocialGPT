import { AdsRepository, Ad } from '../repo.js'

export class MongoRepo implements AdsRepository {
  async insertBulk(ads: Ad[]): Promise<void> {
    console.log('MongoRepo.insertBulk', ads.length)
    // TODO implement with Mongo driver
  }
  async getAll(): Promise<Ad[]> {
    console.log('MongoRepo.getAll')
    return []
  }
}