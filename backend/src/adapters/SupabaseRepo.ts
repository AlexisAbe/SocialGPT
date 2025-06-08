import { AdsRepository, Ad } from '../repo.js'

export class SupabaseRepo implements AdsRepository {
  async insertBulk(ads: Ad[]): Promise<void> {
    console.log('SupabaseRepo.insertBulk', ads.length)
    // TODO implement with Supabase API
  }
  async getAll(): Promise<Ad[]> {
    console.log('SupabaseRepo.getAll')
    return []
  }
}