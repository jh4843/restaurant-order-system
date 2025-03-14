from fastapi import APIRouter, HTTPException

from models.order_model import OrderRequest, OrderResponse
from services.order_service import order_service
from websocket.connection_manager import manager

router = APIRouter()

@router.post("/order", response_model=OrderResponse)
async def create_order(order: OrderRequest):
  order_data = order_service.create_order(order)

  # WebSocket 브로드캐스트
  await manager.broadcast(order_data)

  return {
      "order_id": order_data["order_id"],
      "message": "주문이 접수되었습니다"
  }
