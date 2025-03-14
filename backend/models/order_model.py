from typing import Literal

from pydantic import BaseModel


class OrderRequest(BaseModel):
  food_name: str
  quantity: int

class OrderResponse(BaseModel):
  order_id: int
  message: str

class OrderBroadcast(BaseModel):
  order_id: int
  food_name: str
  quantity: int
  status: Literal['접수됨', '처리 중', '완료']
