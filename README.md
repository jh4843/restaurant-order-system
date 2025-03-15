# restaurant-order-system

## Overview

- 고객은 음식명과 수량을 입력하여 주문을 생성
- 서버는 주문을 처리하고 실시간으로 대시보드에 전송
- 다수 사용자가 동시에 접속해도 원활히 처리되는 구조 설계

## System Design

### Frontend

- React + Vite 기반 SPA
- REST API + WebSocket 통합 구조
- MVVM 아키텍처 기반 구조화

### Backend

- FastAPI 기반 REST API 서버
- `POST /order` → 주문 접수
- `GET /orders` → 전체 주문 목록 조회
- WebSocket 브로드캐스트로 실시간 주문 전파
- 임시 저장소 (in-memory list) 사용

## Features

| 기능                               | 구현 방식                              |
| ---------------------------------- | -------------------------------------- |
| 주문 입력                          | React Form + REST POST 요청            |
| 주문 접수 응답                     | FastAPI 응답 메시지 처리               |
| 대시보드 목록 표시                 | 상태 기반 테이블                       |
| 실시간 주문 수신                   | WebSocket 메시지 수신 및 상태 업데이트 |
| 최초 페이지 진입 시 전체 주문 수신 | `GET /orders`로 초기화 처리            |

---

### Environment

- Server IP는 127.0.0.1, Port는 80000 포트로 Run 하도록 .env에 정의해두었다.
- 그에 따라 Frontend에서도 해당 IP와 Port로 API 요청을 보내도록 설정하였다.
  - VITE_API_BASE_URL=http://127.0.0.1:8000
  - VITE_WS_URL=ws://127.0.0.1:8000/ws

## Run the Project

### Backend

#### Product version

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows 기준
pip install -r requirements.txt
uvicorn main:app --reload
```

#### Development version

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows 기준
pip install -r requirements-dev.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Performance Optimization

1. Websocket 사용시 전체 데이터가 아닌 변경된 데이터만 전송
2. 컴포넌트를 분리하여 상태를 Zustand Store에서만 관리하여 각 컴포넌트가 최소한의 상태만 구독하도록 구성
3. Backend에서 Broadcast시, 비동기를 통해 전송하여 서버 I/O 부하 최소화

## Directory Structure

```

restaurant-order-system
├─ backend
│ ├─ main.py
│ ├─ models
│ │ ├─ order_model.py
│ │ └─ **init**.py
│ ├─ README.md
│ ├─ requirements-dev.txt
│ ├─ requirements.txt
│ ├─ routes
│ │ ├─ order_router.py
│ │ ├─ ws_router.py
│ │ └─ **init**.py
│ ├─ services
│ │ ├─ order_service.py
│ │ └─ **init**.py
│ ├─ tests
│ │ ├─ integration
│ │ ├─ test_order_api.py
│ │ ├─ test_order_service.py
│ │ ├─ unit
│ │ └─ **init**.py
│ └─ websocket
│ └─ connection_manager.py
├─ frontend
│ ├─ eslint.config.js
│ ├─ index.html
│ ├─ package-lock.json
│ ├─ package.json
│ ├─ postcss.config.js
│ ├─ public
│ │ └─ vite.svg
│ ├─ README.md
│ ├─ src
│ │ ├─ App.css
│ │ ├─ App.tsx
│ │ ├─ assets
│ │ │ └─ react.svg
│ │ ├─ components
│ │ │ ├─ OrderForm.tsx
│ │ │ └─ OrderTable.tsx
│ │ ├─ hooks
│ │ ├─ index.css
│ │ ├─ main.tsx
│ │ ├─ pages
│ │ │ ├─ DashboardPage.tsx
│ │ │ └─ OrderPage.tsx
│ │ ├─ services
│ │ │ ├─ api.ts
│ │ │ └─ websocket.ts
│ │ ├─ stores
│ │ │ └─ orderStore.ts
│ │ ├─ types
│ │ │ └─ order.ts
│ │ ├─ utils
│ │ └─ vite-env.d.ts
│ ├─ tailwind.config.js
│ ├─ tsconfig.app.json
│ ├─ tsconfig.json
│ ├─ tsconfig.node.json
│ └─ vite.config.ts
└─ README.md

```

```

```
