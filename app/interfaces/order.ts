export interface Order {
    _id: string;
    created_at: any,
    products: any,
    customer_id : string,
    total_amount_HT: number,
    total_amount_TTC: number
    
  }