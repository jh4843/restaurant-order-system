# unit test

from models.order_model import OrderRequest
from services.order_service import OrderService


def test_create_order():
  service = OrderService()
  request = OrderRequest(food_name="Pizza", quantity=2)
  result = service.create_order(request)

  assert result["order_id"] == 1
  assert result["food_name"] == "Pizza"
  assert result["quantity"] == 2
  assert result["status"] == "접수됨"


def test_create_multiple_orders():
  service = OrderService()
  r1 = service.create_order(OrderRequest(food_name="Burger", quantity=1))
  r2 = service.create_order(OrderRequest(food_name="Pasta", quantity=3))
  r3 = service.create_order(OrderRequest(food_name="Steak", quantity=5))

  assert r1["order_id"] == 1
  assert r2["order_id"] == 2
  assert r3["order_id"] == 3


def test_get_all_orders():
  service = OrderService()
  service.create_order(OrderRequest(food_name="Pizza", quantity=2))
  service.create_order(OrderRequest(food_name="Sushi", quantity=1))

  orders = service.get_all_orders()
  assert len(orders) == 2
  assert orders[0]["food_name"] == "Pizza"
  assert orders[1]["food_name"] == "Sushi"


def test_empty_orders_initially():
  service = OrderService()
  assert service.get_all_orders() == []


def test_order_status_default_value():
  service = OrderService()
  result = service.create_order(OrderRequest(food_name="Salad", quantity=1))
  assert result["status"] == "접수됨"
