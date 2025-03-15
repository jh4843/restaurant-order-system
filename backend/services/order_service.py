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
  
  def update_order_status_to_processing(self, order_id: int) -> Dict:
    for order in self.orders:
      if order["order_id"] == order_id:
        order["status"] = "처리 중"
        return order
    raise ValueError("해당 주문을 찾을 수 없습니다.")

  def get_all_orders(self) -> List[Dict]:
    return self.orders

order_service = OrderService()
