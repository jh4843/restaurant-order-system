from fastapi import FastAPI

from routes.order_router import router as order_router
from routes.ws_router import router as ws_router

app = FastAPI()

app.include_router(order_router)
app.include_router(ws_router)
