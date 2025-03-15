from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from websocket.connection_manager import manager

router = APIRouter()

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
  await manager.connect(websocket)
  try:
    while True:
      await websocket.receive_text()  # 아무거나 받아야 연결 유지됨
  except WebSocketDisconnect:
      manager.disconnect(websocket)
