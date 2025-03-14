from typing import Dict, List

from models.order_model import OrderBroadcast, OrderRequest


class OrderService:
  def __init__(self):
    self.orders: List[Dict] = []
    self.order_id = 1

  def create_order(self, order_request: OrderRequest) -> Dict:
    order_data = {
      "order_id": self.order_id,
      "food_name": order_request.food_name,
      "quantity": order_request.quantity,
      "status": "접수됨"
    }
    self.orders.append(order_data)
    self.order_id += 1
    return order_data

  def get_all_orders(self) -> List[Dict]:
    return self.orders

order_service = OrderService()
