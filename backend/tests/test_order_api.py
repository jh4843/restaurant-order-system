#integrated test

import pytest
from httpx import AsyncClient

from main import app


@pytest.mark.asyncio
async def test_post_order_success():
  async with AsyncClient(base_url="http://127.0.0.1:8000") as ac:
    response = await ac.post("/order", json={
      "food_name": "Burger",
      "quantity": 3
    })
    assert response.status_code == 200
    data = response.json()
    assert data["message"] == "주문이 접수되었습니다"
    assert "order_id" in data


@pytest.mark.asyncio
async def test_post_order_missing_quantity():
  async with AsyncClient(base_url="http://127.0.0.1:8000") as ac:
    response = await ac.post("/order", json={
        "food_name": "Pizza"
    })
    assert response.status_code == 422  # validation error


@pytest.mark.asyncio
async def test_post_order_empty_food_name():
  async with AsyncClient(base_url="http://127.0.0.1:8000") as ac:
    response = await ac.post("/order", json={
      "food_name": "",
      "quantity": 2
    })
    assert response.status_code == 200  # FastAPI에서는 기본적으로 빈 문자열은 허용
    data = response.json()
    assert data["message"] == "주문이 접수되었습니다"


@pytest.mark.asyncio
async def test_post_order_invalid_food_name_type():
  async with AsyncClient(base_url="http://127.0.0.1:8000") as ac:
    response = await ac.post("/order", json={
      "food_name": 123,  # 문자열이 아닌 숫자
      "quantity": 2
    })
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_post_order_negative_quantity():
  async with AsyncClient(base_url="http://127.0.0.1:8000") as ac:
    response = await ac.post("/order", json={
      "food_name": "Sushi",
      "quantity": -1
    })
    assert response.status_code == 200  # 현재는 음수 허용됨 → 서비스 로직에서 추가 검증 필요
    data = response.json()
    assert data["message"] == "주문이 접수되었습니다"


@pytest.mark.asyncio
async def test_post_order_bulk_requests():
  async with AsyncClient(base_url="http://127.0.0.1:8000") as ac:
    for i in range(10):
      response = await ac.post("/order", json={
        "food_name": f"TestFood{i}",
        "quantity": i + 1
      })
      assert response.status_code == 200
      data = response.json()
      assert data["message"] == "주문이 접수되었습니다"
