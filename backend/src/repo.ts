export interface Ad {
  id: string;
  date: string;
  brand: string;
  budget: number;
  reach: number;
}

export interface AdsRepository {
  insertBulk(ads: Ad[]): Promise<void>;
  getAll(): Promise<Ad[]>;
}