from fastapi import APIRouter, HTTPException, Path

from models.order_model import OrderBroadcast, OrderRequest, OrderResponse
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

@router.get("/orders")
async def get_orders():
  return order_service.get_all_orders()

@router.patch("/order/{order_id}/processing", response_model=OrderBroadcast)
async def set_order_processing(order_id: int = Path(..., gt=0)):
  try:
    updated_order = order_service.update_order_status_to_processing(order_id)
    await manager.broadcast(updated_order)
    return updated_order  # ← 전체 주문 데이터 반환
  except ValueError:
    raise HTTPException(status_code=404, detail="해당 주문을 찾을 수 없습니다.")