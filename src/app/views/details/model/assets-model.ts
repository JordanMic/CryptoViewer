export interface AssetsModel{
  assets: AllAssetsModel[];
  next: number
}

export interface AllAssetsModel{
    asset_id: string
    name: string,
    price: number,
    volume_24h: number,
    change_1h: number,
    change_24h: number,
    change_7d: number,
    status: string,
    created_at: Date,
    updated_at: Date
}
