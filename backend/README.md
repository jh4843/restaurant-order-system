# RESTRAUNT-ORDER-SYSTEM

## 설치 Modules

### 가상환경 활성화

```bash
$ python -m venv venv
$ venv\Scripts\activate ## For Windows
```

### fastapi 설치

```bash
pip install fastapi uvicorn
```

#### 개발용

```
pip install -r requirements-dev.txt
```

#### 프로덕션용

```bash
pip install -r requirements.txt
```

### interpreter 설정

```
Ctrl+Shift+P (Command Palette) → Python: Select Interpreter → venv 가상환경 선택
```

### 자동완성 & 포멧팅 툴 설치

```bash
pip install black isort pylint mypy
```

## Test

```bash
pytest tests/
```
