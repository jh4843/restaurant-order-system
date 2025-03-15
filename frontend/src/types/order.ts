export interface OrderRequest {
  food_name: string;
  quantity: number;
}

export interface OrderResponse {
  order_id: number;
  message: string;
}

export interface Order {
  order_id: number;
  food_name: string;
  quantity: number;
  status: string;
}
