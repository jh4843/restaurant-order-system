# BACKEND for RESTRAUNT-ORDER-SYSTEM

## 설치 모듈

### 가상환경 활성화

```bash
$ python -m venv venv
$ venv\Scripts\activate ## For Windows
```

### Run

```bash
$ uvicorn main:app --reload
```

### fastapi 설치

```bash
pip install fastapi uvicorn
```

#### 개발용

```bash
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

## Test

```bash
pytest tests/
```

## Run Server

```
$ uvicorn main:app --reload
```

## Project Structure

```
backend
├─ .pytest_cache
│  ├─ CACHEDIR.TAG
│  ├─ README.md
│  └─ v
│     └─ cache
│        ├─ lastfailed
│        ├─ nodeids
│        └─ stepwise
├─ main.py
├─ models
│  ├─ order_model.py
│  ├─ __init__.py
│  └─ __pycache__
│     ├─ order_model.cpython-311.pyc
│     ├─ order_model.cpython-313.pyc
│     ├─ __init__.cpython-311.pyc
│     └─ __init__.cpython-313.pyc
├─ README.md
├─ requirements-dev.txt
├─ requirements.txt
├─ routes
│  ├─ order_router.py
│  ├─ ws_router.py
│  ├─ __init__.py
│  └─ __pycache__
│     ├─ order_router.cpython-313.pyc
│     ├─ ws_router.cpython-313.pyc
│     └─ __init__.cpython-313.pyc
├─ services
│  ├─ order_service.py
│  ├─ __init__.py
│  └─ __pycache__
│     ├─ order_service.cpython-311.pyc
│     ├─ order_service.cpython-313.pyc
│     ├─ __init__.cpython-311.pyc
│     └─ __init__.cpython-313.pyc
├─ tests
│  ├─ integration
│  ├─ test_order_api.py
│  ├─ test_order_service.py
│  ├─ unit
│  ├─ __init__.py
│  └─ __pycache__
│     ├─ test_order_api.cpython-311-pytest-7.4.0.pyc
│     ├─ test_order_api.cpython-313-pytest-8.3.5.pyc
│     ├─ test_order_service.cpython-311-pytest-7.4.0.pyc
│     ├─ test_order_service.cpython-313-pytest-8.3.5.pyc
│     ├─ test_websocket.cpython-311-pytest-7.4.0.pyc
│     ├─ test_websocket.cpython-313-pytest-8.3.5.pyc
│     ├─ __init__.cpython-311.pyc
│     └─ __init__.cpython-313.pyc
├─ venv
│  ├─ Include
│  ├─ Lib
│  │  └─ site-packages
│  │     ├─ 30fcd23745efe32ce681__mypyc.cp313-win_amd64.pyd
│  │     ├─ 3204bda914b7f2c6f497__mypyc.cp313-win_amd64.pyd
│  │     ├─ annotated_types
│  │     │  ├─ py.typed
│  │     │  ├─ test_cases.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ test_cases.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ annotated_types-0.7.0.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ anyio
│  │     │  ├─ abc
│  │     │  │  ├─ _eventloop.py
│  │     │  │  ├─ _resources.py
│  │     │  │  ├─ _sockets.py
│  │     │  │  ├─ _streams.py
│  │     │  │  ├─ _subprocesses.py
│  │     │  │  ├─ _tasks.py
│  │     │  │  ├─ _testing.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _eventloop.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _eventloop.cpython-313.pyc
│  │     │  │     ├─ _resources.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _resources.cpython-313.pyc
│  │     │  │     ├─ _sockets.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _sockets.cpython-313.pyc
│  │     │  │     ├─ _streams.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _streams.cpython-313.pyc
│  │     │  │     ├─ _subprocesses.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _subprocesses.cpython-313.pyc
│  │     │  │     ├─ _tasks.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _tasks.cpython-313.pyc
│  │     │  │     ├─ _testing.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _testing.cpython-313.pyc
│  │     │  │     ├─ __init__.cpython-313-pytest-8.3.5.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ from_thread.py
│  │     │  ├─ lowlevel.py
│  │     │  ├─ py.typed
│  │     │  ├─ pytest_plugin.py
│  │     │  ├─ streams
│  │     │  │  ├─ buffered.py
│  │     │  │  ├─ file.py
│  │     │  │  ├─ memory.py
│  │     │  │  ├─ stapled.py
│  │     │  │  ├─ text.py
│  │     │  │  ├─ tls.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ buffered.cpython-313.pyc
│  │     │  │     ├─ file.cpython-313.pyc
│  │     │  │     ├─ memory.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ memory.cpython-313.pyc
│  │     │  │     ├─ stapled.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ stapled.cpython-313.pyc
│  │     │  │     ├─ text.cpython-313.pyc
│  │     │  │     ├─ tls.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ tls.cpython-313.pyc
│  │     │  │     ├─ __init__.cpython-313-pytest-8.3.5.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ to_interpreter.py
│  │     │  ├─ to_process.py
│  │     │  ├─ to_thread.py
│  │     │  ├─ _backends
│  │     │  │  ├─ _asyncio.py
│  │     │  │  ├─ _trio.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _asyncio.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _asyncio.cpython-313.pyc
│  │     │  │     ├─ _trio.cpython-313.pyc
│  │     │  │     ├─ __init__.cpython-313-pytest-8.3.5.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _core
│  │     │  │  ├─ _asyncio_selector_thread.py
│  │     │  │  ├─ _eventloop.py
│  │     │  │  ├─ _exceptions.py
│  │     │  │  ├─ _fileio.py
│  │     │  │  ├─ _resources.py
│  │     │  │  ├─ _signals.py
│  │     │  │  ├─ _sockets.py
│  │     │  │  ├─ _streams.py
│  │     │  │  ├─ _subprocesses.py
│  │     │  │  ├─ _synchronization.py
│  │     │  │  ├─ _tasks.py
│  │     │  │  ├─ _testing.py
│  │     │  │  ├─ _typedattr.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _asyncio_selector_thread.cpython-313.pyc
│  │     │  │     ├─ _eventloop.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _eventloop.cpython-313.pyc
│  │     │  │     ├─ _exceptions.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _exceptions.cpython-313.pyc
│  │     │  │     ├─ _fileio.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _fileio.cpython-313.pyc
│  │     │  │     ├─ _resources.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _resources.cpython-313.pyc
│  │     │  │     ├─ _signals.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _signals.cpython-313.pyc
│  │     │  │     ├─ _sockets.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _sockets.cpython-313.pyc
│  │     │  │     ├─ _streams.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _streams.cpython-313.pyc
│  │     │  │     ├─ _subprocesses.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _subprocesses.cpython-313.pyc
│  │     │  │     ├─ _synchronization.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _synchronization.cpython-313.pyc
│  │     │  │     ├─ _tasks.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _tasks.cpython-313.pyc
│  │     │  │     ├─ _testing.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _testing.cpython-313.pyc
│  │     │  │     ├─ _typedattr.cpython-313-pytest-8.3.5.pyc
│  │     │  │     ├─ _typedattr.cpython-313.pyc
│  │     │  │     ├─ __init__.cpython-313-pytest-8.3.5.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ from_thread.cpython-313-pytest-8.3.5.pyc
│  │     │     ├─ from_thread.cpython-313.pyc
│  │     │     ├─ lowlevel.cpython-313-pytest-8.3.5.pyc
│  │     │     ├─ lowlevel.cpython-313.pyc
│  │     │     ├─ pytest_plugin.cpython-313-pytest-8.3.5.pyc
│  │     │     ├─ pytest_plugin.cpython-313.pyc
│  │     │     ├─ to_interpreter.cpython-313.pyc
│  │     │     ├─ to_process.cpython-313.pyc
│  │     │     ├─ to_thread.cpython-313-pytest-8.3.5.pyc
│  │     │     ├─ to_thread.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313-pytest-8.3.5.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ anyio-4.8.0.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ astroid
│  │     │  ├─ arguments.py
│  │     │  ├─ astroid_manager.py
│  │     │  ├─ bases.py
│  │     │  ├─ brain
│  │     │  │  ├─ brain_argparse.py
│  │     │  │  ├─ brain_attrs.py
│  │     │  │  ├─ brain_boto3.py
│  │     │  │  ├─ brain_builtin_inference.py
│  │     │  │  ├─ brain_collections.py
│  │     │  │  ├─ brain_crypt.py
│  │     │  │  ├─ brain_ctypes.py
│  │     │  │  ├─ brain_curses.py
│  │     │  │  ├─ brain_dataclasses.py
│  │     │  │  ├─ brain_datetime.py
│  │     │  │  ├─ brain_dateutil.py
│  │     │  │  ├─ brain_functools.py
│  │     │  │  ├─ brain_gi.py
│  │     │  │  ├─ brain_hashlib.py
│  │     │  │  ├─ brain_http.py
│  │     │  │  ├─ brain_hypothesis.py
│  │     │  │  ├─ brain_io.py
│  │     │  │  ├─ brain_mechanize.py
│  │     │  │  ├─ brain_multiprocessing.py
│  │     │  │  ├─ brain_namedtuple_enum.py
│  │     │  │  ├─ brain_nose.py
│  │     │  │  ├─ brain_numpy_core_einsumfunc.py
│  │     │  │  ├─ brain_numpy_core_fromnumeric.py
│  │     │  │  ├─ brain_numpy_core_function_base.py
│  │     │  │  ├─ brain_numpy_core_multiarray.py
│  │     │  │  ├─ brain_numpy_core_numeric.py
│  │     │  │  ├─ brain_numpy_core_numerictypes.py
│  │     │  │  ├─ brain_numpy_core_umath.py
│  │     │  │  ├─ brain_numpy_ma.py
│  │     │  │  ├─ brain_numpy_ndarray.py
│  │     │  │  ├─ brain_numpy_random_mtrand.py
│  │     │  │  ├─ brain_numpy_utils.py
│  │     │  │  ├─ brain_pathlib.py
│  │     │  │  ├─ brain_pkg_resources.py
│  │     │  │  ├─ brain_pytest.py
│  │     │  │  ├─ brain_qt.py
│  │     │  │  ├─ brain_random.py
│  │     │  │  ├─ brain_re.py
│  │     │  │  ├─ brain_regex.py
│  │     │  │  ├─ brain_responses.py
│  │     │  │  ├─ brain_scipy_signal.py
│  │     │  │  ├─ brain_signal.py
│  │     │  │  ├─ brain_six.py
│  │     │  │  ├─ brain_sqlalchemy.py
│  │     │  │  ├─ brain_ssl.py
│  │     │  │  ├─ brain_subprocess.py
│  │     │  │  ├─ brain_threading.py
│  │     │  │  ├─ brain_type.py
│  │     │  │  ├─ brain_typing.py
│  │     │  │  ├─ brain_unittest.py
│  │     │  │  ├─ brain_uuid.py
│  │     │  │  ├─ helpers.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ brain_argparse.cpython-313.pyc
│  │     │  │     ├─ brain_attrs.cpython-313.pyc
│  │     │  │     ├─ brain_boto3.cpython-313.pyc
│  │     │  │     ├─ brain_builtin_inference.cpython-313.pyc
│  │     │  │     ├─ brain_collections.cpython-313.pyc
│  │     │  │     ├─ brain_crypt.cpython-313.pyc
│  │     │  │     ├─ brain_ctypes.cpython-313.pyc
│  │     │  │     ├─ brain_curses.cpython-313.pyc
│  │     │  │     ├─ brain_dataclasses.cpython-313.pyc
│  │     │  │     ├─ brain_datetime.cpython-313.pyc
│  │     │  │     ├─ brain_dateutil.cpython-313.pyc
│  │     │  │     ├─ brain_functools.cpython-313.pyc
│  │     │  │     ├─ brain_gi.cpython-313.pyc
│  │     │  │     ├─ brain_hashlib.cpython-313.pyc
│  │     │  │     ├─ brain_http.cpython-313.pyc
│  │     │  │     ├─ brain_hypothesis.cpython-313.pyc
│  │     │  │     ├─ brain_io.cpython-313.pyc
│  │     │  │     ├─ brain_mechanize.cpython-313.pyc
│  │     │  │     ├─ brain_multiprocessing.cpython-313.pyc
│  │     │  │     ├─ brain_namedtuple_enum.cpython-313.pyc
│  │     │  │     ├─ brain_nose.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_core_einsumfunc.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_core_fromnumeric.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_core_function_base.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_core_multiarray.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_core_numeric.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_core_numerictypes.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_core_umath.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_ma.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_ndarray.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_random_mtrand.cpython-313.pyc
│  │     │  │     ├─ brain_numpy_utils.cpython-313.pyc
│  │     │  │     ├─ brain_pathlib.cpython-313.pyc
│  │     │  │     ├─ brain_pkg_resources.cpython-313.pyc
│  │     │  │     ├─ brain_pytest.cpython-313.pyc
│  │     │  │     ├─ brain_qt.cpython-313.pyc
│  │     │  │     ├─ brain_random.cpython-313.pyc
│  │     │  │     ├─ brain_re.cpython-313.pyc
│  │     │  │     ├─ brain_regex.cpython-313.pyc
│  │     │  │     ├─ brain_responses.cpython-313.pyc
│  │     │  │     ├─ brain_scipy_signal.cpython-313.pyc
│  │     │  │     ├─ brain_signal.cpython-313.pyc
│  │     │  │     ├─ brain_six.cpython-313.pyc
│  │     │  │     ├─ brain_sqlalchemy.cpython-313.pyc
│  │     │  │     ├─ brain_ssl.cpython-313.pyc
│  │     │  │     ├─ brain_subprocess.cpython-313.pyc
│  │     │  │     ├─ brain_threading.cpython-313.pyc
│  │     │  │     ├─ brain_type.cpython-313.pyc
│  │     │  │     ├─ brain_typing.cpython-313.pyc
│  │     │  │     ├─ brain_unittest.cpython-313.pyc
│  │     │  │     ├─ brain_uuid.cpython-313.pyc
│  │     │  │     ├─ helpers.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ builder.py
│  │     │  ├─ const.py
│  │     │  ├─ constraint.py
│  │     │  ├─ context.py
│  │     │  ├─ decorators.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ filter_statements.py
│  │     │  ├─ helpers.py
│  │     │  ├─ inference_tip.py
│  │     │  ├─ interpreter
│  │     │  │  ├─ dunder_lookup.py
│  │     │  │  ├─ objectmodel.py
│  │     │  │  ├─ _import
│  │     │  │  │  ├─ spec.py
│  │     │  │  │  ├─ util.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ spec.cpython-313.pyc
│  │     │  │  │     ├─ util.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ dunder_lookup.cpython-313.pyc
│  │     │  │     ├─ objectmodel.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ manager.py
│  │     │  ├─ modutils.py
│  │     │  ├─ nodes
│  │     │  │  ├─ as_string.py
│  │     │  │  ├─ const.py
│  │     │  │  ├─ node_classes.py
│  │     │  │  ├─ node_ng.py
│  │     │  │  ├─ scoped_nodes
│  │     │  │  │  ├─ mixin.py
│  │     │  │  │  ├─ scoped_nodes.py
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ mixin.cpython-313.pyc
│  │     │  │  │     ├─ scoped_nodes.cpython-313.pyc
│  │     │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ _base_nodes.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ as_string.cpython-313.pyc
│  │     │  │     ├─ const.cpython-313.pyc
│  │     │  │     ├─ node_classes.cpython-313.pyc
│  │     │  │     ├─ node_ng.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ _base_nodes.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ objects.py
│  │     │  ├─ protocols.py
│  │     │  ├─ raw_building.py
│  │     │  ├─ rebuilder.py
│  │     │  ├─ test_utils.py
│  │     │  ├─ transforms.py
│  │     │  ├─ typing.py
│  │     │  ├─ util.py
│  │     │  ├─ _ast.py
│  │     │  ├─ _backport_stdlib_names.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __pkginfo__.py
│  │     │  └─ __pycache__
│  │     │     ├─ arguments.cpython-313.pyc
│  │     │     ├─ astroid_manager.cpython-313.pyc
│  │     │     ├─ bases.cpython-313.pyc
│  │     │     ├─ builder.cpython-313.pyc
│  │     │     ├─ const.cpython-313.pyc
│  │     │     ├─ constraint.cpython-313.pyc
│  │     │     ├─ context.cpython-313.pyc
│  │     │     ├─ decorators.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ filter_statements.cpython-313.pyc
│  │     │     ├─ helpers.cpython-313.pyc
│  │     │     ├─ inference_tip.cpython-313.pyc
│  │     │     ├─ manager.cpython-313.pyc
│  │     │     ├─ modutils.cpython-313.pyc
│  │     │     ├─ objects.cpython-313.pyc
│  │     │     ├─ protocols.cpython-313.pyc
│  │     │     ├─ raw_building.cpython-313.pyc
│  │     │     ├─ rebuilder.cpython-313.pyc
│  │     │     ├─ test_utils.cpython-313.pyc
│  │     │     ├─ transforms.cpython-313.pyc
│  │     │     ├─ typing.cpython-313.pyc
│  │     │     ├─ util.cpython-313.pyc
│  │     │     ├─ _ast.cpython-313.pyc
│  │     │     ├─ _backport_stdlib_names.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __pkginfo__.cpython-313.pyc
│  │     ├─ astroid-3.3.9.dist-info
│  │     │  ├─ CONTRIBUTORS.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ black
│  │     │  ├─ brackets.cp313-win_amd64.pyd
│  │     │  ├─ brackets.py
│  │     │  ├─ cache.cp313-win_amd64.pyd
│  │     │  ├─ cache.py
│  │     │  ├─ comments.cp313-win_amd64.pyd
│  │     │  ├─ comments.py
│  │     │  ├─ concurrency.py
│  │     │  ├─ const.cp313-win_amd64.pyd
│  │     │  ├─ const.py
│  │     │  ├─ debug.py
│  │     │  ├─ files.py
│  │     │  ├─ handle_ipynb_magics.cp313-win_amd64.pyd
│  │     │  ├─ handle_ipynb_magics.py
│  │     │  ├─ linegen.cp313-win_amd64.pyd
│  │     │  ├─ linegen.py
│  │     │  ├─ lines.cp313-win_amd64.pyd
│  │     │  ├─ lines.py
│  │     │  ├─ mode.cp313-win_amd64.pyd
│  │     │  ├─ mode.py
│  │     │  ├─ nodes.cp313-win_amd64.pyd
│  │     │  ├─ nodes.py
│  │     │  ├─ numerics.cp313-win_amd64.pyd
│  │     │  ├─ numerics.py
│  │     │  ├─ output.py
│  │     │  ├─ parsing.cp313-win_amd64.pyd
│  │     │  ├─ parsing.py
│  │     │  ├─ py.typed
│  │     │  ├─ ranges.cp313-win_amd64.pyd
│  │     │  ├─ ranges.py
│  │     │  ├─ report.py
│  │     │  ├─ resources
│  │     │  │  ├─ black.schema.json
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ rusty.cp313-win_amd64.pyd
│  │     │  ├─ rusty.py
│  │     │  ├─ schema.cp313-win_amd64.pyd
│  │     │  ├─ schema.py
│  │     │  ├─ strings.cp313-win_amd64.pyd
│  │     │  ├─ strings.py
│  │     │  ├─ trans.cp313-win_amd64.pyd
│  │     │  ├─ trans.py
│  │     │  ├─ _width_table.cp313-win_amd64.pyd
│  │     │  ├─ _width_table.py
│  │     │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ brackets.cpython-313.pyc
│  │     │     ├─ cache.cpython-313.pyc
│  │     │     ├─ comments.cpython-313.pyc
│  │     │     ├─ concurrency.cpython-313.pyc
│  │     │     ├─ const.cpython-313.pyc
│  │     │     ├─ debug.cpython-313.pyc
│  │     │     ├─ files.cpython-313.pyc
│  │     │     ├─ handle_ipynb_magics.cpython-313.pyc
│  │     │     ├─ linegen.cpython-313.pyc
│  │     │     ├─ lines.cpython-313.pyc
│  │     │     ├─ mode.cpython-313.pyc
│  │     │     ├─ nodes.cpython-313.pyc
│  │     │     ├─ numerics.cpython-313.pyc
│  │     │     ├─ output.cpython-313.pyc
│  │     │     ├─ parsing.cpython-313.pyc
│  │     │     ├─ ranges.cpython-313.pyc
│  │     │     ├─ report.cpython-313.pyc
│  │     │     ├─ rusty.cpython-313.pyc
│  │     │     ├─ schema.cpython-313.pyc
│  │     │     ├─ strings.cpython-313.pyc
│  │     │     ├─ trans.cpython-313.pyc
│  │     │     ├─ _width_table.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ black-25.1.0.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  ├─ AUTHORS.md
│  │     │  │  └─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  └─ WHEEL
│  │     ├─ blackd
│  │     │  ├─ middlewares.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ middlewares.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ blib2to3
│  │     │  ├─ Grammar.txt
│  │     │  ├─ LICENSE
│  │     │  ├─ PatternGrammar.txt
│  │     │  ├─ pgen2
│  │     │  │  ├─ conv.cp313-win_amd64.pyd
│  │     │  │  ├─ conv.py
│  │     │  │  ├─ driver.cp313-win_amd64.pyd
│  │     │  │  ├─ driver.py
│  │     │  │  ├─ grammar.cp313-win_amd64.pyd
│  │     │  │  ├─ grammar.py
│  │     │  │  ├─ literals.cp313-win_amd64.pyd
│  │     │  │  ├─ literals.py
│  │     │  │  ├─ parse.cp313-win_amd64.pyd
│  │     │  │  ├─ parse.py
│  │     │  │  ├─ pgen.cp313-win_amd64.pyd
│  │     │  │  ├─ pgen.py
│  │     │  │  ├─ token.cp313-win_amd64.pyd
│  │     │  │  ├─ token.py
│  │     │  │  ├─ tokenize.cp313-win_amd64.pyd
│  │     │  │  ├─ tokenize.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ conv.cpython-313.pyc
│  │     │  │     ├─ driver.cpython-313.pyc
│  │     │  │     ├─ grammar.cpython-313.pyc
│  │     │  │     ├─ literals.cpython-313.pyc
│  │     │  │     ├─ parse.cpython-313.pyc
│  │     │  │     ├─ pgen.cpython-313.pyc
│  │     │  │     ├─ token.cpython-313.pyc
│  │     │  │     ├─ tokenize.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ pygram.cp313-win_amd64.pyd
│  │     │  ├─ pygram.py
│  │     │  ├─ pytree.cp313-win_amd64.pyd
│  │     │  ├─ pytree.py
│  │     │  ├─ README
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ pygram.cpython-313.pyc
│  │     │     ├─ pytree.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ certifi
│  │     │  ├─ cacert.pem
│  │     │  ├─ core.py
│  │     │  ├─ py.typed
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ core.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ certifi-2025.1.31.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ click
│  │     │  ├─ core.py
│  │     │  ├─ decorators.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ formatting.py
│  │     │  ├─ globals.py
│  │     │  ├─ parser.py
│  │     │  ├─ py.typed
│  │     │  ├─ shell_completion.py
│  │     │  ├─ termui.py
│  │     │  ├─ testing.py
│  │     │  ├─ types.py
│  │     │  ├─ utils.py
│  │     │  ├─ _compat.py
│  │     │  ├─ _termui_impl.py
│  │     │  ├─ _textwrap.py
│  │     │  ├─ _winconsole.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ core.cpython-313.pyc
│  │     │     ├─ decorators.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ formatting.cpython-313.pyc
│  │     │     ├─ globals.cpython-313.pyc
│  │     │     ├─ parser.cpython-313.pyc
│  │     │     ├─ shell_completion.cpython-313.pyc
│  │     │     ├─ termui.cpython-313.pyc
│  │     │     ├─ testing.cpython-313.pyc
│  │     │     ├─ types.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ _compat.cpython-313.pyc
│  │     │     ├─ _termui_impl.cpython-313.pyc
│  │     │     ├─ _textwrap.cpython-313.pyc
│  │     │     ├─ _winconsole.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ click-8.1.8.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE.txt
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ colorama
│  │     │  ├─ ansi.py
│  │     │  ├─ ansitowin32.py
│  │     │  ├─ initialise.py
│  │     │  ├─ tests
│  │     │  │  ├─ ansitowin32_test.py
│  │     │  │  ├─ ansi_test.py
│  │     │  │  ├─ initialise_test.py
│  │     │  │  ├─ isatty_test.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ winterm_test.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ ansitowin32_test.cpython-313.pyc
│  │     │  │     ├─ ansi_test.cpython-313.pyc
│  │     │  │     ├─ initialise_test.cpython-313.pyc
│  │     │  │     ├─ isatty_test.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ winterm_test.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ win32.py
│  │     │  ├─ winterm.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ ansi.cpython-313.pyc
│  │     │     ├─ ansitowin32.cpython-313.pyc
│  │     │     ├─ initialise.cpython-313.pyc
│  │     │     ├─ win32.cpython-313.pyc
│  │     │     ├─ winterm.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ colorama-0.4.6.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE.txt
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ dill
│  │     │  ├─ detect.py
│  │     │  ├─ logger.py
│  │     │  ├─ objtypes.py
│  │     │  ├─ pointers.py
│  │     │  ├─ session.py
│  │     │  ├─ settings.py
│  │     │  ├─ source.py
│  │     │  ├─ temp.py
│  │     │  ├─ tests
│  │     │  │  ├─ test_abc.py
│  │     │  │  ├─ test_check.py
│  │     │  │  ├─ test_classdef.py
│  │     │  │  ├─ test_dataclasses.py
│  │     │  │  ├─ test_detect.py
│  │     │  │  ├─ test_dictviews.py
│  │     │  │  ├─ test_diff.py
│  │     │  │  ├─ test_extendpickle.py
│  │     │  │  ├─ test_fglobals.py
│  │     │  │  ├─ test_file.py
│  │     │  │  ├─ test_functions.py
│  │     │  │  ├─ test_functors.py
│  │     │  │  ├─ test_logger.py
│  │     │  │  ├─ test_mixins.py
│  │     │  │  ├─ test_module.py
│  │     │  │  ├─ test_moduledict.py
│  │     │  │  ├─ test_nested.py
│  │     │  │  ├─ test_objects.py
│  │     │  │  ├─ test_properties.py
│  │     │  │  ├─ test_pycapsule.py
│  │     │  │  ├─ test_recursive.py
│  │     │  │  ├─ test_registered.py
│  │     │  │  ├─ test_restricted.py
│  │     │  │  ├─ test_selected.py
│  │     │  │  ├─ test_session.py
│  │     │  │  ├─ test_source.py
│  │     │  │  ├─ test_sources.py
│  │     │  │  ├─ test_temp.py
│  │     │  │  ├─ test_threads.py
│  │     │  │  ├─ test_weakref.py
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __main__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ test_abc.cpython-313.pyc
│  │     │  │     ├─ test_check.cpython-313.pyc
│  │     │  │     ├─ test_classdef.cpython-313.pyc
│  │     │  │     ├─ test_dataclasses.cpython-313.pyc
│  │     │  │     ├─ test_detect.cpython-313.pyc
│  │     │  │     ├─ test_dictviews.cpython-313.pyc
│  │     │  │     ├─ test_diff.cpython-313.pyc
│  │     │  │     ├─ test_extendpickle.cpython-313.pyc
│  │     │  │     ├─ test_fglobals.cpython-313.pyc
│  │     │  │     ├─ test_file.cpython-313.pyc
│  │     │  │     ├─ test_functions.cpython-313.pyc
│  │     │  │     ├─ test_functors.cpython-313.pyc
│  │     │  │     ├─ test_logger.cpython-313.pyc
│  │     │  │     ├─ test_mixins.cpython-313.pyc
│  │     │  │     ├─ test_module.cpython-313.pyc
│  │     │  │     ├─ test_moduledict.cpython-313.pyc
│  │     │  │     ├─ test_nested.cpython-313.pyc
│  │     │  │     ├─ test_objects.cpython-313.pyc
│  │     │  │     ├─ test_properties.cpython-313.pyc
│  │     │  │     ├─ test_pycapsule.cpython-313.pyc
│  │     │  │     ├─ test_recursive.cpython-313.pyc
│  │     │  │     ├─ test_registered.cpython-313.pyc
│  │     │  │     ├─ test_restricted.cpython-313.pyc
│  │     │  │     ├─ test_selected.cpython-313.pyc
│  │     │  │     ├─ test_session.cpython-313.pyc
│  │     │  │     ├─ test_source.cpython-313.pyc
│  │     │  │     ├─ test_sources.cpython-313.pyc
│  │     │  │     ├─ test_temp.cpython-313.pyc
│  │     │  │     ├─ test_threads.cpython-313.pyc
│  │     │  │     ├─ test_weakref.cpython-313.pyc
│  │     │  │     ├─ __init__.cpython-313.pyc
│  │     │  │     └─ __main__.cpython-313.pyc
│  │     │  ├─ _dill.py
│  │     │  ├─ _objects.py
│  │     │  ├─ _shims.py
│  │     │  ├─ __diff.py
│  │     │  ├─ __info__.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ detect.cpython-313.pyc
│  │     │     ├─ logger.cpython-313.pyc
│  │     │     ├─ objtypes.cpython-313.pyc
│  │     │     ├─ pointers.cpython-313.pyc
│  │     │     ├─ session.cpython-313.pyc
│  │     │     ├─ settings.cpython-313.pyc
│  │     │     ├─ source.cpython-313.pyc
│  │     │     ├─ temp.cpython-313.pyc
│  │     │     ├─ _dill.cpython-313.pyc
│  │     │     ├─ _objects.cpython-313.pyc
│  │     │     ├─ _shims.cpython-313.pyc
│  │     │     ├─ __diff.cpython-313.pyc
│  │     │     ├─ __info__.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ dill-0.3.9.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ dotenv
│  │     │  ├─ cli.py
│  │     │  ├─ ipython.py
│  │     │  ├─ main.py
│  │     │  ├─ parser.py
│  │     │  ├─ py.typed
│  │     │  ├─ variables.py
│  │     │  ├─ version.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ cli.cpython-313.pyc
│  │     │     ├─ ipython.cpython-313.pyc
│  │     │     ├─ main.cpython-313.pyc
│  │     │     ├─ parser.cpython-313.pyc
│  │     │     ├─ variables.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ fastapi
│  │     │  ├─ applications.py
│  │     │  ├─ background.py
│  │     │  ├─ cli.py
│  │     │  ├─ concurrency.py
│  │     │  ├─ datastructures.py
│  │     │  ├─ dependencies
│  │     │  │  ├─ models.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ models.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ encoders.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ exception_handlers.py
│  │     │  ├─ logger.py
│  │     │  ├─ middleware
│  │     │  │  ├─ cors.py
│  │     │  │  ├─ gzip.py
│  │     │  │  ├─ httpsredirect.py
│  │     │  │  ├─ trustedhost.py
│  │     │  │  ├─ wsgi.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ cors.cpython-313.pyc
│  │     │  │     ├─ gzip.cpython-313.pyc
│  │     │  │     ├─ httpsredirect.cpython-313.pyc
│  │     │  │     ├─ trustedhost.cpython-313.pyc
│  │     │  │     ├─ wsgi.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ openapi
│  │     │  │  ├─ constants.py
│  │     │  │  ├─ docs.py
│  │     │  │  ├─ models.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ constants.cpython-313.pyc
│  │     │  │     ├─ docs.cpython-313.pyc
│  │     │  │     ├─ models.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ params.py
│  │     │  ├─ param_functions.py
│  │     │  ├─ py.typed
│  │     │  ├─ requests.py
│  │     │  ├─ responses.py
│  │     │  ├─ routing.py
│  │     │  ├─ security
│  │     │  │  ├─ api_key.py
│  │     │  │  ├─ base.py
│  │     │  │  ├─ http.py
│  │     │  │  ├─ oauth2.py
│  │     │  │  ├─ open_id_connect_url.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ api_key.cpython-313.pyc
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ http.cpython-313.pyc
│  │     │  │     ├─ oauth2.cpython-313.pyc
│  │     │  │     ├─ open_id_connect_url.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ staticfiles.py
│  │     │  ├─ templating.py
│  │     │  ├─ testclient.py
│  │     │  ├─ types.py
│  │     │  ├─ utils.py
│  │     │  ├─ websockets.py
│  │     │  ├─ _compat.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ applications.cpython-313.pyc
│  │     │     ├─ background.cpython-313.pyc
│  │     │     ├─ cli.cpython-313.pyc
│  │     │     ├─ concurrency.cpython-313.pyc
│  │     │     ├─ datastructures.cpython-313.pyc
│  │     │     ├─ encoders.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ exception_handlers.cpython-313.pyc
│  │     │     ├─ logger.cpython-313.pyc
│  │     │     ├─ params.cpython-313.pyc
│  │     │     ├─ param_functions.cpython-313.pyc
│  │     │     ├─ requests.cpython-313.pyc
│  │     │     ├─ responses.cpython-313.pyc
│  │     │     ├─ routing.cpython-313.pyc
│  │     │     ├─ staticfiles.cpython-313.pyc
│  │     │     ├─ templating.cpython-313.pyc
│  │     │     ├─ testclient.cpython-313.pyc
│  │     │     ├─ types.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ websockets.cpython-313.pyc
│  │     │     ├─ _compat.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ fastapi-0.115.11.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  └─ WHEEL
│  │     ├─ h11
│  │     │  ├─ py.typed
│  │     │  ├─ tests
│  │     │  │  ├─ data
│  │     │  │  │  └─ test-file
│  │     │  │  ├─ helpers.py
│  │     │  │  ├─ test_against_stdlib_http.py
│  │     │  │  ├─ test_connection.py
│  │     │  │  ├─ test_events.py
│  │     │  │  ├─ test_headers.py
│  │     │  │  ├─ test_helpers.py
│  │     │  │  ├─ test_io.py
│  │     │  │  ├─ test_receivebuffer.py
│  │     │  │  ├─ test_state.py
│  │     │  │  ├─ test_util.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ helpers.cpython-313.pyc
│  │     │  │     ├─ test_against_stdlib_http.cpython-313.pyc
│  │     │  │     ├─ test_connection.cpython-313.pyc
│  │     │  │     ├─ test_events.cpython-313.pyc
│  │     │  │     ├─ test_headers.cpython-313.pyc
│  │     │  │     ├─ test_helpers.cpython-313.pyc
│  │     │  │     ├─ test_io.cpython-313.pyc
│  │     │  │     ├─ test_receivebuffer.cpython-313.pyc
│  │     │  │     ├─ test_state.cpython-313.pyc
│  │     │  │     ├─ test_util.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _abnf.py
│  │     │  ├─ _connection.py
│  │     │  ├─ _events.py
│  │     │  ├─ _headers.py
│  │     │  ├─ _readers.py
│  │     │  ├─ _receivebuffer.py
│  │     │  ├─ _state.py
│  │     │  ├─ _util.py
│  │     │  ├─ _version.py
│  │     │  ├─ _writers.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ _abnf.cpython-313.pyc
│  │     │     ├─ _connection.cpython-313.pyc
│  │     │     ├─ _events.cpython-313.pyc
│  │     │     ├─ _headers.cpython-313.pyc
│  │     │     ├─ _readers.cpython-313.pyc
│  │     │     ├─ _receivebuffer.cpython-313.pyc
│  │     │     ├─ _state.cpython-313.pyc
│  │     │     ├─ _util.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     ├─ _writers.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ h11-0.14.0.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE.txt
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ httpcore
│  │     │  ├─ backends
│  │     │  │  ├─ asyncio.py
│  │     │  │  ├─ auto.py
│  │     │  │  ├─ base.py
│  │     │  │  ├─ mock.py
│  │     │  │  ├─ sync.py
│  │     │  │  ├─ trio.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ asyncio.cpython-313.pyc
│  │     │  │     ├─ auto.cpython-313.pyc
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ mock.cpython-313.pyc
│  │     │  │     ├─ sync.cpython-313.pyc
│  │     │  │     ├─ trio.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ _api.py
│  │     │  ├─ _async
│  │     │  │  ├─ connection.py
│  │     │  │  ├─ connection_pool.py
│  │     │  │  ├─ http11.py
│  │     │  │  ├─ http2.py
│  │     │  │  ├─ http_proxy.py
│  │     │  │  ├─ interfaces.py
│  │     │  │  ├─ socks_proxy.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ connection.cpython-313.pyc
│  │     │  │     ├─ connection_pool.cpython-313.pyc
│  │     │  │     ├─ http11.cpython-313.pyc
│  │     │  │     ├─ http2.cpython-313.pyc
│  │     │  │     ├─ http_proxy.cpython-313.pyc
│  │     │  │     ├─ interfaces.cpython-313.pyc
│  │     │  │     ├─ socks_proxy.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _exceptions.py
│  │     │  ├─ _models.py
│  │     │  ├─ _ssl.py
│  │     │  ├─ _sync
│  │     │  │  ├─ connection.py
│  │     │  │  ├─ connection_pool.py
│  │     │  │  ├─ http11.py
│  │     │  │  ├─ http2.py
│  │     │  │  ├─ http_proxy.py
│  │     │  │  ├─ interfaces.py
│  │     │  │  ├─ socks_proxy.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ connection.cpython-313.pyc
│  │     │  │     ├─ connection_pool.cpython-313.pyc
│  │     │  │     ├─ http11.cpython-313.pyc
│  │     │  │     ├─ http2.cpython-313.pyc
│  │     │  │     ├─ http_proxy.cpython-313.pyc
│  │     │  │     ├─ interfaces.cpython-313.pyc
│  │     │  │     ├─ socks_proxy.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _synchronization.py
│  │     │  ├─ _trace.py
│  │     │  ├─ _utils.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ _api.cpython-313.pyc
│  │     │     ├─ _exceptions.cpython-313.pyc
│  │     │     ├─ _models.cpython-313.pyc
│  │     │     ├─ _ssl.cpython-313.pyc
│  │     │     ├─ _synchronization.cpython-313.pyc
│  │     │     ├─ _trace.cpython-313.pyc
│  │     │     ├─ _utils.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ httpcore-0.16.3.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE.md
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ httptools
│  │     │  ├─ parser
│  │     │  │  ├─ cparser.pxd
│  │     │  │  ├─ errors.py
│  │     │  │  ├─ parser.cp313-win_amd64.pyd
│  │     │  │  ├─ parser.pyx
│  │     │  │  ├─ python.pxd
│  │     │  │  ├─ url_cparser.pxd
│  │     │  │  ├─ url_parser.cp313-win_amd64.pyd
│  │     │  │  ├─ url_parser.pyx
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ errors.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ httptools-0.6.4.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ httpx
│  │     │  ├─ py.typed
│  │     │  ├─ _api.py
│  │     │  ├─ _auth.py
│  │     │  ├─ _client.py
│  │     │  ├─ _compat.py
│  │     │  ├─ _config.py
│  │     │  ├─ _content.py
│  │     │  ├─ _decoders.py
│  │     │  ├─ _exceptions.py
│  │     │  ├─ _main.py
│  │     │  ├─ _models.py
│  │     │  ├─ _multipart.py
│  │     │  ├─ _status_codes.py
│  │     │  ├─ _transports
│  │     │  │  ├─ asgi.py
│  │     │  │  ├─ base.py
│  │     │  │  ├─ default.py
│  │     │  │  ├─ mock.py
│  │     │  │  ├─ wsgi.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ asgi.cpython-313.pyc
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ default.cpython-313.pyc
│  │     │  │     ├─ mock.cpython-313.pyc
│  │     │  │     ├─ wsgi.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _types.py
│  │     │  ├─ _urls.py
│  │     │  ├─ _utils.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __pycache__
│  │     │  │  ├─ _api.cpython-313.pyc
│  │     │  │  ├─ _auth.cpython-313.pyc
│  │     │  │  ├─ _client.cpython-313.pyc
│  │     │  │  ├─ _compat.cpython-313.pyc
│  │     │  │  ├─ _config.cpython-313.pyc
│  │     │  │  ├─ _content.cpython-313.pyc
│  │     │  │  ├─ _decoders.cpython-313.pyc
│  │     │  │  ├─ _exceptions.cpython-313.pyc
│  │     │  │  ├─ _main.cpython-313.pyc
│  │     │  │  ├─ _models.cpython-313.pyc
│  │     │  │  ├─ _multipart.cpython-313.pyc
│  │     │  │  ├─ _status_codes.cpython-313.pyc
│  │     │  │  ├─ _types.cpython-313.pyc
│  │     │  │  ├─ _urls.cpython-313.pyc
│  │     │  │  ├─ _utils.cpython-313.pyc
│  │     │  │  ├─ __init__.cpython-313.pyc
│  │     │  │  └─ __version__.cpython-313.pyc
│  │     │  └─ __version__.py
│  │     ├─ httpx-0.23.3.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE.md
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  └─ WHEEL
│  │     ├─ idna
│  │     │  ├─ codec.py
│  │     │  ├─ compat.py
│  │     │  ├─ core.py
│  │     │  ├─ idnadata.py
│  │     │  ├─ intranges.py
│  │     │  ├─ package_data.py
│  │     │  ├─ py.typed
│  │     │  ├─ uts46data.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ codec.cpython-313.pyc
│  │     │     ├─ compat.cpython-313.pyc
│  │     │     ├─ core.cpython-313.pyc
│  │     │     ├─ idnadata.cpython-313.pyc
│  │     │     ├─ intranges.cpython-313.pyc
│  │     │     ├─ package_data.cpython-313.pyc
│  │     │     ├─ uts46data.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ idna-3.10.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE.md
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ iniconfig
│  │     │  ├─ exceptions.py
│  │     │  ├─ py.typed
│  │     │  ├─ _parse.py
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ _parse.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ iniconfig-2.0.0.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ isort
│  │     │  ├─ api.py
│  │     │  ├─ comments.py
│  │     │  ├─ core.py
│  │     │  ├─ deprecated
│  │     │  │  ├─ finders.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ finders.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ exceptions.py
│  │     │  ├─ files.py
│  │     │  ├─ format.py
│  │     │  ├─ hooks.py
│  │     │  ├─ identify.py
│  │     │  ├─ io.py
│  │     │  ├─ literal.py
│  │     │  ├─ logo.py
│  │     │  ├─ main.py
│  │     │  ├─ output.py
│  │     │  ├─ parse.py
│  │     │  ├─ place.py
│  │     │  ├─ profiles.py
│  │     │  ├─ py.typed
│  │     │  ├─ pylama_isort.py
│  │     │  ├─ sections.py
│  │     │  ├─ settings.py
│  │     │  ├─ setuptools_commands.py
│  │     │  ├─ sorting.py
│  │     │  ├─ stdlibs
│  │     │  │  ├─ all.py
│  │     │  │  ├─ py2.py
│  │     │  │  ├─ py27.py
│  │     │  │  ├─ py3.py
│  │     │  │  ├─ py310.py
│  │     │  │  ├─ py311.py
│  │     │  │  ├─ py312.py
│  │     │  │  ├─ py313.py
│  │     │  │  ├─ py36.py
│  │     │  │  ├─ py37.py
│  │     │  │  ├─ py38.py
│  │     │  │  ├─ py39.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ all.cpython-313.pyc
│  │     │  │     ├─ py2.cpython-313.pyc
│  │     │  │     ├─ py27.cpython-313.pyc
│  │     │  │     ├─ py3.cpython-313.pyc
│  │     │  │     ├─ py310.cpython-313.pyc
│  │     │  │     ├─ py311.cpython-313.pyc
│  │     │  │     ├─ py312.cpython-313.pyc
│  │     │  │     ├─ py313.cpython-313.pyc
│  │     │  │     ├─ py36.cpython-313.pyc
│  │     │  │     ├─ py37.cpython-313.pyc
│  │     │  │     ├─ py38.cpython-313.pyc
│  │     │  │     ├─ py39.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ utils.py
│  │     │  ├─ wrap.py
│  │     │  ├─ wrap_modes.py
│  │     │  ├─ _vendored
│  │     │  │  └─ tomli
│  │     │  │     ├─ LICENSE
│  │     │  │     ├─ py.typed
│  │     │  │     ├─ _parser.py
│  │     │  │     ├─ _re.py
│  │     │  │     ├─ __init__.py
│  │     │  │     └─ __pycache__
│  │     │  │        ├─ _parser.cpython-313.pyc
│  │     │  │        ├─ _re.cpython-313.pyc
│  │     │  │        └─ __init__.cpython-313.pyc
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ api.cpython-313.pyc
│  │     │     ├─ comments.cpython-313.pyc
│  │     │     ├─ core.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ files.cpython-313.pyc
│  │     │     ├─ format.cpython-313.pyc
│  │     │     ├─ hooks.cpython-313.pyc
│  │     │     ├─ identify.cpython-313.pyc
│  │     │     ├─ io.cpython-313.pyc
│  │     │     ├─ literal.cpython-313.pyc
│  │     │     ├─ logo.cpython-313.pyc
│  │     │     ├─ main.cpython-313.pyc
│  │     │     ├─ output.cpython-313.pyc
│  │     │     ├─ parse.cpython-313.pyc
│  │     │     ├─ place.cpython-313.pyc
│  │     │     ├─ profiles.cpython-313.pyc
│  │     │     ├─ pylama_isort.cpython-313.pyc
│  │     │     ├─ sections.cpython-313.pyc
│  │     │     ├─ settings.cpython-313.pyc
│  │     │     ├─ setuptools_commands.cpython-313.pyc
│  │     │     ├─ sorting.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ wrap.cpython-313.pyc
│  │     │     ├─ wrap_modes.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ isort-6.0.1.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  └─ WHEEL
│  │     ├─ mccabe-0.7.0.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ mccabe.py
│  │     ├─ mypy
│  │     │  ├─ api.cp313-win_amd64.pyd
│  │     │  ├─ api.py
│  │     │  ├─ applytype.cp313-win_amd64.pyd
│  │     │  ├─ applytype.py
│  │     │  ├─ argmap.cp313-win_amd64.pyd
│  │     │  ├─ argmap.py
│  │     │  ├─ binder.cp313-win_amd64.pyd
│  │     │  ├─ binder.py
│  │     │  ├─ bogus_type.py
│  │     │  ├─ build.cp313-win_amd64.pyd
│  │     │  ├─ build.py
│  │     │  ├─ checker.cp313-win_amd64.pyd
│  │     │  ├─ checker.py
│  │     │  ├─ checkexpr.cp313-win_amd64.pyd
│  │     │  ├─ checkexpr.py
│  │     │  ├─ checkmember.cp313-win_amd64.pyd
│  │     │  ├─ checkmember.py
│  │     │  ├─ checkpattern.cp313-win_amd64.pyd
│  │     │  ├─ checkpattern.py
│  │     │  ├─ checkstrformat.cp313-win_amd64.pyd
│  │     │  ├─ checkstrformat.py
│  │     │  ├─ config_parser.cp313-win_amd64.pyd
│  │     │  ├─ config_parser.py
│  │     │  ├─ constant_fold.cp313-win_amd64.pyd
│  │     │  ├─ constant_fold.py
│  │     │  ├─ constraints.cp313-win_amd64.pyd
│  │     │  ├─ constraints.py
│  │     │  ├─ copytype.cp313-win_amd64.pyd
│  │     │  ├─ copytype.py
│  │     │  ├─ defaults.cp313-win_amd64.pyd
│  │     │  ├─ defaults.py
│  │     │  ├─ dmypy
│  │     │  │  ├─ client.cp313-win_amd64.pyd
│  │     │  │  ├─ client.py
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __main__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ client.cpython-313.pyc
│  │     │  │     ├─ __init__.cpython-313.pyc
│  │     │  │     └─ __main__.cpython-313.pyc
│  │     │  ├─ dmypy_os.cp313-win_amd64.pyd
│  │     │  ├─ dmypy_os.py
│  │     │  ├─ dmypy_server.cp313-win_amd64.pyd
│  │     │  ├─ dmypy_server.py
│  │     │  ├─ dmypy_util.cp313-win_amd64.pyd
│  │     │  ├─ dmypy_util.py
│  │     │  ├─ erasetype.cp313-win_amd64.pyd
│  │     │  ├─ erasetype.py
│  │     │  ├─ errorcodes.cp313-win_amd64.pyd
│  │     │  ├─ errorcodes.py
│  │     │  ├─ errors.cp313-win_amd64.pyd
│  │     │  ├─ errors.py
│  │     │  ├─ error_formatter.cp313-win_amd64.pyd
│  │     │  ├─ error_formatter.py
│  │     │  ├─ evalexpr.cp313-win_amd64.pyd
│  │     │  ├─ evalexpr.py
│  │     │  ├─ expandtype.cp313-win_amd64.pyd
│  │     │  ├─ expandtype.py
│  │     │  ├─ exprtotype.cp313-win_amd64.pyd
│  │     │  ├─ exprtotype.py
│  │     │  ├─ fastparse.cp313-win_amd64.pyd
│  │     │  ├─ fastparse.py
│  │     │  ├─ find_sources.cp313-win_amd64.pyd
│  │     │  ├─ find_sources.py
│  │     │  ├─ fixup.cp313-win_amd64.pyd
│  │     │  ├─ fixup.py
│  │     │  ├─ freetree.cp313-win_amd64.pyd
│  │     │  ├─ freetree.py
│  │     │  ├─ fscache.cp313-win_amd64.pyd
│  │     │  ├─ fscache.py
│  │     │  ├─ fswatcher.cp313-win_amd64.pyd
│  │     │  ├─ fswatcher.py
│  │     │  ├─ gclogger.cp313-win_amd64.pyd
│  │     │  ├─ gclogger.py
│  │     │  ├─ git.cp313-win_amd64.pyd
│  │     │  ├─ git.py
│  │     │  ├─ graph_utils.cp313-win_amd64.pyd
│  │     │  ├─ graph_utils.py
│  │     │  ├─ indirection.cp313-win_amd64.pyd
│  │     │  ├─ indirection.py
│  │     │  ├─ infer.cp313-win_amd64.pyd
│  │     │  ├─ infer.py
│  │     │  ├─ inspections.cp313-win_amd64.pyd
│  │     │  ├─ inspections.py
│  │     │  ├─ ipc.cp313-win_amd64.pyd
│  │     │  ├─ ipc.py
│  │     │  ├─ join.cp313-win_amd64.pyd
│  │     │  ├─ join.py
│  │     │  ├─ literals.cp313-win_amd64.pyd
│  │     │  ├─ literals.py
│  │     │  ├─ lookup.cp313-win_amd64.pyd
│  │     │  ├─ lookup.py
│  │     │  ├─ main.cp313-win_amd64.pyd
│  │     │  ├─ main.py
│  │     │  ├─ maptype.cp313-win_amd64.pyd
│  │     │  ├─ maptype.py
│  │     │  ├─ meet.cp313-win_amd64.pyd
│  │     │  ├─ meet.py
│  │     │  ├─ memprofile.cp313-win_amd64.pyd
│  │     │  ├─ memprofile.py
│  │     │  ├─ messages.cp313-win_amd64.pyd
│  │     │  ├─ messages.py
│  │     │  ├─ message_registry.cp313-win_amd64.pyd
│  │     │  ├─ message_registry.py
│  │     │  ├─ metastore.cp313-win_amd64.pyd
│  │     │  ├─ metastore.py
│  │     │  ├─ mixedtraverser.cp313-win_amd64.pyd
│  │     │  ├─ mixedtraverser.py
│  │     │  ├─ modulefinder.cp313-win_amd64.pyd
│  │     │  ├─ modulefinder.py
│  │     │  ├─ moduleinspect.cp313-win_amd64.pyd
│  │     │  ├─ moduleinspect.py
│  │     │  ├─ mro.cp313-win_amd64.pyd
│  │     │  ├─ mro.py
│  │     │  ├─ nodes.cp313-win_amd64.pyd
│  │     │  ├─ nodes.py
│  │     │  ├─ operators.cp313-win_amd64.pyd
│  │     │  ├─ operators.py
│  │     │  ├─ options.cp313-win_amd64.pyd
│  │     │  ├─ options.py
│  │     │  ├─ parse.cp313-win_amd64.pyd
│  │     │  ├─ parse.py
│  │     │  ├─ partially_defined.cp313-win_amd64.pyd
│  │     │  ├─ partially_defined.py
│  │     │  ├─ patterns.cp313-win_amd64.pyd
│  │     │  ├─ patterns.py
│  │     │  ├─ plugin.cp313-win_amd64.pyd
│  │     │  ├─ plugin.py
│  │     │  ├─ plugins
│  │     │  │  ├─ attrs.cp313-win_amd64.pyd
│  │     │  │  ├─ attrs.py
│  │     │  │  ├─ common.cp313-win_amd64.pyd
│  │     │  │  ├─ common.py
│  │     │  │  ├─ ctypes.cp313-win_amd64.pyd
│  │     │  │  ├─ ctypes.py
│  │     │  │  ├─ dataclasses.cp313-win_amd64.pyd
│  │     │  │  ├─ dataclasses.py
│  │     │  │  ├─ default.cp313-win_amd64.pyd
│  │     │  │  ├─ default.py
│  │     │  │  ├─ enums.cp313-win_amd64.pyd
│  │     │  │  ├─ enums.py
│  │     │  │  ├─ functools.cp313-win_amd64.pyd
│  │     │  │  ├─ functools.py
│  │     │  │  ├─ proper_plugin.cp313-win_amd64.pyd
│  │     │  │  ├─ proper_plugin.py
│  │     │  │  ├─ singledispatch.cp313-win_amd64.pyd
│  │     │  │  ├─ singledispatch.py
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ attrs.cpython-313.pyc
│  │     │  │     ├─ common.cpython-313.pyc
│  │     │  │     ├─ ctypes.cpython-313.pyc
│  │     │  │     ├─ dataclasses.cpython-313.pyc
│  │     │  │     ├─ default.cpython-313.pyc
│  │     │  │     ├─ enums.cpython-313.pyc
│  │     │  │     ├─ functools.cpython-313.pyc
│  │     │  │     ├─ proper_plugin.cpython-313.pyc
│  │     │  │     ├─ singledispatch.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ pyinfo.py
│  │     │  ├─ reachability.cp313-win_amd64.pyd
│  │     │  ├─ reachability.py
│  │     │  ├─ refinfo.cp313-win_amd64.pyd
│  │     │  ├─ refinfo.py
│  │     │  ├─ renaming.cp313-win_amd64.pyd
│  │     │  ├─ renaming.py
│  │     │  ├─ report.cp313-win_amd64.pyd
│  │     │  ├─ report.py
│  │     │  ├─ scope.cp313-win_amd64.pyd
│  │     │  ├─ scope.py
│  │     │  ├─ semanal.cp313-win_amd64.pyd
│  │     │  ├─ semanal.py
│  │     │  ├─ semanal_classprop.cp313-win_amd64.pyd
│  │     │  ├─ semanal_classprop.py
│  │     │  ├─ semanal_enum.cp313-win_amd64.pyd
│  │     │  ├─ semanal_enum.py
│  │     │  ├─ semanal_infer.cp313-win_amd64.pyd
│  │     │  ├─ semanal_infer.py
│  │     │  ├─ semanal_main.cp313-win_amd64.pyd
│  │     │  ├─ semanal_main.py
│  │     │  ├─ semanal_namedtuple.cp313-win_amd64.pyd
│  │     │  ├─ semanal_namedtuple.py
│  │     │  ├─ semanal_newtype.cp313-win_amd64.pyd
│  │     │  ├─ semanal_newtype.py
│  │     │  ├─ semanal_pass1.cp313-win_amd64.pyd
│  │     │  ├─ semanal_pass1.py
│  │     │  ├─ semanal_shared.cp313-win_amd64.pyd
│  │     │  ├─ semanal_shared.py
│  │     │  ├─ semanal_typeargs.cp313-win_amd64.pyd
│  │     │  ├─ semanal_typeargs.py
│  │     │  ├─ semanal_typeddict.cp313-win_amd64.pyd
│  │     │  ├─ semanal_typeddict.py
│  │     │  ├─ server
│  │     │  │  ├─ astdiff.cp313-win_amd64.pyd
│  │     │  │  ├─ astdiff.py
│  │     │  │  ├─ astmerge.cp313-win_amd64.pyd
│  │     │  │  ├─ astmerge.py
│  │     │  │  ├─ aststrip.cp313-win_amd64.pyd
│  │     │  │  ├─ aststrip.py
│  │     │  │  ├─ deps.cp313-win_amd64.pyd
│  │     │  │  ├─ deps.py
│  │     │  │  ├─ mergecheck.cp313-win_amd64.pyd
│  │     │  │  ├─ mergecheck.py
│  │     │  │  ├─ objgraph.cp313-win_amd64.pyd
│  │     │  │  ├─ objgraph.py
│  │     │  │  ├─ subexpr.cp313-win_amd64.pyd
│  │     │  │  ├─ subexpr.py
│  │     │  │  ├─ target.cp313-win_amd64.pyd
│  │     │  │  ├─ target.py
│  │     │  │  ├─ trigger.cp313-win_amd64.pyd
│  │     │  │  ├─ trigger.py
│  │     │  │  ├─ update.cp313-win_amd64.pyd
│  │     │  │  ├─ update.py
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ astdiff.cpython-313.pyc
│  │     │  │     ├─ astmerge.cpython-313.pyc
│  │     │  │     ├─ aststrip.cpython-313.pyc
│  │     │  │     ├─ deps.cpython-313.pyc
│  │     │  │     ├─ mergecheck.cpython-313.pyc
│  │     │  │     ├─ objgraph.cpython-313.pyc
│  │     │  │     ├─ subexpr.cpython-313.pyc
│  │     │  │     ├─ target.cpython-313.pyc
│  │     │  │     ├─ trigger.cpython-313.pyc
│  │     │  │     ├─ update.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ sharedparse.cp313-win_amd64.pyd
│  │     │  ├─ sharedparse.py
│  │     │  ├─ solve.cp313-win_amd64.pyd
│  │     │  ├─ solve.py
│  │     │  ├─ split_namespace.py
│  │     │  ├─ state.cp313-win_amd64.pyd
│  │     │  ├─ state.py
│  │     │  ├─ stats.cp313-win_amd64.pyd
│  │     │  ├─ stats.py
│  │     │  ├─ strconv.cp313-win_amd64.pyd
│  │     │  ├─ strconv.py
│  │     │  ├─ stubdoc.py
│  │     │  ├─ stubgen.cp313-win_amd64.pyd
│  │     │  ├─ stubgen.py
│  │     │  ├─ stubgenc.py
│  │     │  ├─ stubinfo.cp313-win_amd64.pyd
│  │     │  ├─ stubinfo.py
│  │     │  ├─ stubtest.py
│  │     │  ├─ stubutil.cp313-win_amd64.pyd
│  │     │  ├─ stubutil.py
│  │     │  ├─ subtypes.cp313-win_amd64.pyd
│  │     │  ├─ subtypes.py
│  │     │  ├─ suggestions.cp313-win_amd64.pyd
│  │     │  ├─ suggestions.py
│  │     │  ├─ test
│  │     │  │  ├─ config.py
│  │     │  │  ├─ data.py
│  │     │  │  ├─ helpers.py
│  │     │  │  ├─ meta
│  │     │  │  │  ├─ test_diff_helper.py
│  │     │  │  │  ├─ test_parse_data.py
│  │     │  │  │  ├─ test_update_data.py
│  │     │  │  │  ├─ _pytest.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_diff_helper.cpython-313.pyc
│  │     │  │  │     ├─ test_parse_data.cpython-313.pyc
│  │     │  │  │     ├─ test_update_data.cpython-313.pyc
│  │     │  │  │     ├─ _pytest.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ testapi.py
│  │     │  │  ├─ testargs.py
│  │     │  │  ├─ testcheck.py
│  │     │  │  ├─ testcmdline.py
│  │     │  │  ├─ testconstraints.py
│  │     │  │  ├─ testdaemon.py
│  │     │  │  ├─ testdeps.py
│  │     │  │  ├─ testdiff.py
│  │     │  │  ├─ testerrorstream.py
│  │     │  │  ├─ testfinegrained.py
│  │     │  │  ├─ testfinegrainedcache.py
│  │     │  │  ├─ testformatter.py
│  │     │  │  ├─ testfscache.py
│  │     │  │  ├─ testgraph.py
│  │     │  │  ├─ testinfer.py
│  │     │  │  ├─ testipc.py
│  │     │  │  ├─ testmerge.py
│  │     │  │  ├─ testmodulefinder.py
│  │     │  │  ├─ testmypyc.py
│  │     │  │  ├─ testoutput.py
│  │     │  │  ├─ testparse.py
│  │     │  │  ├─ testpep561.py
│  │     │  │  ├─ testpythoneval.py
│  │     │  │  ├─ testreports.py
│  │     │  │  ├─ testsemanal.py
│  │     │  │  ├─ testsolve.py
│  │     │  │  ├─ teststubgen.py
│  │     │  │  ├─ teststubinfo.py
│  │     │  │  ├─ teststubtest.py
│  │     │  │  ├─ testsubtypes.py
│  │     │  │  ├─ testtransform.py
│  │     │  │  ├─ testtypegen.py
│  │     │  │  ├─ testtypes.py
│  │     │  │  ├─ testutil.py
│  │     │  │  ├─ test_config_parser.py
│  │     │  │  ├─ test_find_sources.py
│  │     │  │  ├─ test_ref_info.py
│  │     │  │  ├─ typefixture.py
│  │     │  │  ├─ update_data.py
│  │     │  │  ├─ visitors.cp313-win_amd64.pyd
│  │     │  │  ├─ visitors.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ config.cpython-313.pyc
│  │     │  │     ├─ data.cpython-313.pyc
│  │     │  │     ├─ helpers.cpython-313.pyc
│  │     │  │     ├─ testapi.cpython-313.pyc
│  │     │  │     ├─ testargs.cpython-313.pyc
│  │     │  │     ├─ testcheck.cpython-313.pyc
│  │     │  │     ├─ testcmdline.cpython-313.pyc
│  │     │  │     ├─ testconstraints.cpython-313.pyc
│  │     │  │     ├─ testdaemon.cpython-313.pyc
│  │     │  │     ├─ testdeps.cpython-313.pyc
│  │     │  │     ├─ testdiff.cpython-313.pyc
│  │     │  │     ├─ testerrorstream.cpython-313.pyc
│  │     │  │     ├─ testfinegrained.cpython-313.pyc
│  │     │  │     ├─ testfinegrainedcache.cpython-313.pyc
│  │     │  │     ├─ testformatter.cpython-313.pyc
│  │     │  │     ├─ testfscache.cpython-313.pyc
│  │     │  │     ├─ testgraph.cpython-313.pyc
│  │     │  │     ├─ testinfer.cpython-313.pyc
│  │     │  │     ├─ testipc.cpython-313.pyc
│  │     │  │     ├─ testmerge.cpython-313.pyc
│  │     │  │     ├─ testmodulefinder.cpython-313.pyc
│  │     │  │     ├─ testmypyc.cpython-313.pyc
│  │     │  │     ├─ testoutput.cpython-313.pyc
│  │     │  │     ├─ testparse.cpython-313.pyc
│  │     │  │     ├─ testpep561.cpython-313.pyc
│  │     │  │     ├─ testpythoneval.cpython-313.pyc
│  │     │  │     ├─ testreports.cpython-313.pyc
│  │     │  │     ├─ testsemanal.cpython-313.pyc
│  │     │  │     ├─ testsolve.cpython-313.pyc
│  │     │  │     ├─ teststubgen.cpython-313.pyc
│  │     │  │     ├─ teststubinfo.cpython-313.pyc
│  │     │  │     ├─ teststubtest.cpython-313.pyc
│  │     │  │     ├─ testsubtypes.cpython-313.pyc
│  │     │  │     ├─ testtransform.cpython-313.pyc
│  │     │  │     ├─ testtypegen.cpython-313.pyc
│  │     │  │     ├─ testtypes.cpython-313.pyc
│  │     │  │     ├─ testutil.cpython-313.pyc
│  │     │  │     ├─ test_config_parser.cpython-313.pyc
│  │     │  │     ├─ test_find_sources.cpython-313.pyc
│  │     │  │     ├─ test_ref_info.cpython-313.pyc
│  │     │  │     ├─ typefixture.cpython-313.pyc
│  │     │  │     ├─ update_data.cpython-313.pyc
│  │     │  │     ├─ visitors.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ traverser.cp313-win_amd64.pyd
│  │     │  ├─ traverser.py
│  │     │  ├─ treetransform.cp313-win_amd64.pyd
│  │     │  ├─ treetransform.py
│  │     │  ├─ tvar_scope.cp313-win_amd64.pyd
│  │     │  ├─ tvar_scope.py
│  │     │  ├─ typeanal.cp313-win_amd64.pyd
│  │     │  ├─ typeanal.py
│  │     │  ├─ typeops.cp313-win_amd64.pyd
│  │     │  ├─ typeops.py
│  │     │  ├─ types.cp313-win_amd64.pyd
│  │     │  ├─ types.py
│  │     │  ├─ typeshed
│  │     │  │  ├─ LICENSE
│  │     │  │  ├─ stdlib
│  │     │  │  │  ├─ abc.pyi
│  │     │  │  │  ├─ aifc.pyi
│  │     │  │  │  ├─ antigravity.pyi
│  │     │  │  │  ├─ argparse.pyi
│  │     │  │  │  ├─ array.pyi
│  │     │  │  │  ├─ ast.pyi
│  │     │  │  │  ├─ asynchat.pyi
│  │     │  │  │  ├─ asyncio
│  │     │  │  │  │  ├─ base_events.pyi
│  │     │  │  │  │  ├─ base_futures.pyi
│  │     │  │  │  │  ├─ base_subprocess.pyi
│  │     │  │  │  │  ├─ base_tasks.pyi
│  │     │  │  │  │  ├─ constants.pyi
│  │     │  │  │  │  ├─ coroutines.pyi
│  │     │  │  │  │  ├─ events.pyi
│  │     │  │  │  │  ├─ exceptions.pyi
│  │     │  │  │  │  ├─ format_helpers.pyi
│  │     │  │  │  │  ├─ futures.pyi
│  │     │  │  │  │  ├─ locks.pyi
│  │     │  │  │  │  ├─ log.pyi
│  │     │  │  │  │  ├─ mixins.pyi
│  │     │  │  │  │  ├─ proactor_events.pyi
│  │     │  │  │  │  ├─ protocols.pyi
│  │     │  │  │  │  ├─ queues.pyi
│  │     │  │  │  │  ├─ runners.pyi
│  │     │  │  │  │  ├─ selector_events.pyi
│  │     │  │  │  │  ├─ sslproto.pyi
│  │     │  │  │  │  ├─ staggered.pyi
│  │     │  │  │  │  ├─ streams.pyi
│  │     │  │  │  │  ├─ subprocess.pyi
│  │     │  │  │  │  ├─ taskgroups.pyi
│  │     │  │  │  │  ├─ tasks.pyi
│  │     │  │  │  │  ├─ threads.pyi
│  │     │  │  │  │  ├─ timeouts.pyi
│  │     │  │  │  │  ├─ transports.pyi
│  │     │  │  │  │  ├─ trsock.pyi
│  │     │  │  │  │  ├─ unix_events.pyi
│  │     │  │  │  │  ├─ windows_events.pyi
│  │     │  │  │  │  ├─ windows_utils.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ asyncore.pyi
│  │     │  │  │  ├─ atexit.pyi
│  │     │  │  │  ├─ audioop.pyi
│  │     │  │  │  ├─ base64.pyi
│  │     │  │  │  ├─ bdb.pyi
│  │     │  │  │  ├─ binascii.pyi
│  │     │  │  │  ├─ binhex.pyi
│  │     │  │  │  ├─ bisect.pyi
│  │     │  │  │  ├─ builtins.pyi
│  │     │  │  │  ├─ bz2.pyi
│  │     │  │  │  ├─ calendar.pyi
│  │     │  │  │  ├─ cgi.pyi
│  │     │  │  │  ├─ cgitb.pyi
│  │     │  │  │  ├─ chunk.pyi
│  │     │  │  │  ├─ cmath.pyi
│  │     │  │  │  ├─ cmd.pyi
│  │     │  │  │  ├─ code.pyi
│  │     │  │  │  ├─ codecs.pyi
│  │     │  │  │  ├─ codeop.pyi
│  │     │  │  │  ├─ collections
│  │     │  │  │  │  ├─ abc.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ colorsys.pyi
│  │     │  │  │  ├─ compileall.pyi
│  │     │  │  │  ├─ concurrent
│  │     │  │  │  │  ├─ futures
│  │     │  │  │  │  │  ├─ process.pyi
│  │     │  │  │  │  │  ├─ thread.pyi
│  │     │  │  │  │  │  ├─ _base.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ configparser.pyi
│  │     │  │  │  ├─ contextlib.pyi
│  │     │  │  │  ├─ contextvars.pyi
│  │     │  │  │  ├─ copy.pyi
│  │     │  │  │  ├─ copyreg.pyi
│  │     │  │  │  ├─ cProfile.pyi
│  │     │  │  │  ├─ crypt.pyi
│  │     │  │  │  ├─ csv.pyi
│  │     │  │  │  ├─ ctypes
│  │     │  │  │  │  ├─ macholib
│  │     │  │  │  │  │  ├─ dyld.pyi
│  │     │  │  │  │  │  ├─ dylib.pyi
│  │     │  │  │  │  │  ├─ framework.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ util.pyi
│  │     │  │  │  │  ├─ wintypes.pyi
│  │     │  │  │  │  ├─ _endian.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ curses
│  │     │  │  │  │  ├─ ascii.pyi
│  │     │  │  │  │  ├─ has_key.pyi
│  │     │  │  │  │  ├─ panel.pyi
│  │     │  │  │  │  ├─ textpad.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ dataclasses.pyi
│  │     │  │  │  ├─ datetime.pyi
│  │     │  │  │  ├─ dbm
│  │     │  │  │  │  ├─ dumb.pyi
│  │     │  │  │  │  ├─ gnu.pyi
│  │     │  │  │  │  ├─ ndbm.pyi
│  │     │  │  │  │  ├─ sqlite3.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ decimal.pyi
│  │     │  │  │  ├─ difflib.pyi
│  │     │  │  │  ├─ dis.pyi
│  │     │  │  │  ├─ distutils
│  │     │  │  │  │  ├─ archive_util.pyi
│  │     │  │  │  │  ├─ bcppcompiler.pyi
│  │     │  │  │  │  ├─ ccompiler.pyi
│  │     │  │  │  │  ├─ cmd.pyi
│  │     │  │  │  │  ├─ command
│  │     │  │  │  │  │  ├─ bdist.pyi
│  │     │  │  │  │  │  ├─ bdist_dumb.pyi
│  │     │  │  │  │  │  ├─ bdist_msi.pyi
│  │     │  │  │  │  │  ├─ bdist_packager.pyi
│  │     │  │  │  │  │  ├─ bdist_rpm.pyi
│  │     │  │  │  │  │  ├─ bdist_wininst.pyi
│  │     │  │  │  │  │  ├─ build.pyi
│  │     │  │  │  │  │  ├─ build_clib.pyi
│  │     │  │  │  │  │  ├─ build_ext.pyi
│  │     │  │  │  │  │  ├─ build_py.pyi
│  │     │  │  │  │  │  ├─ build_scripts.pyi
│  │     │  │  │  │  │  ├─ check.pyi
│  │     │  │  │  │  │  ├─ clean.pyi
│  │     │  │  │  │  │  ├─ config.pyi
│  │     │  │  │  │  │  ├─ install.pyi
│  │     │  │  │  │  │  ├─ install_data.pyi
│  │     │  │  │  │  │  ├─ install_egg_info.pyi
│  │     │  │  │  │  │  ├─ install_headers.pyi
│  │     │  │  │  │  │  ├─ install_lib.pyi
│  │     │  │  │  │  │  ├─ install_scripts.pyi
│  │     │  │  │  │  │  ├─ register.pyi
│  │     │  │  │  │  │  ├─ sdist.pyi
│  │     │  │  │  │  │  ├─ upload.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ config.pyi
│  │     │  │  │  │  ├─ core.pyi
│  │     │  │  │  │  ├─ cygwinccompiler.pyi
│  │     │  │  │  │  ├─ debug.pyi
│  │     │  │  │  │  ├─ dep_util.pyi
│  │     │  │  │  │  ├─ dir_util.pyi
│  │     │  │  │  │  ├─ dist.pyi
│  │     │  │  │  │  ├─ errors.pyi
│  │     │  │  │  │  ├─ extension.pyi
│  │     │  │  │  │  ├─ fancy_getopt.pyi
│  │     │  │  │  │  ├─ filelist.pyi
│  │     │  │  │  │  ├─ file_util.pyi
│  │     │  │  │  │  ├─ log.pyi
│  │     │  │  │  │  ├─ msvccompiler.pyi
│  │     │  │  │  │  ├─ spawn.pyi
│  │     │  │  │  │  ├─ sysconfig.pyi
│  │     │  │  │  │  ├─ text_file.pyi
│  │     │  │  │  │  ├─ unixccompiler.pyi
│  │     │  │  │  │  ├─ util.pyi
│  │     │  │  │  │  ├─ version.pyi
│  │     │  │  │  │  ├─ _msvccompiler.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ doctest.pyi
│  │     │  │  │  ├─ dummy_threading.pyi
│  │     │  │  │  ├─ email
│  │     │  │  │  │  ├─ base64mime.pyi
│  │     │  │  │  │  ├─ charset.pyi
│  │     │  │  │  │  ├─ contentmanager.pyi
│  │     │  │  │  │  ├─ encoders.pyi
│  │     │  │  │  │  ├─ errors.pyi
│  │     │  │  │  │  ├─ feedparser.pyi
│  │     │  │  │  │  ├─ generator.pyi
│  │     │  │  │  │  ├─ header.pyi
│  │     │  │  │  │  ├─ headerregistry.pyi
│  │     │  │  │  │  ├─ iterators.pyi
│  │     │  │  │  │  ├─ message.pyi
│  │     │  │  │  │  ├─ mime
│  │     │  │  │  │  │  ├─ application.pyi
│  │     │  │  │  │  │  ├─ audio.pyi
│  │     │  │  │  │  │  ├─ base.pyi
│  │     │  │  │  │  │  ├─ image.pyi
│  │     │  │  │  │  │  ├─ message.pyi
│  │     │  │  │  │  │  ├─ multipart.pyi
│  │     │  │  │  │  │  ├─ nonmultipart.pyi
│  │     │  │  │  │  │  ├─ text.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ parser.pyi
│  │     │  │  │  │  ├─ policy.pyi
│  │     │  │  │  │  ├─ quoprimime.pyi
│  │     │  │  │  │  ├─ utils.pyi
│  │     │  │  │  │  ├─ _header_value_parser.pyi
│  │     │  │  │  │  ├─ _policybase.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ encodings
│  │     │  │  │  │  ├─ aliases.pyi
│  │     │  │  │  │  ├─ ascii.pyi
│  │     │  │  │  │  ├─ base64_codec.pyi
│  │     │  │  │  │  ├─ big5.pyi
│  │     │  │  │  │  ├─ big5hkscs.pyi
│  │     │  │  │  │  ├─ bz2_codec.pyi
│  │     │  │  │  │  ├─ charmap.pyi
│  │     │  │  │  │  ├─ cp037.pyi
│  │     │  │  │  │  ├─ cp1006.pyi
│  │     │  │  │  │  ├─ cp1026.pyi
│  │     │  │  │  │  ├─ cp1125.pyi
│  │     │  │  │  │  ├─ cp1140.pyi
│  │     │  │  │  │  ├─ cp1250.pyi
│  │     │  │  │  │  ├─ cp1251.pyi
│  │     │  │  │  │  ├─ cp1252.pyi
│  │     │  │  │  │  ├─ cp1253.pyi
│  │     │  │  │  │  ├─ cp1254.pyi
│  │     │  │  │  │  ├─ cp1255.pyi
│  │     │  │  │  │  ├─ cp1256.pyi
│  │     │  │  │  │  ├─ cp1257.pyi
│  │     │  │  │  │  ├─ cp1258.pyi
│  │     │  │  │  │  ├─ cp273.pyi
│  │     │  │  │  │  ├─ cp424.pyi
│  │     │  │  │  │  ├─ cp437.pyi
│  │     │  │  │  │  ├─ cp500.pyi
│  │     │  │  │  │  ├─ cp720.pyi
│  │     │  │  │  │  ├─ cp737.pyi
│  │     │  │  │  │  ├─ cp775.pyi
│  │     │  │  │  │  ├─ cp850.pyi
│  │     │  │  │  │  ├─ cp852.pyi
│  │     │  │  │  │  ├─ cp855.pyi
│  │     │  │  │  │  ├─ cp856.pyi
│  │     │  │  │  │  ├─ cp857.pyi
│  │     │  │  │  │  ├─ cp858.pyi
│  │     │  │  │  │  ├─ cp860.pyi
│  │     │  │  │  │  ├─ cp861.pyi
│  │     │  │  │  │  ├─ cp862.pyi
│  │     │  │  │  │  ├─ cp863.pyi
│  │     │  │  │  │  ├─ cp864.pyi
│  │     │  │  │  │  ├─ cp865.pyi
│  │     │  │  │  │  ├─ cp866.pyi
│  │     │  │  │  │  ├─ cp869.pyi
│  │     │  │  │  │  ├─ cp874.pyi
│  │     │  │  │  │  ├─ cp875.pyi
│  │     │  │  │  │  ├─ cp932.pyi
│  │     │  │  │  │  ├─ cp949.pyi
│  │     │  │  │  │  ├─ cp950.pyi
│  │     │  │  │  │  ├─ euc_jisx0213.pyi
│  │     │  │  │  │  ├─ euc_jis_2004.pyi
│  │     │  │  │  │  ├─ euc_jp.pyi
│  │     │  │  │  │  ├─ euc_kr.pyi
│  │     │  │  │  │  ├─ gb18030.pyi
│  │     │  │  │  │  ├─ gb2312.pyi
│  │     │  │  │  │  ├─ gbk.pyi
│  │     │  │  │  │  ├─ hex_codec.pyi
│  │     │  │  │  │  ├─ hp_roman8.pyi
│  │     │  │  │  │  ├─ hz.pyi
│  │     │  │  │  │  ├─ idna.pyi
│  │     │  │  │  │  ├─ iso2022_jp.pyi
│  │     │  │  │  │  ├─ iso2022_jp_1.pyi
│  │     │  │  │  │  ├─ iso2022_jp_2.pyi
│  │     │  │  │  │  ├─ iso2022_jp_2004.pyi
│  │     │  │  │  │  ├─ iso2022_jp_3.pyi
│  │     │  │  │  │  ├─ iso2022_jp_ext.pyi
│  │     │  │  │  │  ├─ iso2022_kr.pyi
│  │     │  │  │  │  ├─ iso8859_1.pyi
│  │     │  │  │  │  ├─ iso8859_10.pyi
│  │     │  │  │  │  ├─ iso8859_11.pyi
│  │     │  │  │  │  ├─ iso8859_13.pyi
│  │     │  │  │  │  ├─ iso8859_14.pyi
│  │     │  │  │  │  ├─ iso8859_15.pyi
│  │     │  │  │  │  ├─ iso8859_16.pyi
│  │     │  │  │  │  ├─ iso8859_2.pyi
│  │     │  │  │  │  ├─ iso8859_3.pyi
│  │     │  │  │  │  ├─ iso8859_4.pyi
│  │     │  │  │  │  ├─ iso8859_5.pyi
│  │     │  │  │  │  ├─ iso8859_6.pyi
│  │     │  │  │  │  ├─ iso8859_7.pyi
│  │     │  │  │  │  ├─ iso8859_8.pyi
│  │     │  │  │  │  ├─ iso8859_9.pyi
│  │     │  │  │  │  ├─ johab.pyi
│  │     │  │  │  │  ├─ koi8_r.pyi
│  │     │  │  │  │  ├─ koi8_t.pyi
│  │     │  │  │  │  ├─ koi8_u.pyi
│  │     │  │  │  │  ├─ kz1048.pyi
│  │     │  │  │  │  ├─ latin_1.pyi
│  │     │  │  │  │  ├─ mac_arabic.pyi
│  │     │  │  │  │  ├─ mac_centeuro.pyi
│  │     │  │  │  │  ├─ mac_croatian.pyi
│  │     │  │  │  │  ├─ mac_cyrillic.pyi
│  │     │  │  │  │  ├─ mac_farsi.pyi
│  │     │  │  │  │  ├─ mac_greek.pyi
│  │     │  │  │  │  ├─ mac_iceland.pyi
│  │     │  │  │  │  ├─ mac_latin2.pyi
│  │     │  │  │  │  ├─ mac_roman.pyi
│  │     │  │  │  │  ├─ mac_romanian.pyi
│  │     │  │  │  │  ├─ mac_turkish.pyi
│  │     │  │  │  │  ├─ mbcs.pyi
│  │     │  │  │  │  ├─ oem.pyi
│  │     │  │  │  │  ├─ palmos.pyi
│  │     │  │  │  │  ├─ ptcp154.pyi
│  │     │  │  │  │  ├─ punycode.pyi
│  │     │  │  │  │  ├─ quopri_codec.pyi
│  │     │  │  │  │  ├─ raw_unicode_escape.pyi
│  │     │  │  │  │  ├─ rot_13.pyi
│  │     │  │  │  │  ├─ shift_jis.pyi
│  │     │  │  │  │  ├─ shift_jisx0213.pyi
│  │     │  │  │  │  ├─ shift_jis_2004.pyi
│  │     │  │  │  │  ├─ tis_620.pyi
│  │     │  │  │  │  ├─ undefined.pyi
│  │     │  │  │  │  ├─ unicode_escape.pyi
│  │     │  │  │  │  ├─ utf_16.pyi
│  │     │  │  │  │  ├─ utf_16_be.pyi
│  │     │  │  │  │  ├─ utf_16_le.pyi
│  │     │  │  │  │  ├─ utf_32.pyi
│  │     │  │  │  │  ├─ utf_32_be.pyi
│  │     │  │  │  │  ├─ utf_32_le.pyi
│  │     │  │  │  │  ├─ utf_7.pyi
│  │     │  │  │  │  ├─ utf_8.pyi
│  │     │  │  │  │  ├─ utf_8_sig.pyi
│  │     │  │  │  │  ├─ uu_codec.pyi
│  │     │  │  │  │  ├─ zlib_codec.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ ensurepip
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ enum.pyi
│  │     │  │  │  ├─ errno.pyi
│  │     │  │  │  ├─ faulthandler.pyi
│  │     │  │  │  ├─ fcntl.pyi
│  │     │  │  │  ├─ filecmp.pyi
│  │     │  │  │  ├─ fileinput.pyi
│  │     │  │  │  ├─ fnmatch.pyi
│  │     │  │  │  ├─ formatter.pyi
│  │     │  │  │  ├─ fractions.pyi
│  │     │  │  │  ├─ ftplib.pyi
│  │     │  │  │  ├─ functools.pyi
│  │     │  │  │  ├─ gc.pyi
│  │     │  │  │  ├─ genericpath.pyi
│  │     │  │  │  ├─ getopt.pyi
│  │     │  │  │  ├─ getpass.pyi
│  │     │  │  │  ├─ gettext.pyi
│  │     │  │  │  ├─ glob.pyi
│  │     │  │  │  ├─ graphlib.pyi
│  │     │  │  │  ├─ grp.pyi
│  │     │  │  │  ├─ gzip.pyi
│  │     │  │  │  ├─ hashlib.pyi
│  │     │  │  │  ├─ heapq.pyi
│  │     │  │  │  ├─ hmac.pyi
│  │     │  │  │  ├─ html
│  │     │  │  │  │  ├─ entities.pyi
│  │     │  │  │  │  ├─ parser.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ http
│  │     │  │  │  │  ├─ client.pyi
│  │     │  │  │  │  ├─ cookiejar.pyi
│  │     │  │  │  │  ├─ cookies.pyi
│  │     │  │  │  │  ├─ server.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ imaplib.pyi
│  │     │  │  │  ├─ imghdr.pyi
│  │     │  │  │  ├─ imp.pyi
│  │     │  │  │  ├─ importlib
│  │     │  │  │  │  ├─ abc.pyi
│  │     │  │  │  │  ├─ machinery.pyi
│  │     │  │  │  │  ├─ metadata
│  │     │  │  │  │  │  ├─ diagnose.pyi
│  │     │  │  │  │  │  ├─ _meta.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ readers.pyi
│  │     │  │  │  │  ├─ resources
│  │     │  │  │  │  │  ├─ abc.pyi
│  │     │  │  │  │  │  ├─ readers.pyi
│  │     │  │  │  │  │  ├─ simple.pyi
│  │     │  │  │  │  │  ├─ _common.pyi
│  │     │  │  │  │  │  ├─ _functional.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ simple.pyi
│  │     │  │  │  │  ├─ util.pyi
│  │     │  │  │  │  ├─ _abc.pyi
│  │     │  │  │  │  ├─ _bootstrap.pyi
│  │     │  │  │  │  ├─ _bootstrap_external.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ inspect.pyi
│  │     │  │  │  ├─ io.pyi
│  │     │  │  │  ├─ ipaddress.pyi
│  │     │  │  │  ├─ itertools.pyi
│  │     │  │  │  ├─ json
│  │     │  │  │  │  ├─ decoder.pyi
│  │     │  │  │  │  ├─ encoder.pyi
│  │     │  │  │  │  ├─ scanner.pyi
│  │     │  │  │  │  ├─ tool.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ keyword.pyi
│  │     │  │  │  ├─ lib2to3
│  │     │  │  │  │  ├─ btm_matcher.pyi
│  │     │  │  │  │  ├─ fixer_base.pyi
│  │     │  │  │  │  ├─ fixes
│  │     │  │  │  │  │  ├─ fix_apply.pyi
│  │     │  │  │  │  │  ├─ fix_asserts.pyi
│  │     │  │  │  │  │  ├─ fix_basestring.pyi
│  │     │  │  │  │  │  ├─ fix_buffer.pyi
│  │     │  │  │  │  │  ├─ fix_dict.pyi
│  │     │  │  │  │  │  ├─ fix_except.pyi
│  │     │  │  │  │  │  ├─ fix_exec.pyi
│  │     │  │  │  │  │  ├─ fix_execfile.pyi
│  │     │  │  │  │  │  ├─ fix_exitfunc.pyi
│  │     │  │  │  │  │  ├─ fix_filter.pyi
│  │     │  │  │  │  │  ├─ fix_funcattrs.pyi
│  │     │  │  │  │  │  ├─ fix_future.pyi
│  │     │  │  │  │  │  ├─ fix_getcwdu.pyi
│  │     │  │  │  │  │  ├─ fix_has_key.pyi
│  │     │  │  │  │  │  ├─ fix_idioms.pyi
│  │     │  │  │  │  │  ├─ fix_import.pyi
│  │     │  │  │  │  │  ├─ fix_imports.pyi
│  │     │  │  │  │  │  ├─ fix_imports2.pyi
│  │     │  │  │  │  │  ├─ fix_input.pyi
│  │     │  │  │  │  │  ├─ fix_intern.pyi
│  │     │  │  │  │  │  ├─ fix_isinstance.pyi
│  │     │  │  │  │  │  ├─ fix_itertools.pyi
│  │     │  │  │  │  │  ├─ fix_itertools_imports.pyi
│  │     │  │  │  │  │  ├─ fix_long.pyi
│  │     │  │  │  │  │  ├─ fix_map.pyi
│  │     │  │  │  │  │  ├─ fix_metaclass.pyi
│  │     │  │  │  │  │  ├─ fix_methodattrs.pyi
│  │     │  │  │  │  │  ├─ fix_ne.pyi
│  │     │  │  │  │  │  ├─ fix_next.pyi
│  │     │  │  │  │  │  ├─ fix_nonzero.pyi
│  │     │  │  │  │  │  ├─ fix_numliterals.pyi
│  │     │  │  │  │  │  ├─ fix_operator.pyi
│  │     │  │  │  │  │  ├─ fix_paren.pyi
│  │     │  │  │  │  │  ├─ fix_print.pyi
│  │     │  │  │  │  │  ├─ fix_raise.pyi
│  │     │  │  │  │  │  ├─ fix_raw_input.pyi
│  │     │  │  │  │  │  ├─ fix_reduce.pyi
│  │     │  │  │  │  │  ├─ fix_reload.pyi
│  │     │  │  │  │  │  ├─ fix_renames.pyi
│  │     │  │  │  │  │  ├─ fix_repr.pyi
│  │     │  │  │  │  │  ├─ fix_set_literal.pyi
│  │     │  │  │  │  │  ├─ fix_standarderror.pyi
│  │     │  │  │  │  │  ├─ fix_sys_exc.pyi
│  │     │  │  │  │  │  ├─ fix_throw.pyi
│  │     │  │  │  │  │  ├─ fix_tuple_params.pyi
│  │     │  │  │  │  │  ├─ fix_types.pyi
│  │     │  │  │  │  │  ├─ fix_unicode.pyi
│  │     │  │  │  │  │  ├─ fix_urllib.pyi
│  │     │  │  │  │  │  ├─ fix_ws_comma.pyi
│  │     │  │  │  │  │  ├─ fix_xrange.pyi
│  │     │  │  │  │  │  ├─ fix_xreadlines.pyi
│  │     │  │  │  │  │  ├─ fix_zip.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ main.pyi
│  │     │  │  │  │  ├─ pgen2
│  │     │  │  │  │  │  ├─ driver.pyi
│  │     │  │  │  │  │  ├─ grammar.pyi
│  │     │  │  │  │  │  ├─ literals.pyi
│  │     │  │  │  │  │  ├─ parse.pyi
│  │     │  │  │  │  │  ├─ pgen.pyi
│  │     │  │  │  │  │  ├─ token.pyi
│  │     │  │  │  │  │  ├─ tokenize.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ pygram.pyi
│  │     │  │  │  │  ├─ pytree.pyi
│  │     │  │  │  │  ├─ refactor.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ linecache.pyi
│  │     │  │  │  ├─ locale.pyi
│  │     │  │  │  ├─ logging
│  │     │  │  │  │  ├─ config.pyi
│  │     │  │  │  │  ├─ handlers.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ lzma.pyi
│  │     │  │  │  ├─ mailbox.pyi
│  │     │  │  │  ├─ mailcap.pyi
│  │     │  │  │  ├─ marshal.pyi
│  │     │  │  │  ├─ math.pyi
│  │     │  │  │  ├─ mimetypes.pyi
│  │     │  │  │  ├─ mmap.pyi
│  │     │  │  │  ├─ modulefinder.pyi
│  │     │  │  │  ├─ msilib
│  │     │  │  │  │  ├─ schema.pyi
│  │     │  │  │  │  ├─ sequence.pyi
│  │     │  │  │  │  ├─ text.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ msvcrt.pyi
│  │     │  │  │  ├─ multiprocessing
│  │     │  │  │  │  ├─ connection.pyi
│  │     │  │  │  │  ├─ context.pyi
│  │     │  │  │  │  ├─ dummy
│  │     │  │  │  │  │  ├─ connection.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ forkserver.pyi
│  │     │  │  │  │  ├─ heap.pyi
│  │     │  │  │  │  ├─ managers.pyi
│  │     │  │  │  │  ├─ pool.pyi
│  │     │  │  │  │  ├─ popen_fork.pyi
│  │     │  │  │  │  ├─ popen_forkserver.pyi
│  │     │  │  │  │  ├─ popen_spawn_posix.pyi
│  │     │  │  │  │  ├─ popen_spawn_win32.pyi
│  │     │  │  │  │  ├─ process.pyi
│  │     │  │  │  │  ├─ queues.pyi
│  │     │  │  │  │  ├─ reduction.pyi
│  │     │  │  │  │  ├─ resource_sharer.pyi
│  │     │  │  │  │  ├─ resource_tracker.pyi
│  │     │  │  │  │  ├─ sharedctypes.pyi
│  │     │  │  │  │  ├─ shared_memory.pyi
│  │     │  │  │  │  ├─ spawn.pyi
│  │     │  │  │  │  ├─ synchronize.pyi
│  │     │  │  │  │  ├─ util.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ netrc.pyi
│  │     │  │  │  ├─ nis.pyi
│  │     │  │  │  ├─ nntplib.pyi
│  │     │  │  │  ├─ nt.pyi
│  │     │  │  │  ├─ ntpath.pyi
│  │     │  │  │  ├─ nturl2path.pyi
│  │     │  │  │  ├─ numbers.pyi
│  │     │  │  │  ├─ opcode.pyi
│  │     │  │  │  ├─ operator.pyi
│  │     │  │  │  ├─ optparse.pyi
│  │     │  │  │  ├─ os
│  │     │  │  │  │  ├─ path.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ ossaudiodev.pyi
│  │     │  │  │  ├─ parser.pyi
│  │     │  │  │  ├─ pathlib.pyi
│  │     │  │  │  ├─ pdb.pyi
│  │     │  │  │  ├─ pickle.pyi
│  │     │  │  │  ├─ pickletools.pyi
│  │     │  │  │  ├─ pipes.pyi
│  │     │  │  │  ├─ pkgutil.pyi
│  │     │  │  │  ├─ platform.pyi
│  │     │  │  │  ├─ plistlib.pyi
│  │     │  │  │  ├─ poplib.pyi
│  │     │  │  │  ├─ posix.pyi
│  │     │  │  │  ├─ posixpath.pyi
│  │     │  │  │  ├─ pprint.pyi
│  │     │  │  │  ├─ profile.pyi
│  │     │  │  │  ├─ pstats.pyi
│  │     │  │  │  ├─ pty.pyi
│  │     │  │  │  ├─ pwd.pyi
│  │     │  │  │  ├─ pyclbr.pyi
│  │     │  │  │  ├─ pydoc.pyi
│  │     │  │  │  ├─ pydoc_data
│  │     │  │  │  │  ├─ topics.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ pyexpat
│  │     │  │  │  │  ├─ errors.pyi
│  │     │  │  │  │  ├─ model.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ py_compile.pyi
│  │     │  │  │  ├─ queue.pyi
│  │     │  │  │  ├─ quopri.pyi
│  │     │  │  │  ├─ random.pyi
│  │     │  │  │  ├─ re.pyi
│  │     │  │  │  ├─ readline.pyi
│  │     │  │  │  ├─ reprlib.pyi
│  │     │  │  │  ├─ resource.pyi
│  │     │  │  │  ├─ rlcompleter.pyi
│  │     │  │  │  ├─ runpy.pyi
│  │     │  │  │  ├─ sched.pyi
│  │     │  │  │  ├─ secrets.pyi
│  │     │  │  │  ├─ select.pyi
│  │     │  │  │  ├─ selectors.pyi
│  │     │  │  │  ├─ shelve.pyi
│  │     │  │  │  ├─ shlex.pyi
│  │     │  │  │  ├─ shutil.pyi
│  │     │  │  │  ├─ signal.pyi
│  │     │  │  │  ├─ site.pyi
│  │     │  │  │  ├─ smtpd.pyi
│  │     │  │  │  ├─ smtplib.pyi
│  │     │  │  │  ├─ sndhdr.pyi
│  │     │  │  │  ├─ socket.pyi
│  │     │  │  │  ├─ socketserver.pyi
│  │     │  │  │  ├─ spwd.pyi
│  │     │  │  │  ├─ sqlite3
│  │     │  │  │  │  ├─ dbapi2.pyi
│  │     │  │  │  │  ├─ dump.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ sre_compile.pyi
│  │     │  │  │  ├─ sre_constants.pyi
│  │     │  │  │  ├─ sre_parse.pyi
│  │     │  │  │  ├─ ssl.pyi
│  │     │  │  │  ├─ stat.pyi
│  │     │  │  │  ├─ statistics.pyi
│  │     │  │  │  ├─ string.pyi
│  │     │  │  │  ├─ stringprep.pyi
│  │     │  │  │  ├─ struct.pyi
│  │     │  │  │  ├─ subprocess.pyi
│  │     │  │  │  ├─ sunau.pyi
│  │     │  │  │  ├─ symbol.pyi
│  │     │  │  │  ├─ symtable.pyi
│  │     │  │  │  ├─ sys
│  │     │  │  │  │  ├─ _monitoring.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ sysconfig.pyi
│  │     │  │  │  ├─ syslog.pyi
│  │     │  │  │  ├─ tabnanny.pyi
│  │     │  │  │  ├─ tarfile.pyi
│  │     │  │  │  ├─ telnetlib.pyi
│  │     │  │  │  ├─ tempfile.pyi
│  │     │  │  │  ├─ termios.pyi
│  │     │  │  │  ├─ textwrap.pyi
│  │     │  │  │  ├─ this.pyi
│  │     │  │  │  ├─ threading.pyi
│  │     │  │  │  ├─ time.pyi
│  │     │  │  │  ├─ timeit.pyi
│  │     │  │  │  ├─ tkinter
│  │     │  │  │  │  ├─ colorchooser.pyi
│  │     │  │  │  │  ├─ commondialog.pyi
│  │     │  │  │  │  ├─ constants.pyi
│  │     │  │  │  │  ├─ dialog.pyi
│  │     │  │  │  │  ├─ dnd.pyi
│  │     │  │  │  │  ├─ filedialog.pyi
│  │     │  │  │  │  ├─ font.pyi
│  │     │  │  │  │  ├─ messagebox.pyi
│  │     │  │  │  │  ├─ scrolledtext.pyi
│  │     │  │  │  │  ├─ simpledialog.pyi
│  │     │  │  │  │  ├─ tix.pyi
│  │     │  │  │  │  ├─ ttk.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ token.pyi
│  │     │  │  │  ├─ tokenize.pyi
│  │     │  │  │  ├─ tomllib.pyi
│  │     │  │  │  ├─ trace.pyi
│  │     │  │  │  ├─ traceback.pyi
│  │     │  │  │  ├─ tracemalloc.pyi
│  │     │  │  │  ├─ tty.pyi
│  │     │  │  │  ├─ turtle.pyi
│  │     │  │  │  ├─ types.pyi
│  │     │  │  │  ├─ typing.pyi
│  │     │  │  │  ├─ typing_extensions.pyi
│  │     │  │  │  ├─ unicodedata.pyi
│  │     │  │  │  ├─ unittest
│  │     │  │  │  │  ├─ async_case.pyi
│  │     │  │  │  │  ├─ case.pyi
│  │     │  │  │  │  ├─ loader.pyi
│  │     │  │  │  │  ├─ main.pyi
│  │     │  │  │  │  ├─ mock.pyi
│  │     │  │  │  │  ├─ result.pyi
│  │     │  │  │  │  ├─ runner.pyi
│  │     │  │  │  │  ├─ signals.pyi
│  │     │  │  │  │  ├─ suite.pyi
│  │     │  │  │  │  ├─ util.pyi
│  │     │  │  │  │  ├─ _log.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ urllib
│  │     │  │  │  │  ├─ error.pyi
│  │     │  │  │  │  ├─ parse.pyi
│  │     │  │  │  │  ├─ request.pyi
│  │     │  │  │  │  ├─ response.pyi
│  │     │  │  │  │  ├─ robotparser.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ uu.pyi
│  │     │  │  │  ├─ uuid.pyi
│  │     │  │  │  ├─ venv
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ VERSIONS
│  │     │  │  │  ├─ warnings.pyi
│  │     │  │  │  ├─ wave.pyi
│  │     │  │  │  ├─ weakref.pyi
│  │     │  │  │  ├─ webbrowser.pyi
│  │     │  │  │  ├─ winreg.pyi
│  │     │  │  │  ├─ winsound.pyi
│  │     │  │  │  ├─ wsgiref
│  │     │  │  │  │  ├─ handlers.pyi
│  │     │  │  │  │  ├─ headers.pyi
│  │     │  │  │  │  ├─ simple_server.pyi
│  │     │  │  │  │  ├─ types.pyi
│  │     │  │  │  │  ├─ util.pyi
│  │     │  │  │  │  ├─ validate.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ xdrlib.pyi
│  │     │  │  │  ├─ xml
│  │     │  │  │  │  ├─ dom
│  │     │  │  │  │  │  ├─ domreg.pyi
│  │     │  │  │  │  │  ├─ expatbuilder.pyi
│  │     │  │  │  │  │  ├─ minicompat.pyi
│  │     │  │  │  │  │  ├─ minidom.pyi
│  │     │  │  │  │  │  ├─ NodeFilter.pyi
│  │     │  │  │  │  │  ├─ pulldom.pyi
│  │     │  │  │  │  │  ├─ xmlbuilder.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ etree
│  │     │  │  │  │  │  ├─ cElementTree.pyi
│  │     │  │  │  │  │  ├─ ElementInclude.pyi
│  │     │  │  │  │  │  ├─ ElementPath.pyi
│  │     │  │  │  │  │  ├─ ElementTree.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ parsers
│  │     │  │  │  │  │  ├─ expat
│  │     │  │  │  │  │  │  ├─ errors.pyi
│  │     │  │  │  │  │  │  ├─ model.pyi
│  │     │  │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ sax
│  │     │  │  │  │  │  ├─ expatreader.pyi
│  │     │  │  │  │  │  ├─ handler.pyi
│  │     │  │  │  │  │  ├─ saxutils.pyi
│  │     │  │  │  │  │  ├─ xmlreader.pyi
│  │     │  │  │  │  │  ├─ _exceptions.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ xmlrpc
│  │     │  │  │  │  ├─ client.pyi
│  │     │  │  │  │  ├─ server.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ xxlimited.pyi
│  │     │  │  │  ├─ zipapp.pyi
│  │     │  │  │  ├─ zipfile
│  │     │  │  │  │  ├─ _path
│  │     │  │  │  │  │  ├─ glob.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ zipimport.pyi
│  │     │  │  │  ├─ zlib.pyi
│  │     │  │  │  ├─ zoneinfo
│  │     │  │  │  │  ├─ _common.pyi
│  │     │  │  │  │  ├─ _tzpath.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ _ast.pyi
│  │     │  │  │  ├─ _asyncio.pyi
│  │     │  │  │  ├─ _bisect.pyi
│  │     │  │  │  ├─ _blake2.pyi
│  │     │  │  │  ├─ _bootlocale.pyi
│  │     │  │  │  ├─ _bz2.pyi
│  │     │  │  │  ├─ _codecs.pyi
│  │     │  │  │  ├─ _collections_abc.pyi
│  │     │  │  │  ├─ _compat_pickle.pyi
│  │     │  │  │  ├─ _compression.pyi
│  │     │  │  │  ├─ _contextvars.pyi
│  │     │  │  │  ├─ _csv.pyi
│  │     │  │  │  ├─ _ctypes.pyi
│  │     │  │  │  ├─ _curses.pyi
│  │     │  │  │  ├─ _curses_panel.pyi
│  │     │  │  │  ├─ _dbm.pyi
│  │     │  │  │  ├─ _decimal.pyi
│  │     │  │  │  ├─ _dummy_thread.pyi
│  │     │  │  │  ├─ _dummy_threading.pyi
│  │     │  │  │  ├─ _frozen_importlib.pyi
│  │     │  │  │  ├─ _frozen_importlib_external.pyi
│  │     │  │  │  ├─ _gdbm.pyi
│  │     │  │  │  ├─ _hashlib.pyi
│  │     │  │  │  ├─ _heapq.pyi
│  │     │  │  │  ├─ _imp.pyi
│  │     │  │  │  ├─ _interpchannels.pyi
│  │     │  │  │  ├─ _interpqueues.pyi
│  │     │  │  │  ├─ _interpreters.pyi
│  │     │  │  │  ├─ _io.pyi
│  │     │  │  │  ├─ _json.pyi
│  │     │  │  │  ├─ _locale.pyi
│  │     │  │  │  ├─ _lsprof.pyi
│  │     │  │  │  ├─ _lzma.pyi
│  │     │  │  │  ├─ _markupbase.pyi
│  │     │  │  │  ├─ _msi.pyi
│  │     │  │  │  ├─ _multibytecodec.pyi
│  │     │  │  │  ├─ _operator.pyi
│  │     │  │  │  ├─ _osx_support.pyi
│  │     │  │  │  ├─ _pickle.pyi
│  │     │  │  │  ├─ _posixsubprocess.pyi
│  │     │  │  │  ├─ _pydecimal.pyi
│  │     │  │  │  ├─ _py_abc.pyi
│  │     │  │  │  ├─ _queue.pyi
│  │     │  │  │  ├─ _random.pyi
│  │     │  │  │  ├─ _sitebuiltins.pyi
│  │     │  │  │  ├─ _socket.pyi
│  │     │  │  │  ├─ _sqlite3.pyi
│  │     │  │  │  ├─ _ssl.pyi
│  │     │  │  │  ├─ _stat.pyi
│  │     │  │  │  ├─ _struct.pyi
│  │     │  │  │  ├─ _thread.pyi
│  │     │  │  │  ├─ _threading_local.pyi
│  │     │  │  │  ├─ _tkinter.pyi
│  │     │  │  │  ├─ _tracemalloc.pyi
│  │     │  │  │  ├─ _typeshed
│  │     │  │  │  │  ├─ dbapi.pyi
│  │     │  │  │  │  ├─ importlib.pyi
│  │     │  │  │  │  ├─ wsgi.pyi
│  │     │  │  │  │  ├─ xml.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ _warnings.pyi
│  │     │  │  │  ├─ _weakref.pyi
│  │     │  │  │  ├─ _weakrefset.pyi
│  │     │  │  │  ├─ _winapi.pyi
│  │     │  │  │  ├─ __future__.pyi
│  │     │  │  │  └─ __main__.pyi
│  │     │  │  └─ stubs
│  │     │  │     └─ mypy-extensions
│  │     │  │        └─ mypy_extensions.pyi
│  │     │  ├─ typestate.cp313-win_amd64.pyd
│  │     │  ├─ typestate.py
│  │     │  ├─ types_utils.cp313-win_amd64.pyd
│  │     │  ├─ types_utils.py
│  │     │  ├─ typetraverser.cp313-win_amd64.pyd
│  │     │  ├─ typetraverser.py
│  │     │  ├─ typevars.cp313-win_amd64.pyd
│  │     │  ├─ typevars.py
│  │     │  ├─ typevartuples.cp313-win_amd64.pyd
│  │     │  ├─ typevartuples.py
│  │     │  ├─ type_visitor.cp313-win_amd64.pyd
│  │     │  ├─ type_visitor.py
│  │     │  ├─ util.cp313-win_amd64.pyd
│  │     │  ├─ util.py
│  │     │  ├─ version.py
│  │     │  ├─ visitor.cp313-win_amd64.pyd
│  │     │  ├─ visitor.py
│  │     │  ├─ xml
│  │     │  │  ├─ mypy-html.css
│  │     │  │  ├─ mypy-html.xslt
│  │     │  │  ├─ mypy-txt.xslt
│  │     │  │  └─ mypy.xsd
│  │     │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ api.cpython-313.pyc
│  │     │     ├─ applytype.cpython-313.pyc
│  │     │     ├─ argmap.cpython-313.pyc
│  │     │     ├─ binder.cpython-313.pyc
│  │     │     ├─ bogus_type.cpython-313.pyc
│  │     │     ├─ build.cpython-313.pyc
│  │     │     ├─ checker.cpython-313.pyc
│  │     │     ├─ checkexpr.cpython-313.pyc
│  │     │     ├─ checkmember.cpython-313.pyc
│  │     │     ├─ checkpattern.cpython-313.pyc
│  │     │     ├─ checkstrformat.cpython-313.pyc
│  │     │     ├─ config_parser.cpython-313.pyc
│  │     │     ├─ constant_fold.cpython-313.pyc
│  │     │     ├─ constraints.cpython-313.pyc
│  │     │     ├─ copytype.cpython-313.pyc
│  │     │     ├─ defaults.cpython-313.pyc
│  │     │     ├─ dmypy_os.cpython-313.pyc
│  │     │     ├─ dmypy_server.cpython-313.pyc
│  │     │     ├─ dmypy_util.cpython-313.pyc
│  │     │     ├─ erasetype.cpython-313.pyc
│  │     │     ├─ errorcodes.cpython-313.pyc
│  │     │     ├─ errors.cpython-313.pyc
│  │     │     ├─ error_formatter.cpython-313.pyc
│  │     │     ├─ evalexpr.cpython-313.pyc
│  │     │     ├─ expandtype.cpython-313.pyc
│  │     │     ├─ exprtotype.cpython-313.pyc
│  │     │     ├─ fastparse.cpython-313.pyc
│  │     │     ├─ find_sources.cpython-313.pyc
│  │     │     ├─ fixup.cpython-313.pyc
│  │     │     ├─ freetree.cpython-313.pyc
│  │     │     ├─ fscache.cpython-313.pyc
│  │     │     ├─ fswatcher.cpython-313.pyc
│  │     │     ├─ gclogger.cpython-313.pyc
│  │     │     ├─ git.cpython-313.pyc
│  │     │     ├─ graph_utils.cpython-313.pyc
│  │     │     ├─ indirection.cpython-313.pyc
│  │     │     ├─ infer.cpython-313.pyc
│  │     │     ├─ inspections.cpython-313.pyc
│  │     │     ├─ ipc.cpython-313.pyc
│  │     │     ├─ join.cpython-313.pyc
│  │     │     ├─ literals.cpython-313.pyc
│  │     │     ├─ lookup.cpython-313.pyc
│  │     │     ├─ main.cpython-313.pyc
│  │     │     ├─ maptype.cpython-313.pyc
│  │     │     ├─ meet.cpython-313.pyc
│  │     │     ├─ memprofile.cpython-313.pyc
│  │     │     ├─ messages.cpython-313.pyc
│  │     │     ├─ message_registry.cpython-313.pyc
│  │     │     ├─ metastore.cpython-313.pyc
│  │     │     ├─ mixedtraverser.cpython-313.pyc
│  │     │     ├─ modulefinder.cpython-313.pyc
│  │     │     ├─ moduleinspect.cpython-313.pyc
│  │     │     ├─ mro.cpython-313.pyc
│  │     │     ├─ nodes.cpython-313.pyc
│  │     │     ├─ operators.cpython-313.pyc
│  │     │     ├─ options.cpython-313.pyc
│  │     │     ├─ parse.cpython-313.pyc
│  │     │     ├─ partially_defined.cpython-313.pyc
│  │     │     ├─ patterns.cpython-313.pyc
│  │     │     ├─ plugin.cpython-313.pyc
│  │     │     ├─ pyinfo.cpython-313.pyc
│  │     │     ├─ reachability.cpython-313.pyc
│  │     │     ├─ refinfo.cpython-313.pyc
│  │     │     ├─ renaming.cpython-313.pyc
│  │     │     ├─ report.cpython-313.pyc
│  │     │     ├─ scope.cpython-313.pyc
│  │     │     ├─ semanal.cpython-313.pyc
│  │     │     ├─ semanal_classprop.cpython-313.pyc
│  │     │     ├─ semanal_enum.cpython-313.pyc
│  │     │     ├─ semanal_infer.cpython-313.pyc
│  │     │     ├─ semanal_main.cpython-313.pyc
│  │     │     ├─ semanal_namedtuple.cpython-313.pyc
│  │     │     ├─ semanal_newtype.cpython-313.pyc
│  │     │     ├─ semanal_pass1.cpython-313.pyc
│  │     │     ├─ semanal_shared.cpython-313.pyc
│  │     │     ├─ semanal_typeargs.cpython-313.pyc
│  │     │     ├─ semanal_typeddict.cpython-313.pyc
│  │     │     ├─ sharedparse.cpython-313.pyc
│  │     │     ├─ solve.cpython-313.pyc
│  │     │     ├─ split_namespace.cpython-313.pyc
│  │     │     ├─ state.cpython-313.pyc
│  │     │     ├─ stats.cpython-313.pyc
│  │     │     ├─ strconv.cpython-313.pyc
│  │     │     ├─ stubdoc.cpython-313.pyc
│  │     │     ├─ stubgen.cpython-313.pyc
│  │     │     ├─ stubgenc.cpython-313.pyc
│  │     │     ├─ stubinfo.cpython-313.pyc
│  │     │     ├─ stubtest.cpython-313.pyc
│  │     │     ├─ stubutil.cpython-313.pyc
│  │     │     ├─ subtypes.cpython-313.pyc
│  │     │     ├─ suggestions.cpython-313.pyc
│  │     │     ├─ traverser.cpython-313.pyc
│  │     │     ├─ treetransform.cpython-313.pyc
│  │     │     ├─ tvar_scope.cpython-313.pyc
│  │     │     ├─ typeanal.cpython-313.pyc
│  │     │     ├─ typeops.cpython-313.pyc
│  │     │     ├─ types.cpython-313.pyc
│  │     │     ├─ typestate.cpython-313.pyc
│  │     │     ├─ types_utils.cpython-313.pyc
│  │     │     ├─ typetraverser.cpython-313.pyc
│  │     │     ├─ typevars.cpython-313.pyc
│  │     │     ├─ typevartuples.cpython-313.pyc
│  │     │     ├─ type_visitor.cpython-313.pyc
│  │     │     ├─ util.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ visitor.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ mypy-1.15.0.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ mypyc
│  │     │  ├─ analysis
│  │     │  │  ├─ attrdefined.cp313-win_amd64.pyd
│  │     │  │  ├─ attrdefined.py
│  │     │  │  ├─ blockfreq.cp313-win_amd64.pyd
│  │     │  │  ├─ blockfreq.py
│  │     │  │  ├─ dataflow.cp313-win_amd64.pyd
│  │     │  │  ├─ dataflow.py
│  │     │  │  ├─ ircheck.cp313-win_amd64.pyd
│  │     │  │  ├─ ircheck.py
│  │     │  │  ├─ selfleaks.cp313-win_amd64.pyd
│  │     │  │  ├─ selfleaks.py
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ attrdefined.cpython-313.pyc
│  │     │  │     ├─ blockfreq.cpython-313.pyc
│  │     │  │     ├─ dataflow.cpython-313.pyc
│  │     │  │     ├─ ircheck.cpython-313.pyc
│  │     │  │     ├─ selfleaks.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ build.cp313-win_amd64.pyd
│  │     │  ├─ build.py
│  │     │  ├─ codegen
│  │     │  │  ├─ cstring.cp313-win_amd64.pyd
│  │     │  │  ├─ cstring.py
│  │     │  │  ├─ emit.cp313-win_amd64.pyd
│  │     │  │  ├─ emit.py
│  │     │  │  ├─ emitclass.cp313-win_amd64.pyd
│  │     │  │  ├─ emitclass.py
│  │     │  │  ├─ emitfunc.cp313-win_amd64.pyd
│  │     │  │  ├─ emitfunc.py
│  │     │  │  ├─ emitmodule.cp313-win_amd64.pyd
│  │     │  │  ├─ emitmodule.py
│  │     │  │  ├─ emitwrapper.cp313-win_amd64.pyd
│  │     │  │  ├─ emitwrapper.py
│  │     │  │  ├─ literals.cp313-win_amd64.pyd
│  │     │  │  ├─ literals.py
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ cstring.cpython-313.pyc
│  │     │  │     ├─ emit.cpython-313.pyc
│  │     │  │     ├─ emitclass.cpython-313.pyc
│  │     │  │     ├─ emitfunc.cpython-313.pyc
│  │     │  │     ├─ emitmodule.cpython-313.pyc
│  │     │  │     ├─ emitwrapper.cpython-313.pyc
│  │     │  │     ├─ literals.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ common.cp313-win_amd64.pyd
│  │     │  ├─ common.py
│  │     │  ├─ crash.cp313-win_amd64.pyd
│  │     │  ├─ crash.py
│  │     │  ├─ errors.cp313-win_amd64.pyd
│  │     │  ├─ errors.py
│  │     │  ├─ ir
│  │     │  │  ├─ class_ir.cp313-win_amd64.pyd
│  │     │  │  ├─ class_ir.py
│  │     │  │  ├─ func_ir.cp313-win_amd64.pyd
│  │     │  │  ├─ func_ir.py
│  │     │  │  ├─ module_ir.cp313-win_amd64.pyd
│  │     │  │  ├─ module_ir.py
│  │     │  │  ├─ ops.cp313-win_amd64.pyd
│  │     │  │  ├─ ops.py
│  │     │  │  ├─ pprint.cp313-win_amd64.pyd
│  │     │  │  ├─ pprint.py
│  │     │  │  ├─ rtypes.cp313-win_amd64.pyd
│  │     │  │  ├─ rtypes.py
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ class_ir.cpython-313.pyc
│  │     │  │     ├─ func_ir.cpython-313.pyc
│  │     │  │     ├─ module_ir.cpython-313.pyc
│  │     │  │     ├─ ops.cpython-313.pyc
│  │     │  │     ├─ pprint.cpython-313.pyc
│  │     │  │     ├─ rtypes.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ irbuild
│  │     │  │  ├─ ast_helpers.cp313-win_amd64.pyd
│  │     │  │  ├─ ast_helpers.py
│  │     │  │  ├─ builder.cp313-win_amd64.pyd
│  │     │  │  ├─ builder.py
│  │     │  │  ├─ callable_class.cp313-win_amd64.pyd
│  │     │  │  ├─ callable_class.py
│  │     │  │  ├─ classdef.cp313-win_amd64.pyd
│  │     │  │  ├─ classdef.py
│  │     │  │  ├─ constant_fold.cp313-win_amd64.pyd
│  │     │  │  ├─ constant_fold.py
│  │     │  │  ├─ context.cp313-win_amd64.pyd
│  │     │  │  ├─ context.py
│  │     │  │  ├─ env_class.cp313-win_amd64.pyd
│  │     │  │  ├─ env_class.py
│  │     │  │  ├─ expression.cp313-win_amd64.pyd
│  │     │  │  ├─ expression.py
│  │     │  │  ├─ format_str_tokenizer.cp313-win_amd64.pyd
│  │     │  │  ├─ format_str_tokenizer.py
│  │     │  │  ├─ for_helpers.cp313-win_amd64.pyd
│  │     │  │  ├─ for_helpers.py
│  │     │  │  ├─ function.cp313-win_amd64.pyd
│  │     │  │  ├─ function.py
│  │     │  │  ├─ generator.cp313-win_amd64.pyd
│  │     │  │  ├─ generator.py
│  │     │  │  ├─ ll_builder.cp313-win_amd64.pyd
│  │     │  │  ├─ ll_builder.py
│  │     │  │  ├─ main.cp313-win_amd64.pyd
│  │     │  │  ├─ main.py
│  │     │  │  ├─ mapper.cp313-win_amd64.pyd
│  │     │  │  ├─ mapper.py
│  │     │  │  ├─ match.cp313-win_amd64.pyd
│  │     │  │  ├─ match.py
│  │     │  │  ├─ nonlocalcontrol.cp313-win_amd64.pyd
│  │     │  │  ├─ nonlocalcontrol.py
│  │     │  │  ├─ prebuildvisitor.cp313-win_amd64.pyd
│  │     │  │  ├─ prebuildvisitor.py
│  │     │  │  ├─ prepare.cp313-win_amd64.pyd
│  │     │  │  ├─ prepare.py
│  │     │  │  ├─ specialize.cp313-win_amd64.pyd
│  │     │  │  ├─ specialize.py
│  │     │  │  ├─ statement.cp313-win_amd64.pyd
│  │     │  │  ├─ statement.py
│  │     │  │  ├─ targets.cp313-win_amd64.pyd
│  │     │  │  ├─ targets.py
│  │     │  │  ├─ util.cp313-win_amd64.pyd
│  │     │  │  ├─ util.py
│  │     │  │  ├─ visitor.cp313-win_amd64.pyd
│  │     │  │  ├─ visitor.py
│  │     │  │  ├─ vtable.cp313-win_amd64.pyd
│  │     │  │  ├─ vtable.py
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ ast_helpers.cpython-313.pyc
│  │     │  │     ├─ builder.cpython-313.pyc
│  │     │  │     ├─ callable_class.cpython-313.pyc
│  │     │  │     ├─ classdef.cpython-313.pyc
│  │     │  │     ├─ constant_fold.cpython-313.pyc
│  │     │  │     ├─ context.cpython-313.pyc
│  │     │  │     ├─ env_class.cpython-313.pyc
│  │     │  │     ├─ expression.cpython-313.pyc
│  │     │  │     ├─ format_str_tokenizer.cpython-313.pyc
│  │     │  │     ├─ for_helpers.cpython-313.pyc
│  │     │  │     ├─ function.cpython-313.pyc
│  │     │  │     ├─ generator.cpython-313.pyc
│  │     │  │     ├─ ll_builder.cpython-313.pyc
│  │     │  │     ├─ main.cpython-313.pyc
│  │     │  │     ├─ mapper.cpython-313.pyc
│  │     │  │     ├─ match.cpython-313.pyc
│  │     │  │     ├─ nonlocalcontrol.cpython-313.pyc
│  │     │  │     ├─ prebuildvisitor.cpython-313.pyc
│  │     │  │     ├─ prepare.cpython-313.pyc
│  │     │  │     ├─ specialize.cpython-313.pyc
│  │     │  │     ├─ statement.cpython-313.pyc
│  │     │  │     ├─ targets.cpython-313.pyc
│  │     │  │     ├─ util.cpython-313.pyc
│  │     │  │     ├─ visitor.cpython-313.pyc
│  │     │  │     ├─ vtable.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ lib-rt
│  │     │  │  ├─ bytes_ops.c
│  │     │  │  ├─ CPy.h
│  │     │  │  ├─ dict_ops.c
│  │     │  │  ├─ exc_ops.c
│  │     │  │  ├─ float_ops.c
│  │     │  │  ├─ generic_ops.c
│  │     │  │  ├─ getargs.c
│  │     │  │  ├─ getargsfast.c
│  │     │  │  ├─ init.c
│  │     │  │  ├─ int_ops.c
│  │     │  │  ├─ list_ops.c
│  │     │  │  ├─ misc_ops.c
│  │     │  │  ├─ module_shim.tmpl
│  │     │  │  ├─ mypyc_util.h
│  │     │  │  ├─ pythoncapi_compat.h
│  │     │  │  ├─ pythonsupport.c
│  │     │  │  ├─ pythonsupport.h
│  │     │  │  ├─ set_ops.c
│  │     │  │  ├─ str_ops.c
│  │     │  │  └─ tuple_ops.c
│  │     │  ├─ lower
│  │     │  │  ├─ int_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ int_ops.py
│  │     │  │  ├─ list_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ list_ops.py
│  │     │  │  ├─ misc_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ misc_ops.py
│  │     │  │  ├─ registry.cp313-win_amd64.pyd
│  │     │  │  ├─ registry.py
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ int_ops.cpython-313.pyc
│  │     │  │     ├─ list_ops.cpython-313.pyc
│  │     │  │     ├─ misc_ops.cpython-313.pyc
│  │     │  │     ├─ registry.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ namegen.cp313-win_amd64.pyd
│  │     │  ├─ namegen.py
│  │     │  ├─ options.cp313-win_amd64.pyd
│  │     │  ├─ options.py
│  │     │  ├─ primitives
│  │     │  │  ├─ bytes_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ bytes_ops.py
│  │     │  │  ├─ dict_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ dict_ops.py
│  │     │  │  ├─ exc_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ exc_ops.py
│  │     │  │  ├─ float_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ float_ops.py
│  │     │  │  ├─ generic_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ generic_ops.py
│  │     │  │  ├─ int_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ int_ops.py
│  │     │  │  ├─ list_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ list_ops.py
│  │     │  │  ├─ misc_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ misc_ops.py
│  │     │  │  ├─ registry.cp313-win_amd64.pyd
│  │     │  │  ├─ registry.py
│  │     │  │  ├─ set_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ set_ops.py
│  │     │  │  ├─ str_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ str_ops.py
│  │     │  │  ├─ tuple_ops.cp313-win_amd64.pyd
│  │     │  │  ├─ tuple_ops.py
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ bytes_ops.cpython-313.pyc
│  │     │  │     ├─ dict_ops.cpython-313.pyc
│  │     │  │     ├─ exc_ops.cpython-313.pyc
│  │     │  │     ├─ float_ops.cpython-313.pyc
│  │     │  │     ├─ generic_ops.cpython-313.pyc
│  │     │  │     ├─ int_ops.cpython-313.pyc
│  │     │  │     ├─ list_ops.cpython-313.pyc
│  │     │  │     ├─ misc_ops.cpython-313.pyc
│  │     │  │     ├─ registry.cpython-313.pyc
│  │     │  │     ├─ set_ops.cpython-313.pyc
│  │     │  │     ├─ str_ops.cpython-313.pyc
│  │     │  │     ├─ tuple_ops.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ rt_subtype.cp313-win_amd64.pyd
│  │     │  ├─ rt_subtype.py
│  │     │  ├─ sametype.cp313-win_amd64.pyd
│  │     │  ├─ sametype.py
│  │     │  ├─ subtype.cp313-win_amd64.pyd
│  │     │  ├─ subtype.py
│  │     │  ├─ test
│  │     │  │  ├─ config.py
│  │     │  │  ├─ testutil.py
│  │     │  │  ├─ test_alwaysdefined.py
│  │     │  │  ├─ test_analysis.py
│  │     │  │  ├─ test_cheader.py
│  │     │  │  ├─ test_commandline.py
│  │     │  │  ├─ test_emit.py
│  │     │  │  ├─ test_emitclass.py
│  │     │  │  ├─ test_emitfunc.py
│  │     │  │  ├─ test_emitwrapper.py
│  │     │  │  ├─ test_exceptions.py
│  │     │  │  ├─ test_external.py
│  │     │  │  ├─ test_irbuild.py
│  │     │  │  ├─ test_ircheck.py
│  │     │  │  ├─ test_literals.py
│  │     │  │  ├─ test_lowering.py
│  │     │  │  ├─ test_namegen.py
│  │     │  │  ├─ test_optimizations.py
│  │     │  │  ├─ test_pprint.py
│  │     │  │  ├─ test_rarray.py
│  │     │  │  ├─ test_refcount.py
│  │     │  │  ├─ test_run.py
│  │     │  │  ├─ test_serialization.py
│  │     │  │  ├─ test_struct.py
│  │     │  │  ├─ test_tuplename.py
│  │     │  │  ├─ test_typeops.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ config.cpython-313.pyc
│  │     │  │     ├─ testutil.cpython-313.pyc
│  │     │  │     ├─ test_alwaysdefined.cpython-313.pyc
│  │     │  │     ├─ test_analysis.cpython-313.pyc
│  │     │  │     ├─ test_cheader.cpython-313.pyc
│  │     │  │     ├─ test_commandline.cpython-313.pyc
│  │     │  │     ├─ test_emit.cpython-313.pyc
│  │     │  │     ├─ test_emitclass.cpython-313.pyc
│  │     │  │     ├─ test_emitfunc.cpython-313.pyc
│  │     │  │     ├─ test_emitwrapper.cpython-313.pyc
│  │     │  │     ├─ test_exceptions.cpython-313.pyc
│  │     │  │     ├─ test_external.cpython-313.pyc
│  │     │  │     ├─ test_irbuild.cpython-313.pyc
│  │     │  │     ├─ test_ircheck.cpython-313.pyc
│  │     │  │     ├─ test_literals.cpython-313.pyc
│  │     │  │     ├─ test_lowering.cpython-313.pyc
│  │     │  │     ├─ test_namegen.cpython-313.pyc
│  │     │  │     ├─ test_optimizations.cpython-313.pyc
│  │     │  │     ├─ test_pprint.cpython-313.pyc
│  │     │  │     ├─ test_rarray.cpython-313.pyc
│  │     │  │     ├─ test_refcount.cpython-313.pyc
│  │     │  │     ├─ test_run.cpython-313.pyc
│  │     │  │     ├─ test_serialization.cpython-313.pyc
│  │     │  │     ├─ test_struct.cpython-313.pyc
│  │     │  │     ├─ test_tuplename.cpython-313.pyc
│  │     │  │     ├─ test_typeops.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ transform
│  │     │  │  ├─ copy_propagation.cp313-win_amd64.pyd
│  │     │  │  ├─ copy_propagation.py
│  │     │  │  ├─ exceptions.cp313-win_amd64.pyd
│  │     │  │  ├─ exceptions.py
│  │     │  │  ├─ flag_elimination.cp313-win_amd64.pyd
│  │     │  │  ├─ flag_elimination.py
│  │     │  │  ├─ ir_transform.cp313-win_amd64.pyd
│  │     │  │  ├─ ir_transform.py
│  │     │  │  ├─ lower.cp313-win_amd64.pyd
│  │     │  │  ├─ lower.py
│  │     │  │  ├─ refcount.cp313-win_amd64.pyd
│  │     │  │  ├─ refcount.py
│  │     │  │  ├─ uninit.cp313-win_amd64.pyd
│  │     │  │  ├─ uninit.py
│  │     │  │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ copy_propagation.cpython-313.pyc
│  │     │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │     ├─ flag_elimination.cpython-313.pyc
│  │     │  │     ├─ ir_transform.cpython-313.pyc
│  │     │  │     ├─ lower.cpython-313.pyc
│  │     │  │     ├─ refcount.cpython-313.pyc
│  │     │  │     ├─ uninit.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.cp313-win_amd64.pyd
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ build.cpython-313.pyc
│  │     │     ├─ common.cpython-313.pyc
│  │     │     ├─ crash.cpython-313.pyc
│  │     │     ├─ errors.cpython-313.pyc
│  │     │     ├─ namegen.cpython-313.pyc
│  │     │     ├─ options.cpython-313.pyc
│  │     │     ├─ rt_subtype.cpython-313.pyc
│  │     │     ├─ sametype.cpython-313.pyc
│  │     │     ├─ subtype.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ mypy_extensions-1.0.0.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ mypy_extensions.py
│  │     ├─ packaging
│  │     │  ├─ licenses
│  │     │  │  ├─ _spdx.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _spdx.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ markers.py
│  │     │  ├─ metadata.py
│  │     │  ├─ py.typed
│  │     │  ├─ requirements.py
│  │     │  ├─ specifiers.py
│  │     │  ├─ tags.py
│  │     │  ├─ utils.py
│  │     │  ├─ version.py
│  │     │  ├─ _elffile.py
│  │     │  ├─ _manylinux.py
│  │     │  ├─ _musllinux.py
│  │     │  ├─ _parser.py
│  │     │  ├─ _structures.py
│  │     │  ├─ _tokenizer.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ markers.cpython-313.pyc
│  │     │     ├─ metadata.cpython-313.pyc
│  │     │     ├─ requirements.cpython-313.pyc
│  │     │     ├─ specifiers.cpython-313.pyc
│  │     │     ├─ tags.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ _elffile.cpython-313.pyc
│  │     │     ├─ _manylinux.cpython-313.pyc
│  │     │     ├─ _musllinux.cpython-313.pyc
│  │     │     ├─ _parser.cpython-313.pyc
│  │     │     ├─ _structures.cpython-313.pyc
│  │     │     ├─ _tokenizer.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ packaging-24.2.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ LICENSE.APACHE
│  │     │  ├─ LICENSE.BSD
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ pathspec
│  │     │  ├─ gitignore.py
│  │     │  ├─ pathspec.py
│  │     │  ├─ pattern.py
│  │     │  ├─ patterns
│  │     │  │  ├─ gitwildmatch.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ gitwildmatch.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ util.py
│  │     │  ├─ _meta.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ gitignore.cpython-313.pyc
│  │     │     ├─ pathspec.cpython-313.pyc
│  │     │     ├─ pattern.cpython-313.pyc
│  │     │     ├─ util.cpython-313.pyc
│  │     │     ├─ _meta.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pathspec-0.12.1.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ pip
│  │     │  ├─ py.typed
│  │     │  ├─ _internal
│  │     │  │  ├─ build_env.py
│  │     │  │  ├─ cache.py
│  │     │  │  ├─ cli
│  │     │  │  │  ├─ autocompletion.py
│  │     │  │  │  ├─ base_command.py
│  │     │  │  │  ├─ cmdoptions.py
│  │     │  │  │  ├─ command_context.py
│  │     │  │  │  ├─ index_command.py
│  │     │  │  │  ├─ main.py
│  │     │  │  │  ├─ main_parser.py
│  │     │  │  │  ├─ parser.py
│  │     │  │  │  ├─ progress_bars.py
│  │     │  │  │  ├─ req_command.py
│  │     │  │  │  ├─ spinners.py
│  │     │  │  │  ├─ status_codes.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ autocompletion.cpython-313.pyc
│  │     │  │  │     ├─ base_command.cpython-313.pyc
│  │     │  │  │     ├─ cmdoptions.cpython-313.pyc
│  │     │  │  │     ├─ command_context.cpython-313.pyc
│  │     │  │  │     ├─ index_command.cpython-313.pyc
│  │     │  │  │     ├─ main.cpython-313.pyc
│  │     │  │  │     ├─ main_parser.cpython-313.pyc
│  │     │  │  │     ├─ parser.cpython-313.pyc
│  │     │  │  │     ├─ progress_bars.cpython-313.pyc
│  │     │  │  │     ├─ req_command.cpython-313.pyc
│  │     │  │  │     ├─ spinners.cpython-313.pyc
│  │     │  │  │     ├─ status_codes.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ commands
│  │     │  │  │  ├─ cache.py
│  │     │  │  │  ├─ check.py
│  │     │  │  │  ├─ completion.py
│  │     │  │  │  ├─ configuration.py
│  │     │  │  │  ├─ debug.py
│  │     │  │  │  ├─ download.py
│  │     │  │  │  ├─ freeze.py
│  │     │  │  │  ├─ hash.py
│  │     │  │  │  ├─ help.py
│  │     │  │  │  ├─ index.py
│  │     │  │  │  ├─ inspect.py
│  │     │  │  │  ├─ install.py
│  │     │  │  │  ├─ list.py
│  │     │  │  │  ├─ search.py
│  │     │  │  │  ├─ show.py
│  │     │  │  │  ├─ uninstall.py
│  │     │  │  │  ├─ wheel.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ cache.cpython-313.pyc
│  │     │  │  │     ├─ check.cpython-313.pyc
│  │     │  │  │     ├─ completion.cpython-313.pyc
│  │     │  │  │     ├─ configuration.cpython-313.pyc
│  │     │  │  │     ├─ debug.cpython-313.pyc
│  │     │  │  │     ├─ download.cpython-313.pyc
│  │     │  │  │     ├─ freeze.cpython-313.pyc
│  │     │  │  │     ├─ hash.cpython-313.pyc
│  │     │  │  │     ├─ help.cpython-313.pyc
│  │     │  │  │     ├─ index.cpython-313.pyc
│  │     │  │  │     ├─ inspect.cpython-313.pyc
│  │     │  │  │     ├─ install.cpython-313.pyc
│  │     │  │  │     ├─ list.cpython-313.pyc
│  │     │  │  │     ├─ search.cpython-313.pyc
│  │     │  │  │     ├─ show.cpython-313.pyc
│  │     │  │  │     ├─ uninstall.cpython-313.pyc
│  │     │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ configuration.py
│  │     │  │  ├─ distributions
│  │     │  │  │  ├─ base.py
│  │     │  │  │  ├─ installed.py
│  │     │  │  │  ├─ sdist.py
│  │     │  │  │  ├─ wheel.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │     ├─ installed.cpython-313.pyc
│  │     │  │  │     ├─ sdist.cpython-313.pyc
│  │     │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ exceptions.py
│  │     │  │  ├─ index
│  │     │  │  │  ├─ collector.py
│  │     │  │  │  ├─ package_finder.py
│  │     │  │  │  ├─ sources.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ collector.cpython-313.pyc
│  │     │  │  │     ├─ package_finder.cpython-313.pyc
│  │     │  │  │     ├─ sources.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ locations
│  │     │  │  │  ├─ base.py
│  │     │  │  │  ├─ _distutils.py
│  │     │  │  │  ├─ _sysconfig.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │     ├─ _distutils.cpython-313.pyc
│  │     │  │  │     ├─ _sysconfig.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ main.py
│  │     │  │  ├─ metadata
│  │     │  │  │  ├─ base.py
│  │     │  │  │  ├─ importlib
│  │     │  │  │  │  ├─ _compat.py
│  │     │  │  │  │  ├─ _dists.py
│  │     │  │  │  │  ├─ _envs.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _compat.cpython-313.pyc
│  │     │  │  │  │     ├─ _dists.cpython-313.pyc
│  │     │  │  │  │     ├─ _envs.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ pkg_resources.py
│  │     │  │  │  ├─ _json.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │     ├─ pkg_resources.cpython-313.pyc
│  │     │  │  │     ├─ _json.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ models
│  │     │  │  │  ├─ candidate.py
│  │     │  │  │  ├─ direct_url.py
│  │     │  │  │  ├─ format_control.py
│  │     │  │  │  ├─ index.py
│  │     │  │  │  ├─ installation_report.py
│  │     │  │  │  ├─ link.py
│  │     │  │  │  ├─ scheme.py
│  │     │  │  │  ├─ search_scope.py
│  │     │  │  │  ├─ selection_prefs.py
│  │     │  │  │  ├─ target_python.py
│  │     │  │  │  ├─ wheel.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ candidate.cpython-313.pyc
│  │     │  │  │     ├─ direct_url.cpython-313.pyc
│  │     │  │  │     ├─ format_control.cpython-313.pyc
│  │     │  │  │     ├─ index.cpython-313.pyc
│  │     │  │  │     ├─ installation_report.cpython-313.pyc
│  │     │  │  │     ├─ link.cpython-313.pyc
│  │     │  │  │     ├─ scheme.cpython-313.pyc
│  │     │  │  │     ├─ search_scope.cpython-313.pyc
│  │     │  │  │     ├─ selection_prefs.cpython-313.pyc
│  │     │  │  │     ├─ target_python.cpython-313.pyc
│  │     │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ network
│  │     │  │  │  ├─ auth.py
│  │     │  │  │  ├─ cache.py
│  │     │  │  │  ├─ download.py
│  │     │  │  │  ├─ lazy_wheel.py
│  │     │  │  │  ├─ session.py
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ xmlrpc.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ auth.cpython-313.pyc
│  │     │  │  │     ├─ cache.cpython-313.pyc
│  │     │  │  │     ├─ download.cpython-313.pyc
│  │     │  │  │     ├─ lazy_wheel.cpython-313.pyc
│  │     │  │  │     ├─ session.cpython-313.pyc
│  │     │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │     ├─ xmlrpc.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ operations
│  │     │  │  │  ├─ build
│  │     │  │  │  │  ├─ build_tracker.py
│  │     │  │  │  │  ├─ metadata.py
│  │     │  │  │  │  ├─ metadata_editable.py
│  │     │  │  │  │  ├─ metadata_legacy.py
│  │     │  │  │  │  ├─ wheel.py
│  │     │  │  │  │  ├─ wheel_editable.py
│  │     │  │  │  │  ├─ wheel_legacy.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ build_tracker.cpython-313.pyc
│  │     │  │  │  │     ├─ metadata.cpython-313.pyc
│  │     │  │  │  │     ├─ metadata_editable.cpython-313.pyc
│  │     │  │  │  │     ├─ metadata_legacy.cpython-313.pyc
│  │     │  │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │  │     ├─ wheel_editable.cpython-313.pyc
│  │     │  │  │  │     ├─ wheel_legacy.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ check.py
│  │     │  │  │  ├─ freeze.py
│  │     │  │  │  ├─ install
│  │     │  │  │  │  ├─ editable_legacy.py
│  │     │  │  │  │  ├─ wheel.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ editable_legacy.cpython-313.pyc
│  │     │  │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ prepare.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ check.cpython-313.pyc
│  │     │  │  │     ├─ freeze.cpython-313.pyc
│  │     │  │  │     ├─ prepare.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ pyproject.py
│  │     │  │  ├─ req
│  │     │  │  │  ├─ constructors.py
│  │     │  │  │  ├─ req_file.py
│  │     │  │  │  ├─ req_install.py
│  │     │  │  │  ├─ req_set.py
│  │     │  │  │  ├─ req_uninstall.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ constructors.cpython-313.pyc
│  │     │  │  │     ├─ req_file.cpython-313.pyc
│  │     │  │  │     ├─ req_install.cpython-313.pyc
│  │     │  │  │     ├─ req_set.cpython-313.pyc
│  │     │  │  │     ├─ req_uninstall.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ resolution
│  │     │  │  │  ├─ base.py
│  │     │  │  │  ├─ legacy
│  │     │  │  │  │  ├─ resolver.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ resolver.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ resolvelib
│  │     │  │  │  │  ├─ base.py
│  │     │  │  │  │  ├─ candidates.py
│  │     │  │  │  │  ├─ factory.py
│  │     │  │  │  │  ├─ found_candidates.py
│  │     │  │  │  │  ├─ provider.py
│  │     │  │  │  │  ├─ reporter.py
│  │     │  │  │  │  ├─ requirements.py
│  │     │  │  │  │  ├─ resolver.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │  │     ├─ candidates.cpython-313.pyc
│  │     │  │  │  │     ├─ factory.cpython-313.pyc
│  │     │  │  │  │     ├─ found_candidates.cpython-313.pyc
│  │     │  │  │  │     ├─ provider.cpython-313.pyc
│  │     │  │  │  │     ├─ reporter.cpython-313.pyc
│  │     │  │  │  │     ├─ requirements.cpython-313.pyc
│  │     │  │  │  │     ├─ resolver.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ self_outdated_check.py
│  │     │  │  ├─ utils
│  │     │  │  │  ├─ appdirs.py
│  │     │  │  │  ├─ compat.py
│  │     │  │  │  ├─ compatibility_tags.py
│  │     │  │  │  ├─ datetime.py
│  │     │  │  │  ├─ deprecation.py
│  │     │  │  │  ├─ direct_url_helpers.py
│  │     │  │  │  ├─ egg_link.py
│  │     │  │  │  ├─ encoding.py
│  │     │  │  │  ├─ entrypoints.py
│  │     │  │  │  ├─ filesystem.py
│  │     │  │  │  ├─ filetypes.py
│  │     │  │  │  ├─ glibc.py
│  │     │  │  │  ├─ hashes.py
│  │     │  │  │  ├─ logging.py
│  │     │  │  │  ├─ misc.py
│  │     │  │  │  ├─ packaging.py
│  │     │  │  │  ├─ retry.py
│  │     │  │  │  ├─ setuptools_build.py
│  │     │  │  │  ├─ subprocess.py
│  │     │  │  │  ├─ temp_dir.py
│  │     │  │  │  ├─ unpacking.py
│  │     │  │  │  ├─ urls.py
│  │     │  │  │  ├─ virtualenv.py
│  │     │  │  │  ├─ wheel.py
│  │     │  │  │  ├─ _jaraco_text.py
│  │     │  │  │  ├─ _log.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ appdirs.cpython-313.pyc
│  │     │  │  │     ├─ compat.cpython-313.pyc
│  │     │  │  │     ├─ compatibility_tags.cpython-313.pyc
│  │     │  │  │     ├─ datetime.cpython-313.pyc
│  │     │  │  │     ├─ deprecation.cpython-313.pyc
│  │     │  │  │     ├─ direct_url_helpers.cpython-313.pyc
│  │     │  │  │     ├─ egg_link.cpython-313.pyc
│  │     │  │  │     ├─ encoding.cpython-313.pyc
│  │     │  │  │     ├─ entrypoints.cpython-313.pyc
│  │     │  │  │     ├─ filesystem.cpython-313.pyc
│  │     │  │  │     ├─ filetypes.cpython-313.pyc
│  │     │  │  │     ├─ glibc.cpython-313.pyc
│  │     │  │  │     ├─ hashes.cpython-313.pyc
│  │     │  │  │     ├─ logging.cpython-313.pyc
│  │     │  │  │     ├─ misc.cpython-313.pyc
│  │     │  │  │     ├─ packaging.cpython-313.pyc
│  │     │  │  │     ├─ retry.cpython-313.pyc
│  │     │  │  │     ├─ setuptools_build.cpython-313.pyc
│  │     │  │  │     ├─ subprocess.cpython-313.pyc
│  │     │  │  │     ├─ temp_dir.cpython-313.pyc
│  │     │  │  │     ├─ unpacking.cpython-313.pyc
│  │     │  │  │     ├─ urls.cpython-313.pyc
│  │     │  │  │     ├─ virtualenv.cpython-313.pyc
│  │     │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │     ├─ _jaraco_text.cpython-313.pyc
│  │     │  │  │     ├─ _log.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ vcs
│  │     │  │  │  ├─ bazaar.py
│  │     │  │  │  ├─ git.py
│  │     │  │  │  ├─ mercurial.py
│  │     │  │  │  ├─ subversion.py
│  │     │  │  │  ├─ versioncontrol.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ bazaar.cpython-313.pyc
│  │     │  │  │     ├─ git.cpython-313.pyc
│  │     │  │  │     ├─ mercurial.cpython-313.pyc
│  │     │  │  │     ├─ subversion.cpython-313.pyc
│  │     │  │  │     ├─ versioncontrol.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ wheel_builder.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ build_env.cpython-313.pyc
│  │     │  │     ├─ cache.cpython-313.pyc
│  │     │  │     ├─ configuration.cpython-313.pyc
│  │     │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │     ├─ main.cpython-313.pyc
│  │     │  │     ├─ pyproject.cpython-313.pyc
│  │     │  │     ├─ self_outdated_check.cpython-313.pyc
│  │     │  │     ├─ wheel_builder.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _vendor
│  │     │  │  ├─ cachecontrol
│  │     │  │  │  ├─ adapter.py
│  │     │  │  │  ├─ cache.py
│  │     │  │  │  ├─ caches
│  │     │  │  │  │  ├─ file_cache.py
│  │     │  │  │  │  ├─ redis_cache.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ file_cache.cpython-313.pyc
│  │     │  │  │  │     ├─ redis_cache.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ controller.py
│  │     │  │  │  ├─ filewrapper.py
│  │     │  │  │  ├─ heuristics.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ serialize.py
│  │     │  │  │  ├─ wrapper.py
│  │     │  │  │  ├─ _cmd.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ adapter.cpython-313.pyc
│  │     │  │  │     ├─ cache.cpython-313.pyc
│  │     │  │  │     ├─ controller.cpython-313.pyc
│  │     │  │  │     ├─ filewrapper.cpython-313.pyc
│  │     │  │  │     ├─ heuristics.cpython-313.pyc
│  │     │  │  │     ├─ serialize.cpython-313.pyc
│  │     │  │  │     ├─ wrapper.cpython-313.pyc
│  │     │  │  │     ├─ _cmd.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ certifi
│  │     │  │  │  ├─ cacert.pem
│  │     │  │  │  ├─ core.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __main__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ core.cpython-313.pyc
│  │     │  │  │     ├─ __init__.cpython-313.pyc
│  │     │  │  │     └─ __main__.cpython-313.pyc
│  │     │  │  ├─ distlib
│  │     │  │  │  ├─ compat.py
│  │     │  │  │  ├─ database.py
│  │     │  │  │  ├─ index.py
│  │     │  │  │  ├─ locators.py
│  │     │  │  │  ├─ manifest.py
│  │     │  │  │  ├─ markers.py
│  │     │  │  │  ├─ metadata.py
│  │     │  │  │  ├─ resources.py
│  │     │  │  │  ├─ scripts.py
│  │     │  │  │  ├─ t32.exe
│  │     │  │  │  ├─ t64-arm.exe
│  │     │  │  │  ├─ t64.exe
│  │     │  │  │  ├─ util.py
│  │     │  │  │  ├─ version.py
│  │     │  │  │  ├─ w32.exe
│  │     │  │  │  ├─ w64-arm.exe
│  │     │  │  │  ├─ w64.exe
│  │     │  │  │  ├─ wheel.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ compat.cpython-313.pyc
│  │     │  │  │     ├─ database.cpython-313.pyc
│  │     │  │  │     ├─ index.cpython-313.pyc
│  │     │  │  │     ├─ locators.cpython-313.pyc
│  │     │  │  │     ├─ manifest.cpython-313.pyc
│  │     │  │  │     ├─ markers.cpython-313.pyc
│  │     │  │  │     ├─ metadata.cpython-313.pyc
│  │     │  │  │     ├─ resources.cpython-313.pyc
│  │     │  │  │     ├─ scripts.cpython-313.pyc
│  │     │  │  │     ├─ util.cpython-313.pyc
│  │     │  │  │     ├─ version.cpython-313.pyc
│  │     │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ distro
│  │     │  │  │  ├─ distro.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __main__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ distro.cpython-313.pyc
│  │     │  │  │     ├─ __init__.cpython-313.pyc
│  │     │  │  │     └─ __main__.cpython-313.pyc
│  │     │  │  ├─ idna
│  │     │  │  │  ├─ codec.py
│  │     │  │  │  ├─ compat.py
│  │     │  │  │  ├─ core.py
│  │     │  │  │  ├─ idnadata.py
│  │     │  │  │  ├─ intranges.py
│  │     │  │  │  ├─ package_data.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ uts46data.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ codec.cpython-313.pyc
│  │     │  │  │     ├─ compat.cpython-313.pyc
│  │     │  │  │     ├─ core.cpython-313.pyc
│  │     │  │  │     ├─ idnadata.cpython-313.pyc
│  │     │  │  │     ├─ intranges.cpython-313.pyc
│  │     │  │  │     ├─ package_data.cpython-313.pyc
│  │     │  │  │     ├─ uts46data.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ msgpack
│  │     │  │  │  ├─ exceptions.py
│  │     │  │  │  ├─ ext.py
│  │     │  │  │  ├─ fallback.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │  │     ├─ ext.cpython-313.pyc
│  │     │  │  │     ├─ fallback.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ packaging
│  │     │  │  │  ├─ markers.py
│  │     │  │  │  ├─ metadata.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ requirements.py
│  │     │  │  │  ├─ specifiers.py
│  │     │  │  │  ├─ tags.py
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ version.py
│  │     │  │  │  ├─ _elffile.py
│  │     │  │  │  ├─ _manylinux.py
│  │     │  │  │  ├─ _musllinux.py
│  │     │  │  │  ├─ _parser.py
│  │     │  │  │  ├─ _structures.py
│  │     │  │  │  ├─ _tokenizer.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ markers.cpython-313.pyc
│  │     │  │  │     ├─ metadata.cpython-313.pyc
│  │     │  │  │     ├─ requirements.cpython-313.pyc
│  │     │  │  │     ├─ specifiers.cpython-313.pyc
│  │     │  │  │     ├─ tags.cpython-313.pyc
│  │     │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │     ├─ version.cpython-313.pyc
│  │     │  │  │     ├─ _elffile.cpython-313.pyc
│  │     │  │  │     ├─ _manylinux.cpython-313.pyc
│  │     │  │  │     ├─ _musllinux.cpython-313.pyc
│  │     │  │  │     ├─ _parser.cpython-313.pyc
│  │     │  │  │     ├─ _structures.cpython-313.pyc
│  │     │  │  │     ├─ _tokenizer.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ pkg_resources
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ platformdirs
│  │     │  │  │  ├─ android.py
│  │     │  │  │  ├─ api.py
│  │     │  │  │  ├─ macos.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ unix.py
│  │     │  │  │  ├─ version.py
│  │     │  │  │  ├─ windows.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __main__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ android.cpython-313.pyc
│  │     │  │  │     ├─ api.cpython-313.pyc
│  │     │  │  │     ├─ macos.cpython-313.pyc
│  │     │  │  │     ├─ unix.cpython-313.pyc
│  │     │  │  │     ├─ version.cpython-313.pyc
│  │     │  │  │     ├─ windows.cpython-313.pyc
│  │     │  │  │     ├─ __init__.cpython-313.pyc
│  │     │  │  │     └─ __main__.cpython-313.pyc
│  │     │  │  ├─ pygments
│  │     │  │  │  ├─ cmdline.py
│  │     │  │  │  ├─ console.py
│  │     │  │  │  ├─ filter.py
│  │     │  │  │  ├─ filters
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ formatter.py
│  │     │  │  │  ├─ formatters
│  │     │  │  │  │  ├─ bbcode.py
│  │     │  │  │  │  ├─ groff.py
│  │     │  │  │  │  ├─ html.py
│  │     │  │  │  │  ├─ img.py
│  │     │  │  │  │  ├─ irc.py
│  │     │  │  │  │  ├─ latex.py
│  │     │  │  │  │  ├─ other.py
│  │     │  │  │  │  ├─ pangomarkup.py
│  │     │  │  │  │  ├─ rtf.py
│  │     │  │  │  │  ├─ svg.py
│  │     │  │  │  │  ├─ terminal.py
│  │     │  │  │  │  ├─ terminal256.py
│  │     │  │  │  │  ├─ _mapping.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ bbcode.cpython-313.pyc
│  │     │  │  │  │     ├─ groff.cpython-313.pyc
│  │     │  │  │  │     ├─ html.cpython-313.pyc
│  │     │  │  │  │     ├─ img.cpython-313.pyc
│  │     │  │  │  │     ├─ irc.cpython-313.pyc
│  │     │  │  │  │     ├─ latex.cpython-313.pyc
│  │     │  │  │  │     ├─ other.cpython-313.pyc
│  │     │  │  │  │     ├─ pangomarkup.cpython-313.pyc
│  │     │  │  │  │     ├─ rtf.cpython-313.pyc
│  │     │  │  │  │     ├─ svg.cpython-313.pyc
│  │     │  │  │  │     ├─ terminal.cpython-313.pyc
│  │     │  │  │  │     ├─ terminal256.cpython-313.pyc
│  │     │  │  │  │     ├─ _mapping.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ lexer.py
│  │     │  │  │  ├─ lexers
│  │     │  │  │  │  ├─ python.py
│  │     │  │  │  │  ├─ _mapping.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ python.cpython-313.pyc
│  │     │  │  │  │     ├─ _mapping.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ modeline.py
│  │     │  │  │  ├─ plugin.py
│  │     │  │  │  ├─ regexopt.py
│  │     │  │  │  ├─ scanner.py
│  │     │  │  │  ├─ sphinxext.py
│  │     │  │  │  ├─ style.py
│  │     │  │  │  ├─ styles
│  │     │  │  │  │  ├─ _mapping.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _mapping.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ token.py
│  │     │  │  │  ├─ unistring.py
│  │     │  │  │  ├─ util.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __main__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ cmdline.cpython-313.pyc
│  │     │  │  │     ├─ console.cpython-313.pyc
│  │     │  │  │     ├─ filter.cpython-313.pyc
│  │     │  │  │     ├─ formatter.cpython-313.pyc
│  │     │  │  │     ├─ lexer.cpython-313.pyc
│  │     │  │  │     ├─ modeline.cpython-313.pyc
│  │     │  │  │     ├─ plugin.cpython-313.pyc
│  │     │  │  │     ├─ regexopt.cpython-313.pyc
│  │     │  │  │     ├─ scanner.cpython-313.pyc
│  │     │  │  │     ├─ sphinxext.cpython-313.pyc
│  │     │  │  │     ├─ style.cpython-313.pyc
│  │     │  │  │     ├─ token.cpython-313.pyc
│  │     │  │  │     ├─ unistring.cpython-313.pyc
│  │     │  │  │     ├─ util.cpython-313.pyc
│  │     │  │  │     ├─ __init__.cpython-313.pyc
│  │     │  │  │     └─ __main__.cpython-313.pyc
│  │     │  │  ├─ pyproject_hooks
│  │     │  │  │  ├─ _compat.py
│  │     │  │  │  ├─ _impl.py
│  │     │  │  │  ├─ _in_process
│  │     │  │  │  │  ├─ _in_process.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _in_process.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _compat.cpython-313.pyc
│  │     │  │  │     ├─ _impl.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ requests
│  │     │  │  │  ├─ adapters.py
│  │     │  │  │  ├─ api.py
│  │     │  │  │  ├─ auth.py
│  │     │  │  │  ├─ certs.py
│  │     │  │  │  ├─ compat.py
│  │     │  │  │  ├─ cookies.py
│  │     │  │  │  ├─ exceptions.py
│  │     │  │  │  ├─ help.py
│  │     │  │  │  ├─ hooks.py
│  │     │  │  │  ├─ models.py
│  │     │  │  │  ├─ packages.py
│  │     │  │  │  ├─ sessions.py
│  │     │  │  │  ├─ status_codes.py
│  │     │  │  │  ├─ structures.py
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ _internal_utils.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __pycache__
│  │     │  │  │  │  ├─ adapters.cpython-313.pyc
│  │     │  │  │  │  ├─ api.cpython-313.pyc
│  │     │  │  │  │  ├─ auth.cpython-313.pyc
│  │     │  │  │  │  ├─ certs.cpython-313.pyc
│  │     │  │  │  │  ├─ compat.cpython-313.pyc
│  │     │  │  │  │  ├─ cookies.cpython-313.pyc
│  │     │  │  │  │  ├─ exceptions.cpython-313.pyc
│  │     │  │  │  │  ├─ help.cpython-313.pyc
│  │     │  │  │  │  ├─ hooks.cpython-313.pyc
│  │     │  │  │  │  ├─ models.cpython-313.pyc
│  │     │  │  │  │  ├─ packages.cpython-313.pyc
│  │     │  │  │  │  ├─ sessions.cpython-313.pyc
│  │     │  │  │  │  ├─ status_codes.cpython-313.pyc
│  │     │  │  │  │  ├─ structures.cpython-313.pyc
│  │     │  │  │  │  ├─ utils.cpython-313.pyc
│  │     │  │  │  │  ├─ _internal_utils.cpython-313.pyc
│  │     │  │  │  │  ├─ __init__.cpython-313.pyc
│  │     │  │  │  │  └─ __version__.cpython-313.pyc
│  │     │  │  │  └─ __version__.py
│  │     │  │  ├─ resolvelib
│  │     │  │  │  ├─ compat
│  │     │  │  │  │  ├─ collections_abc.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ collections_abc.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ providers.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ reporters.py
│  │     │  │  │  ├─ resolvers.py
│  │     │  │  │  ├─ structs.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ providers.cpython-313.pyc
│  │     │  │  │     ├─ reporters.cpython-313.pyc
│  │     │  │  │     ├─ resolvers.cpython-313.pyc
│  │     │  │  │     ├─ structs.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ rich
│  │     │  │  │  ├─ abc.py
│  │     │  │  │  ├─ align.py
│  │     │  │  │  ├─ ansi.py
│  │     │  │  │  ├─ bar.py
│  │     │  │  │  ├─ box.py
│  │     │  │  │  ├─ cells.py
│  │     │  │  │  ├─ color.py
│  │     │  │  │  ├─ color_triplet.py
│  │     │  │  │  ├─ columns.py
│  │     │  │  │  ├─ console.py
│  │     │  │  │  ├─ constrain.py
│  │     │  │  │  ├─ containers.py
│  │     │  │  │  ├─ control.py
│  │     │  │  │  ├─ default_styles.py
│  │     │  │  │  ├─ diagnose.py
│  │     │  │  │  ├─ emoji.py
│  │     │  │  │  ├─ errors.py
│  │     │  │  │  ├─ filesize.py
│  │     │  │  │  ├─ file_proxy.py
│  │     │  │  │  ├─ highlighter.py
│  │     │  │  │  ├─ json.py
│  │     │  │  │  ├─ jupyter.py
│  │     │  │  │  ├─ layout.py
│  │     │  │  │  ├─ live.py
│  │     │  │  │  ├─ live_render.py
│  │     │  │  │  ├─ logging.py
│  │     │  │  │  ├─ markup.py
│  │     │  │  │  ├─ measure.py
│  │     │  │  │  ├─ padding.py
│  │     │  │  │  ├─ pager.py
│  │     │  │  │  ├─ palette.py
│  │     │  │  │  ├─ panel.py
│  │     │  │  │  ├─ pretty.py
│  │     │  │  │  ├─ progress.py
│  │     │  │  │  ├─ progress_bar.py
│  │     │  │  │  ├─ prompt.py
│  │     │  │  │  ├─ protocol.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ region.py
│  │     │  │  │  ├─ repr.py
│  │     │  │  │  ├─ rule.py
│  │     │  │  │  ├─ scope.py
│  │     │  │  │  ├─ screen.py
│  │     │  │  │  ├─ segment.py
│  │     │  │  │  ├─ spinner.py
│  │     │  │  │  ├─ status.py
│  │     │  │  │  ├─ style.py
│  │     │  │  │  ├─ styled.py
│  │     │  │  │  ├─ syntax.py
│  │     │  │  │  ├─ table.py
│  │     │  │  │  ├─ terminal_theme.py
│  │     │  │  │  ├─ text.py
│  │     │  │  │  ├─ theme.py
│  │     │  │  │  ├─ themes.py
│  │     │  │  │  ├─ traceback.py
│  │     │  │  │  ├─ tree.py
│  │     │  │  │  ├─ _cell_widths.py
│  │     │  │  │  ├─ _emoji_codes.py
│  │     │  │  │  ├─ _emoji_replace.py
│  │     │  │  │  ├─ _export_format.py
│  │     │  │  │  ├─ _extension.py
│  │     │  │  │  ├─ _fileno.py
│  │     │  │  │  ├─ _inspect.py
│  │     │  │  │  ├─ _log_render.py
│  │     │  │  │  ├─ _loop.py
│  │     │  │  │  ├─ _null_file.py
│  │     │  │  │  ├─ _palettes.py
│  │     │  │  │  ├─ _pick.py
│  │     │  │  │  ├─ _ratio.py
│  │     │  │  │  ├─ _spinners.py
│  │     │  │  │  ├─ _stack.py
│  │     │  │  │  ├─ _timer.py
│  │     │  │  │  ├─ _win32_console.py
│  │     │  │  │  ├─ _windows.py
│  │     │  │  │  ├─ _windows_renderer.py
│  │     │  │  │  ├─ _wrap.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __main__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ abc.cpython-313.pyc
│  │     │  │  │     ├─ align.cpython-313.pyc
│  │     │  │  │     ├─ ansi.cpython-313.pyc
│  │     │  │  │     ├─ bar.cpython-313.pyc
│  │     │  │  │     ├─ box.cpython-313.pyc
│  │     │  │  │     ├─ cells.cpython-313.pyc
│  │     │  │  │     ├─ color.cpython-313.pyc
│  │     │  │  │     ├─ color_triplet.cpython-313.pyc
│  │     │  │  │     ├─ columns.cpython-313.pyc
│  │     │  │  │     ├─ console.cpython-313.pyc
│  │     │  │  │     ├─ constrain.cpython-313.pyc
│  │     │  │  │     ├─ containers.cpython-313.pyc
│  │     │  │  │     ├─ control.cpython-313.pyc
│  │     │  │  │     ├─ default_styles.cpython-313.pyc
│  │     │  │  │     ├─ diagnose.cpython-313.pyc
│  │     │  │  │     ├─ emoji.cpython-313.pyc
│  │     │  │  │     ├─ errors.cpython-313.pyc
│  │     │  │  │     ├─ filesize.cpython-313.pyc
│  │     │  │  │     ├─ file_proxy.cpython-313.pyc
│  │     │  │  │     ├─ highlighter.cpython-313.pyc
│  │     │  │  │     ├─ json.cpython-313.pyc
│  │     │  │  │     ├─ jupyter.cpython-313.pyc
│  │     │  │  │     ├─ layout.cpython-313.pyc
│  │     │  │  │     ├─ live.cpython-313.pyc
│  │     │  │  │     ├─ live_render.cpython-313.pyc
│  │     │  │  │     ├─ logging.cpython-313.pyc
│  │     │  │  │     ├─ markup.cpython-313.pyc
│  │     │  │  │     ├─ measure.cpython-313.pyc
│  │     │  │  │     ├─ padding.cpython-313.pyc
│  │     │  │  │     ├─ pager.cpython-313.pyc
│  │     │  │  │     ├─ palette.cpython-313.pyc
│  │     │  │  │     ├─ panel.cpython-313.pyc
│  │     │  │  │     ├─ pretty.cpython-313.pyc
│  │     │  │  │     ├─ progress.cpython-313.pyc
│  │     │  │  │     ├─ progress_bar.cpython-313.pyc
│  │     │  │  │     ├─ prompt.cpython-313.pyc
│  │     │  │  │     ├─ protocol.cpython-313.pyc
│  │     │  │  │     ├─ region.cpython-313.pyc
│  │     │  │  │     ├─ repr.cpython-313.pyc
│  │     │  │  │     ├─ rule.cpython-313.pyc
│  │     │  │  │     ├─ scope.cpython-313.pyc
│  │     │  │  │     ├─ screen.cpython-313.pyc
│  │     │  │  │     ├─ segment.cpython-313.pyc
│  │     │  │  │     ├─ spinner.cpython-313.pyc
│  │     │  │  │     ├─ status.cpython-313.pyc
│  │     │  │  │     ├─ style.cpython-313.pyc
│  │     │  │  │     ├─ styled.cpython-313.pyc
│  │     │  │  │     ├─ syntax.cpython-313.pyc
│  │     │  │  │     ├─ table.cpython-313.pyc
│  │     │  │  │     ├─ terminal_theme.cpython-313.pyc
│  │     │  │  │     ├─ text.cpython-313.pyc
│  │     │  │  │     ├─ theme.cpython-313.pyc
│  │     │  │  │     ├─ themes.cpython-313.pyc
│  │     │  │  │     ├─ traceback.cpython-313.pyc
│  │     │  │  │     ├─ tree.cpython-313.pyc
│  │     │  │  │     ├─ _cell_widths.cpython-313.pyc
│  │     │  │  │     ├─ _emoji_codes.cpython-313.pyc
│  │     │  │  │     ├─ _emoji_replace.cpython-313.pyc
│  │     │  │  │     ├─ _export_format.cpython-313.pyc
│  │     │  │  │     ├─ _extension.cpython-313.pyc
│  │     │  │  │     ├─ _fileno.cpython-313.pyc
│  │     │  │  │     ├─ _inspect.cpython-313.pyc
│  │     │  │  │     ├─ _log_render.cpython-313.pyc
│  │     │  │  │     ├─ _loop.cpython-313.pyc
│  │     │  │  │     ├─ _null_file.cpython-313.pyc
│  │     │  │  │     ├─ _palettes.cpython-313.pyc
│  │     │  │  │     ├─ _pick.cpython-313.pyc
│  │     │  │  │     ├─ _ratio.cpython-313.pyc
│  │     │  │  │     ├─ _spinners.cpython-313.pyc
│  │     │  │  │     ├─ _stack.cpython-313.pyc
│  │     │  │  │     ├─ _timer.cpython-313.pyc
│  │     │  │  │     ├─ _win32_console.cpython-313.pyc
│  │     │  │  │     ├─ _windows.cpython-313.pyc
│  │     │  │  │     ├─ _windows_renderer.cpython-313.pyc
│  │     │  │  │     ├─ _wrap.cpython-313.pyc
│  │     │  │  │     ├─ __init__.cpython-313.pyc
│  │     │  │  │     └─ __main__.cpython-313.pyc
│  │     │  │  ├─ tomli
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ _parser.py
│  │     │  │  │  ├─ _re.py
│  │     │  │  │  ├─ _types.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _parser.cpython-313.pyc
│  │     │  │  │     ├─ _re.cpython-313.pyc
│  │     │  │  │     ├─ _types.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ truststore
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ _api.py
│  │     │  │  │  ├─ _macos.py
│  │     │  │  │  ├─ _openssl.py
│  │     │  │  │  ├─ _ssl_constants.py
│  │     │  │  │  ├─ _windows.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _api.cpython-313.pyc
│  │     │  │  │     ├─ _macos.cpython-313.pyc
│  │     │  │  │     ├─ _openssl.cpython-313.pyc
│  │     │  │  │     ├─ _ssl_constants.cpython-313.pyc
│  │     │  │  │     ├─ _windows.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ typing_extensions.py
│  │     │  │  ├─ urllib3
│  │     │  │  │  ├─ connection.py
│  │     │  │  │  ├─ connectionpool.py
│  │     │  │  │  ├─ contrib
│  │     │  │  │  │  ├─ appengine.py
│  │     │  │  │  │  ├─ ntlmpool.py
│  │     │  │  │  │  ├─ pyopenssl.py
│  │     │  │  │  │  ├─ securetransport.py
│  │     │  │  │  │  ├─ socks.py
│  │     │  │  │  │  ├─ _appengine_environ.py
│  │     │  │  │  │  ├─ _securetransport
│  │     │  │  │  │  │  ├─ bindings.py
│  │     │  │  │  │  │  ├─ low_level.py
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ bindings.cpython-313.pyc
│  │     │  │  │  │  │     ├─ low_level.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ appengine.cpython-313.pyc
│  │     │  │  │  │     ├─ ntlmpool.cpython-313.pyc
│  │     │  │  │  │     ├─ pyopenssl.cpython-313.pyc
│  │     │  │  │  │     ├─ securetransport.cpython-313.pyc
│  │     │  │  │  │     ├─ socks.cpython-313.pyc
│  │     │  │  │  │     ├─ _appengine_environ.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ exceptions.py
│  │     │  │  │  ├─ fields.py
│  │     │  │  │  ├─ filepost.py
│  │     │  │  │  ├─ packages
│  │     │  │  │  │  ├─ backports
│  │     │  │  │  │  │  ├─ makefile.py
│  │     │  │  │  │  │  ├─ weakref_finalize.py
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ makefile.cpython-313.pyc
│  │     │  │  │  │  │     ├─ weakref_finalize.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ six.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ six.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ poolmanager.py
│  │     │  │  │  ├─ request.py
│  │     │  │  │  ├─ response.py
│  │     │  │  │  ├─ util
│  │     │  │  │  │  ├─ connection.py
│  │     │  │  │  │  ├─ proxy.py
│  │     │  │  │  │  ├─ queue.py
│  │     │  │  │  │  ├─ request.py
│  │     │  │  │  │  ├─ response.py
│  │     │  │  │  │  ├─ retry.py
│  │     │  │  │  │  ├─ ssltransport.py
│  │     │  │  │  │  ├─ ssl_.py
│  │     │  │  │  │  ├─ ssl_match_hostname.py
│  │     │  │  │  │  ├─ timeout.py
│  │     │  │  │  │  ├─ url.py
│  │     │  │  │  │  ├─ wait.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ connection.cpython-313.pyc
│  │     │  │  │  │     ├─ proxy.cpython-313.pyc
│  │     │  │  │  │     ├─ queue.cpython-313.pyc
│  │     │  │  │  │     ├─ request.cpython-313.pyc
│  │     │  │  │  │     ├─ response.cpython-313.pyc
│  │     │  │  │  │     ├─ retry.cpython-313.pyc
│  │     │  │  │  │     ├─ ssltransport.cpython-313.pyc
│  │     │  │  │  │     ├─ ssl_.cpython-313.pyc
│  │     │  │  │  │     ├─ ssl_match_hostname.cpython-313.pyc
│  │     │  │  │  │     ├─ timeout.cpython-313.pyc
│  │     │  │  │  │     ├─ url.cpython-313.pyc
│  │     │  │  │  │     ├─ wait.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _collections.py
│  │     │  │  │  ├─ _version.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ connection.cpython-313.pyc
│  │     │  │  │     ├─ connectionpool.cpython-313.pyc
│  │     │  │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │  │     ├─ fields.cpython-313.pyc
│  │     │  │  │     ├─ filepost.cpython-313.pyc
│  │     │  │  │     ├─ poolmanager.cpython-313.pyc
│  │     │  │  │     ├─ request.cpython-313.pyc
│  │     │  │  │     ├─ response.cpython-313.pyc
│  │     │  │  │     ├─ _collections.cpython-313.pyc
│  │     │  │  │     ├─ _version.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ vendor.txt
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ typing_extensions.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  ├─ __pip-runner__.py
│  │     │  └─ __pycache__
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     ├─ __main__.cpython-313.pyc
│  │     │     └─ __pip-runner__.cpython-313.pyc
│  │     ├─ pip-24.3.1.dist-info
│  │     │  ├─ AUTHORS.txt
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE.txt
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ platformdirs
│  │     │  ├─ android.py
│  │     │  ├─ api.py
│  │     │  ├─ macos.py
│  │     │  ├─ py.typed
│  │     │  ├─ unix.py
│  │     │  ├─ version.py
│  │     │  ├─ windows.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ android.cpython-313.pyc
│  │     │     ├─ api.cpython-313.pyc
│  │     │     ├─ macos.cpython-313.pyc
│  │     │     ├─ unix.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ windows.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ platformdirs-4.3.6.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ pluggy
│  │     │  ├─ py.typed
│  │     │  ├─ _callers.py
│  │     │  ├─ _hooks.py
│  │     │  ├─ _manager.py
│  │     │  ├─ _result.py
│  │     │  ├─ _tracing.py
│  │     │  ├─ _version.py
│  │     │  ├─ _warnings.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ _callers.cpython-313.pyc
│  │     │     ├─ _hooks.cpython-313.pyc
│  │     │     ├─ _manager.cpython-313.pyc
│  │     │     ├─ _result.cpython-313.pyc
│  │     │     ├─ _tracing.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     ├─ _warnings.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pluggy-1.5.0.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ py.py
│  │     ├─ pydantic
│  │     │  ├─ aliases.py
│  │     │  ├─ alias_generators.py
│  │     │  ├─ annotated_handlers.py
│  │     │  ├─ class_validators.py
│  │     │  ├─ color.py
│  │     │  ├─ config.py
│  │     │  ├─ dataclasses.py
│  │     │  ├─ datetime_parse.py
│  │     │  ├─ decorator.py
│  │     │  ├─ deprecated
│  │     │  │  ├─ class_validators.py
│  │     │  │  ├─ config.py
│  │     │  │  ├─ copy_internals.py
│  │     │  │  ├─ decorator.py
│  │     │  │  ├─ json.py
│  │     │  │  ├─ parse.py
│  │     │  │  ├─ tools.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ class_validators.cpython-313.pyc
│  │     │  │     ├─ config.cpython-313.pyc
│  │     │  │     ├─ copy_internals.cpython-313.pyc
│  │     │  │     ├─ decorator.cpython-313.pyc
│  │     │  │     ├─ json.cpython-313.pyc
│  │     │  │     ├─ parse.cpython-313.pyc
│  │     │  │     ├─ tools.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ env_settings.py
│  │     │  ├─ errors.py
│  │     │  ├─ error_wrappers.py
│  │     │  ├─ experimental
│  │     │  │  ├─ pipeline.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ pipeline.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ fields.py
│  │     │  ├─ functional_serializers.py
│  │     │  ├─ functional_validators.py
│  │     │  ├─ generics.py
│  │     │  ├─ json.py
│  │     │  ├─ json_schema.py
│  │     │  ├─ main.py
│  │     │  ├─ mypy.py
│  │     │  ├─ networks.py
│  │     │  ├─ parse.py
│  │     │  ├─ plugin
│  │     │  │  ├─ _loader.py
│  │     │  │  ├─ _schema_validator.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _loader.cpython-313.pyc
│  │     │  │     ├─ _schema_validator.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ root_model.py
│  │     │  ├─ schema.py
│  │     │  ├─ tools.py
│  │     │  ├─ types.py
│  │     │  ├─ type_adapter.py
│  │     │  ├─ typing.py
│  │     │  ├─ utils.py
│  │     │  ├─ v1
│  │     │  │  ├─ annotated_types.py
│  │     │  │  ├─ class_validators.py
│  │     │  │  ├─ color.py
│  │     │  │  ├─ config.py
│  │     │  │  ├─ dataclasses.py
│  │     │  │  ├─ datetime_parse.py
│  │     │  │  ├─ decorator.py
│  │     │  │  ├─ env_settings.py
│  │     │  │  ├─ errors.py
│  │     │  │  ├─ error_wrappers.py
│  │     │  │  ├─ fields.py
│  │     │  │  ├─ generics.py
│  │     │  │  ├─ json.py
│  │     │  │  ├─ main.py
│  │     │  │  ├─ mypy.py
│  │     │  │  ├─ networks.py
│  │     │  │  ├─ parse.py
│  │     │  │  ├─ py.typed
│  │     │  │  ├─ schema.py
│  │     │  │  ├─ tools.py
│  │     │  │  ├─ types.py
│  │     │  │  ├─ typing.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ validators.py
│  │     │  │  ├─ version.py
│  │     │  │  ├─ _hypothesis_plugin.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ annotated_types.cpython-313.pyc
│  │     │  │     ├─ class_validators.cpython-313.pyc
│  │     │  │     ├─ color.cpython-313.pyc
│  │     │  │     ├─ config.cpython-313.pyc
│  │     │  │     ├─ dataclasses.cpython-313.pyc
│  │     │  │     ├─ datetime_parse.cpython-313.pyc
│  │     │  │     ├─ decorator.cpython-313.pyc
│  │     │  │     ├─ env_settings.cpython-313.pyc
│  │     │  │     ├─ errors.cpython-313.pyc
│  │     │  │     ├─ error_wrappers.cpython-313.pyc
│  │     │  │     ├─ fields.cpython-313.pyc
│  │     │  │     ├─ generics.cpython-313.pyc
│  │     │  │     ├─ json.cpython-313.pyc
│  │     │  │     ├─ main.cpython-313.pyc
│  │     │  │     ├─ mypy.cpython-313.pyc
│  │     │  │     ├─ networks.cpython-313.pyc
│  │     │  │     ├─ parse.cpython-313.pyc
│  │     │  │     ├─ schema.cpython-313.pyc
│  │     │  │     ├─ tools.cpython-313.pyc
│  │     │  │     ├─ types.cpython-313.pyc
│  │     │  │     ├─ typing.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ validators.cpython-313.pyc
│  │     │  │     ├─ version.cpython-313.pyc
│  │     │  │     ├─ _hypothesis_plugin.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ validate_call_decorator.py
│  │     │  ├─ validators.py
│  │     │  ├─ version.py
│  │     │  ├─ warnings.py
│  │     │  ├─ _internal
│  │     │  │  ├─ _config.py
│  │     │  │  ├─ _core_metadata.py
│  │     │  │  ├─ _core_utils.py
│  │     │  │  ├─ _dataclasses.py
│  │     │  │  ├─ _decorators.py
│  │     │  │  ├─ _decorators_v1.py
│  │     │  │  ├─ _discriminated_union.py
│  │     │  │  ├─ _docs_extraction.py
│  │     │  │  ├─ _fields.py
│  │     │  │  ├─ _forward_ref.py
│  │     │  │  ├─ _generate_schema.py
│  │     │  │  ├─ _generics.py
│  │     │  │  ├─ _git.py
│  │     │  │  ├─ _import_utils.py
│  │     │  │  ├─ _internal_dataclass.py
│  │     │  │  ├─ _known_annotated_metadata.py
│  │     │  │  ├─ _mock_val_ser.py
│  │     │  │  ├─ _model_construction.py
│  │     │  │  ├─ _namespace_utils.py
│  │     │  │  ├─ _repr.py
│  │     │  │  ├─ _schema_generation_shared.py
│  │     │  │  ├─ _serializers.py
│  │     │  │  ├─ _signature.py
│  │     │  │  ├─ _std_types_schema.py
│  │     │  │  ├─ _typing_extra.py
│  │     │  │  ├─ _utils.py
│  │     │  │  ├─ _validate_call.py
│  │     │  │  ├─ _validators.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _config.cpython-313.pyc
│  │     │  │     ├─ _core_metadata.cpython-313.pyc
│  │     │  │     ├─ _core_utils.cpython-313.pyc
│  │     │  │     ├─ _dataclasses.cpython-313.pyc
│  │     │  │     ├─ _decorators.cpython-313.pyc
│  │     │  │     ├─ _decorators_v1.cpython-313.pyc
│  │     │  │     ├─ _discriminated_union.cpython-313.pyc
│  │     │  │     ├─ _docs_extraction.cpython-313.pyc
│  │     │  │     ├─ _fields.cpython-313.pyc
│  │     │  │     ├─ _forward_ref.cpython-313.pyc
│  │     │  │     ├─ _generate_schema.cpython-313.pyc
│  │     │  │     ├─ _generics.cpython-313.pyc
│  │     │  │     ├─ _git.cpython-313.pyc
│  │     │  │     ├─ _import_utils.cpython-313.pyc
│  │     │  │     ├─ _internal_dataclass.cpython-313.pyc
│  │     │  │     ├─ _known_annotated_metadata.cpython-313.pyc
│  │     │  │     ├─ _mock_val_ser.cpython-313.pyc
│  │     │  │     ├─ _model_construction.cpython-313.pyc
│  │     │  │     ├─ _namespace_utils.cpython-313.pyc
│  │     │  │     ├─ _repr.cpython-313.pyc
│  │     │  │     ├─ _schema_generation_shared.cpython-313.pyc
│  │     │  │     ├─ _serializers.cpython-313.pyc
│  │     │  │     ├─ _signature.cpython-313.pyc
│  │     │  │     ├─ _std_types_schema.cpython-313.pyc
│  │     │  │     ├─ _typing_extra.cpython-313.pyc
│  │     │  │     ├─ _utils.cpython-313.pyc
│  │     │  │     ├─ _validate_call.cpython-313.pyc
│  │     │  │     ├─ _validators.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _migration.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ aliases.cpython-313.pyc
│  │     │     ├─ alias_generators.cpython-313.pyc
│  │     │     ├─ annotated_handlers.cpython-313.pyc
│  │     │     ├─ class_validators.cpython-313.pyc
│  │     │     ├─ color.cpython-313.pyc
│  │     │     ├─ config.cpython-313.pyc
│  │     │     ├─ dataclasses.cpython-313.pyc
│  │     │     ├─ datetime_parse.cpython-313.pyc
│  │     │     ├─ decorator.cpython-313.pyc
│  │     │     ├─ env_settings.cpython-313.pyc
│  │     │     ├─ errors.cpython-313.pyc
│  │     │     ├─ error_wrappers.cpython-313.pyc
│  │     │     ├─ fields.cpython-313.pyc
│  │     │     ├─ functional_serializers.cpython-313.pyc
│  │     │     ├─ functional_validators.cpython-313.pyc
│  │     │     ├─ generics.cpython-313.pyc
│  │     │     ├─ json.cpython-313.pyc
│  │     │     ├─ json_schema.cpython-313.pyc
│  │     │     ├─ main.cpython-313.pyc
│  │     │     ├─ mypy.cpython-313.pyc
│  │     │     ├─ networks.cpython-313.pyc
│  │     │     ├─ parse.cpython-313.pyc
│  │     │     ├─ root_model.cpython-313.pyc
│  │     │     ├─ schema.cpython-313.pyc
│  │     │     ├─ tools.cpython-313.pyc
│  │     │     ├─ types.cpython-313.pyc
│  │     │     ├─ type_adapter.cpython-313.pyc
│  │     │     ├─ typing.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ validate_call_decorator.cpython-313.pyc
│  │     │     ├─ validators.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ warnings.cpython-313.pyc
│  │     │     ├─ _migration.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pydantic-2.10.6.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ pydantic_core
│  │     │  ├─ core_schema.py
│  │     │  ├─ py.typed
│  │     │  ├─ _pydantic_core.cp313-win_amd64.pyd
│  │     │  ├─ _pydantic_core.pyi
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ core_schema.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pydantic_core-2.27.2.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ pylint
│  │     │  ├─ checkers
│  │     │  │  ├─ async.py
│  │     │  │  ├─ bad_chained_comparison.py
│  │     │  │  ├─ base
│  │     │  │  │  ├─ basic_checker.py
│  │     │  │  │  ├─ basic_error_checker.py
│  │     │  │  │  ├─ comparison_checker.py
│  │     │  │  │  ├─ docstring_checker.py
│  │     │  │  │  ├─ function_checker.py
│  │     │  │  │  ├─ name_checker
│  │     │  │  │  │  ├─ checker.py
│  │     │  │  │  │  ├─ naming_style.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ checker.cpython-313.pyc
│  │     │  │  │  │     ├─ naming_style.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ pass_checker.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ basic_checker.cpython-313.pyc
│  │     │  │  │     ├─ basic_error_checker.cpython-313.pyc
│  │     │  │  │     ├─ comparison_checker.cpython-313.pyc
│  │     │  │  │     ├─ docstring_checker.cpython-313.pyc
│  │     │  │  │     ├─ function_checker.cpython-313.pyc
│  │     │  │  │     ├─ pass_checker.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ base_checker.py
│  │     │  │  ├─ classes
│  │     │  │  │  ├─ class_checker.py
│  │     │  │  │  ├─ special_methods_checker.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ class_checker.cpython-313.pyc
│  │     │  │  │     ├─ special_methods_checker.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ dataclass_checker.py
│  │     │  │  ├─ deprecated.py
│  │     │  │  ├─ design_analysis.py
│  │     │  │  ├─ dunder_methods.py
│  │     │  │  ├─ ellipsis_checker.py
│  │     │  │  ├─ exceptions.py
│  │     │  │  ├─ format.py
│  │     │  │  ├─ imports.py
│  │     │  │  ├─ lambda_expressions.py
│  │     │  │  ├─ logging.py
│  │     │  │  ├─ method_args.py
│  │     │  │  ├─ misc.py
│  │     │  │  ├─ modified_iterating_checker.py
│  │     │  │  ├─ nested_min_max.py
│  │     │  │  ├─ newstyle.py
│  │     │  │  ├─ non_ascii_names.py
│  │     │  │  ├─ raw_metrics.py
│  │     │  │  ├─ refactoring
│  │     │  │  │  ├─ implicit_booleaness_checker.py
│  │     │  │  │  ├─ not_checker.py
│  │     │  │  │  ├─ recommendation_checker.py
│  │     │  │  │  ├─ refactoring_checker.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ implicit_booleaness_checker.cpython-313.pyc
│  │     │  │  │     ├─ not_checker.cpython-313.pyc
│  │     │  │  │     ├─ recommendation_checker.cpython-313.pyc
│  │     │  │  │     ├─ refactoring_checker.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ spelling.py
│  │     │  │  ├─ stdlib.py
│  │     │  │  ├─ strings.py
│  │     │  │  ├─ symilar.py
│  │     │  │  ├─ threading_checker.py
│  │     │  │  ├─ typecheck.py
│  │     │  │  ├─ unicode.py
│  │     │  │  ├─ unsupported_version.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ variables.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ async.cpython-313.pyc
│  │     │  │     ├─ bad_chained_comparison.cpython-313.pyc
│  │     │  │     ├─ base_checker.cpython-313.pyc
│  │     │  │     ├─ dataclass_checker.cpython-313.pyc
│  │     │  │     ├─ deprecated.cpython-313.pyc
│  │     │  │     ├─ design_analysis.cpython-313.pyc
│  │     │  │     ├─ dunder_methods.cpython-313.pyc
│  │     │  │     ├─ ellipsis_checker.cpython-313.pyc
│  │     │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │     ├─ format.cpython-313.pyc
│  │     │  │     ├─ imports.cpython-313.pyc
│  │     │  │     ├─ lambda_expressions.cpython-313.pyc
│  │     │  │     ├─ logging.cpython-313.pyc
│  │     │  │     ├─ method_args.cpython-313.pyc
│  │     │  │     ├─ misc.cpython-313.pyc
│  │     │  │     ├─ modified_iterating_checker.cpython-313.pyc
│  │     │  │     ├─ nested_min_max.cpython-313.pyc
│  │     │  │     ├─ newstyle.cpython-313.pyc
│  │     │  │     ├─ non_ascii_names.cpython-313.pyc
│  │     │  │     ├─ raw_metrics.cpython-313.pyc
│  │     │  │     ├─ spelling.cpython-313.pyc
│  │     │  │     ├─ stdlib.cpython-313.pyc
│  │     │  │     ├─ strings.cpython-313.pyc
│  │     │  │     ├─ symilar.cpython-313.pyc
│  │     │  │     ├─ threading_checker.cpython-313.pyc
│  │     │  │     ├─ typecheck.cpython-313.pyc
│  │     │  │     ├─ unicode.cpython-313.pyc
│  │     │  │     ├─ unsupported_version.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ variables.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ config
│  │     │  │  ├─ argument.py
│  │     │  │  ├─ arguments_manager.py
│  │     │  │  ├─ arguments_provider.py
│  │     │  │  ├─ callback_actions.py
│  │     │  │  ├─ config_file_parser.py
│  │     │  │  ├─ config_initialization.py
│  │     │  │  ├─ deprecation_actions.py
│  │     │  │  ├─ exceptions.py
│  │     │  │  ├─ find_default_config_files.py
│  │     │  │  ├─ help_formatter.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ _breaking_changes.py
│  │     │  │  ├─ _pylint_config
│  │     │  │  │  ├─ generate_command.py
│  │     │  │  │  ├─ help_message.py
│  │     │  │  │  ├─ main.py
│  │     │  │  │  ├─ setup.py
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ generate_command.cpython-313.pyc
│  │     │  │  │     ├─ help_message.cpython-313.pyc
│  │     │  │  │     ├─ main.cpython-313.pyc
│  │     │  │  │     ├─ setup.cpython-313.pyc
│  │     │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ argument.cpython-313.pyc
│  │     │  │     ├─ arguments_manager.cpython-313.pyc
│  │     │  │     ├─ arguments_provider.cpython-313.pyc
│  │     │  │     ├─ callback_actions.cpython-313.pyc
│  │     │  │     ├─ config_file_parser.cpython-313.pyc
│  │     │  │     ├─ config_initialization.cpython-313.pyc
│  │     │  │     ├─ deprecation_actions.cpython-313.pyc
│  │     │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │     ├─ find_default_config_files.cpython-313.pyc
│  │     │  │     ├─ help_formatter.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ _breaking_changes.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ constants.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ extensions
│  │     │  │  ├─ bad_builtin.py
│  │     │  │  ├─ broad_try_clause.py
│  │     │  │  ├─ check_elif.py
│  │     │  │  ├─ code_style.py
│  │     │  │  ├─ comparison_placement.py
│  │     │  │  ├─ confusing_elif.py
│  │     │  │  ├─ consider_refactoring_into_while_condition.py
│  │     │  │  ├─ consider_ternary_expression.py
│  │     │  │  ├─ dict_init_mutate.py
│  │     │  │  ├─ docparams.py
│  │     │  │  ├─ docstyle.py
│  │     │  │  ├─ dunder.py
│  │     │  │  ├─ empty_comment.py
│  │     │  │  ├─ eq_without_hash.py
│  │     │  │  ├─ for_any_all.py
│  │     │  │  ├─ magic_value.py
│  │     │  │  ├─ mccabe.py
│  │     │  │  ├─ no_self_use.py
│  │     │  │  ├─ overlapping_exceptions.py
│  │     │  │  ├─ private_import.py
│  │     │  │  ├─ redefined_loop_name.py
│  │     │  │  ├─ redefined_variable_type.py
│  │     │  │  ├─ set_membership.py
│  │     │  │  ├─ typing.py
│  │     │  │  ├─ while_used.py
│  │     │  │  ├─ _check_docs_utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ bad_builtin.cpython-313.pyc
│  │     │  │     ├─ broad_try_clause.cpython-313.pyc
│  │     │  │     ├─ check_elif.cpython-313.pyc
│  │     │  │     ├─ code_style.cpython-313.pyc
│  │     │  │     ├─ comparison_placement.cpython-313.pyc
│  │     │  │     ├─ confusing_elif.cpython-313.pyc
│  │     │  │     ├─ consider_refactoring_into_while_condition.cpython-313.pyc
│  │     │  │     ├─ consider_ternary_expression.cpython-313.pyc
│  │     │  │     ├─ dict_init_mutate.cpython-313.pyc
│  │     │  │     ├─ docparams.cpython-313.pyc
│  │     │  │     ├─ docstyle.cpython-313.pyc
│  │     │  │     ├─ dunder.cpython-313.pyc
│  │     │  │     ├─ empty_comment.cpython-313.pyc
│  │     │  │     ├─ eq_without_hash.cpython-313.pyc
│  │     │  │     ├─ for_any_all.cpython-313.pyc
│  │     │  │     ├─ magic_value.cpython-313.pyc
│  │     │  │     ├─ mccabe.cpython-313.pyc
│  │     │  │     ├─ no_self_use.cpython-313.pyc
│  │     │  │     ├─ overlapping_exceptions.cpython-313.pyc
│  │     │  │     ├─ private_import.cpython-313.pyc
│  │     │  │     ├─ redefined_loop_name.cpython-313.pyc
│  │     │  │     ├─ redefined_variable_type.cpython-313.pyc
│  │     │  │     ├─ set_membership.cpython-313.pyc
│  │     │  │     ├─ typing.cpython-313.pyc
│  │     │  │     ├─ while_used.cpython-313.pyc
│  │     │  │     ├─ _check_docs_utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ graph.py
│  │     │  ├─ interfaces.py
│  │     │  ├─ lint
│  │     │  │  ├─ base_options.py
│  │     │  │  ├─ caching.py
│  │     │  │  ├─ expand_modules.py
│  │     │  │  ├─ message_state_handler.py
│  │     │  │  ├─ parallel.py
│  │     │  │  ├─ pylinter.py
│  │     │  │  ├─ report_functions.py
│  │     │  │  ├─ run.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ base_options.cpython-313.pyc
│  │     │  │     ├─ caching.cpython-313.pyc
│  │     │  │     ├─ expand_modules.cpython-313.pyc
│  │     │  │     ├─ message_state_handler.cpython-313.pyc
│  │     │  │     ├─ parallel.cpython-313.pyc
│  │     │  │     ├─ pylinter.cpython-313.pyc
│  │     │  │     ├─ report_functions.cpython-313.pyc
│  │     │  │     ├─ run.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ message
│  │     │  │  ├─ message.py
│  │     │  │  ├─ message_definition.py
│  │     │  │  ├─ message_definition_store.py
│  │     │  │  ├─ message_id_store.py
│  │     │  │  ├─ _deleted_message_ids.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ message.cpython-313.pyc
│  │     │  │     ├─ message_definition.cpython-313.pyc
│  │     │  │     ├─ message_definition_store.cpython-313.pyc
│  │     │  │     ├─ message_id_store.cpython-313.pyc
│  │     │  │     ├─ _deleted_message_ids.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ pyreverse
│  │     │  │  ├─ diadefslib.py
│  │     │  │  ├─ diagrams.py
│  │     │  │  ├─ dot_printer.py
│  │     │  │  ├─ inspector.py
│  │     │  │  ├─ main.py
│  │     │  │  ├─ mermaidjs_printer.py
│  │     │  │  ├─ plantuml_printer.py
│  │     │  │  ├─ printer.py
│  │     │  │  ├─ printer_factory.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ writer.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ diadefslib.cpython-313.pyc
│  │     │  │     ├─ diagrams.cpython-313.pyc
│  │     │  │     ├─ dot_printer.cpython-313.pyc
│  │     │  │     ├─ inspector.cpython-313.pyc
│  │     │  │     ├─ main.cpython-313.pyc
│  │     │  │     ├─ mermaidjs_printer.cpython-313.pyc
│  │     │  │     ├─ plantuml_printer.cpython-313.pyc
│  │     │  │     ├─ printer.cpython-313.pyc
│  │     │  │     ├─ printer_factory.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ writer.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ reporters
│  │     │  │  ├─ base_reporter.py
│  │     │  │  ├─ collecting_reporter.py
│  │     │  │  ├─ json_reporter.py
│  │     │  │  ├─ multi_reporter.py
│  │     │  │  ├─ reports_handler_mix_in.py
│  │     │  │  ├─ text.py
│  │     │  │  ├─ ureports
│  │     │  │  │  ├─ base_writer.py
│  │     │  │  │  ├─ nodes.py
│  │     │  │  │  ├─ text_writer.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base_writer.cpython-313.pyc
│  │     │  │  │     ├─ nodes.cpython-313.pyc
│  │     │  │  │     ├─ text_writer.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ base_reporter.cpython-313.pyc
│  │     │  │     ├─ collecting_reporter.cpython-313.pyc
│  │     │  │     ├─ json_reporter.cpython-313.pyc
│  │     │  │     ├─ multi_reporter.cpython-313.pyc
│  │     │  │     ├─ reports_handler_mix_in.cpython-313.pyc
│  │     │  │     ├─ text.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ testutils
│  │     │  │  ├─ checker_test_case.py
│  │     │  │  ├─ configuration_test.py
│  │     │  │  ├─ constants.py
│  │     │  │  ├─ decorator.py
│  │     │  │  ├─ functional
│  │     │  │  │  ├─ find_functional_tests.py
│  │     │  │  │  ├─ lint_module_output_update.py
│  │     │  │  │  ├─ test_file.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ find_functional_tests.cpython-313.pyc
│  │     │  │  │     ├─ lint_module_output_update.cpython-313.pyc
│  │     │  │  │     ├─ test_file.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ get_test_info.py
│  │     │  │  ├─ global_test_linter.py
│  │     │  │  ├─ lint_module_test.py
│  │     │  │  ├─ output_line.py
│  │     │  │  ├─ pyreverse.py
│  │     │  │  ├─ reporter_for_tests.py
│  │     │  │  ├─ testing_pylintrc
│  │     │  │  ├─ tokenize_str.py
│  │     │  │  ├─ unittest_linter.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ _primer
│  │     │  │  │  ├─ package_to_lint.py
│  │     │  │  │  ├─ primer.py
│  │     │  │  │  ├─ primer_command.py
│  │     │  │  │  ├─ primer_compare_command.py
│  │     │  │  │  ├─ primer_prepare_command.py
│  │     │  │  │  ├─ primer_run_command.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ package_to_lint.cpython-313.pyc
│  │     │  │  │     ├─ primer.cpython-313.pyc
│  │     │  │  │     ├─ primer_command.cpython-313.pyc
│  │     │  │  │     ├─ primer_compare_command.cpython-313.pyc
│  │     │  │  │     ├─ primer_prepare_command.cpython-313.pyc
│  │     │  │  │     ├─ primer_run_command.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _run.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ checker_test_case.cpython-313.pyc
│  │     │  │     ├─ configuration_test.cpython-313.pyc
│  │     │  │     ├─ constants.cpython-313.pyc
│  │     │  │     ├─ decorator.cpython-313.pyc
│  │     │  │     ├─ get_test_info.cpython-313.pyc
│  │     │  │     ├─ global_test_linter.cpython-313.pyc
│  │     │  │     ├─ lint_module_test.cpython-313.pyc
│  │     │  │     ├─ output_line.cpython-313.pyc
│  │     │  │     ├─ pyreverse.cpython-313.pyc
│  │     │  │     ├─ reporter_for_tests.cpython-313.pyc
│  │     │  │     ├─ tokenize_str.cpython-313.pyc
│  │     │  │     ├─ unittest_linter.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ _run.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ typing.py
│  │     │  ├─ utils
│  │     │  │  ├─ ast_walker.py
│  │     │  │  ├─ docs.py
│  │     │  │  ├─ file_state.py
│  │     │  │  ├─ linterstats.py
│  │     │  │  ├─ pragma_parser.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ ast_walker.cpython-313.pyc
│  │     │  │     ├─ docs.cpython-313.pyc
│  │     │  │     ├─ file_state.cpython-313.pyc
│  │     │  │     ├─ linterstats.cpython-313.pyc
│  │     │  │     ├─ pragma_parser.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  ├─ __pkginfo__.py
│  │     │  └─ __pycache__
│  │     │     ├─ constants.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ graph.cpython-313.pyc
│  │     │     ├─ interfaces.cpython-313.pyc
│  │     │     ├─ typing.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     ├─ __main__.cpython-313.pyc
│  │     │     └─ __pkginfo__.cpython-313.pyc
│  │     ├─ pylint-3.3.5.dist-info
│  │     │  ├─ CONTRIBUTORS.txt
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ pytest
│  │     │  ├─ py.typed
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ pytest-8.3.5.dist-info
│  │     │  ├─ AUTHORS
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ pytest_asyncio
│  │     │  ├─ plugin.py
│  │     │  ├─ py.typed
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ plugin.cpython-313-pytest-8.3.5.pyc
│  │     │     ├─ plugin.cpython-313.pyc
│  │     │     ├─ _version.cpython-313-pytest-8.3.5.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313-pytest-8.3.5.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pytest_asyncio-0.25.3.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ python_dotenv-1.0.1.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ PyYAML-6.0.2.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ rfc3986
│  │     │  ├─ abnf_regexp.py
│  │     │  ├─ api.py
│  │     │  ├─ builder.py
│  │     │  ├─ compat.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ iri.py
│  │     │  ├─ misc.py
│  │     │  ├─ normalizers.py
│  │     │  ├─ parseresult.py
│  │     │  ├─ uri.py
│  │     │  ├─ validators.py
│  │     │  ├─ _mixin.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ abnf_regexp.cpython-313.pyc
│  │     │     ├─ api.cpython-313.pyc
│  │     │     ├─ builder.cpython-313.pyc
│  │     │     ├─ compat.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ iri.cpython-313.pyc
│  │     │     ├─ misc.cpython-313.pyc
│  │     │     ├─ normalizers.cpython-313.pyc
│  │     │     ├─ parseresult.cpython-313.pyc
│  │     │     ├─ uri.cpython-313.pyc
│  │     │     ├─ validators.cpython-313.pyc
│  │     │     ├─ _mixin.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ rfc3986-1.5.0.dist-info
│  │     │  ├─ AUTHORS.rst
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ sniffio
│  │     │  ├─ py.typed
│  │     │  ├─ _impl.py
│  │     │  ├─ _tests
│  │     │  │  ├─ test_sniffio.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ test_sniffio.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ _impl.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ sniffio-1.3.1.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ LICENSE.APACHE2
│  │     │  ├─ LICENSE.MIT
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ starlette
│  │     │  ├─ applications.py
│  │     │  ├─ authentication.py
│  │     │  ├─ background.py
│  │     │  ├─ concurrency.py
│  │     │  ├─ config.py
│  │     │  ├─ convertors.py
│  │     │  ├─ datastructures.py
│  │     │  ├─ endpoints.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ formparsers.py
│  │     │  ├─ middleware
│  │     │  │  ├─ authentication.py
│  │     │  │  ├─ base.py
│  │     │  │  ├─ cors.py
│  │     │  │  ├─ errors.py
│  │     │  │  ├─ exceptions.py
│  │     │  │  ├─ gzip.py
│  │     │  │  ├─ httpsredirect.py
│  │     │  │  ├─ sessions.py
│  │     │  │  ├─ trustedhost.py
│  │     │  │  ├─ wsgi.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ authentication.cpython-313.pyc
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ cors.cpython-313.pyc
│  │     │  │     ├─ errors.cpython-313.pyc
│  │     │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │     ├─ gzip.cpython-313.pyc
│  │     │  │     ├─ httpsredirect.cpython-313.pyc
│  │     │  │     ├─ sessions.cpython-313.pyc
│  │     │  │     ├─ trustedhost.cpython-313.pyc
│  │     │  │     ├─ wsgi.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ requests.py
│  │     │  ├─ responses.py
│  │     │  ├─ routing.py
│  │     │  ├─ schemas.py
│  │     │  ├─ staticfiles.py
│  │     │  ├─ status.py
│  │     │  ├─ templating.py
│  │     │  ├─ testclient.py
│  │     │  ├─ types.py
│  │     │  ├─ websockets.py
│  │     │  ├─ _exception_handler.py
│  │     │  ├─ _utils.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ applications.cpython-313.pyc
│  │     │     ├─ authentication.cpython-313.pyc
│  │     │     ├─ background.cpython-313.pyc
│  │     │     ├─ concurrency.cpython-313.pyc
│  │     │     ├─ config.cpython-313.pyc
│  │     │     ├─ convertors.cpython-313.pyc
│  │     │     ├─ datastructures.cpython-313.pyc
│  │     │     ├─ endpoints.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ formparsers.cpython-313.pyc
│  │     │     ├─ requests.cpython-313.pyc
│  │     │     ├─ responses.cpython-313.pyc
│  │     │     ├─ routing.cpython-313.pyc
│  │     │     ├─ schemas.cpython-313.pyc
│  │     │     ├─ staticfiles.cpython-313.pyc
│  │     │     ├─ status.cpython-313.pyc
│  │     │     ├─ templating.cpython-313.pyc
│  │     │     ├─ testclient.cpython-313.pyc
│  │     │     ├─ types.cpython-313.pyc
│  │     │     ├─ websockets.cpython-313.pyc
│  │     │     ├─ _exception_handler.cpython-313.pyc
│  │     │     ├─ _utils.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ starlette-0.46.1.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE.md
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ tomlkit
│  │     │  ├─ api.py
│  │     │  ├─ container.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ items.py
│  │     │  ├─ parser.py
│  │     │  ├─ py.typed
│  │     │  ├─ source.py
│  │     │  ├─ toml_char.py
│  │     │  ├─ toml_document.py
│  │     │  ├─ toml_file.py
│  │     │  ├─ _compat.py
│  │     │  ├─ _types.py
│  │     │  ├─ _utils.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ api.cpython-313.pyc
│  │     │     ├─ container.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ items.cpython-313.pyc
│  │     │     ├─ parser.cpython-313.pyc
│  │     │     ├─ source.cpython-313.pyc
│  │     │     ├─ toml_char.cpython-313.pyc
│  │     │     ├─ toml_document.cpython-313.pyc
│  │     │     ├─ toml_file.cpython-313.pyc
│  │     │     ├─ _compat.cpython-313.pyc
│  │     │     ├─ _types.cpython-313.pyc
│  │     │     ├─ _utils.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ tomlkit-0.13.2.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ typing_extensions-4.12.2.dist-info
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ typing_extensions.py
│  │     ├─ uvicorn
│  │     │  ├─ config.py
│  │     │  ├─ importer.py
│  │     │  ├─ lifespan
│  │     │  │  ├─ off.py
│  │     │  │  ├─ on.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ off.cpython-313.pyc
│  │     │  │     ├─ on.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ logging.py
│  │     │  ├─ loops
│  │     │  │  ├─ asyncio.py
│  │     │  │  ├─ auto.py
│  │     │  │  ├─ uvloop.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ asyncio.cpython-313.pyc
│  │     │  │     ├─ auto.cpython-313.pyc
│  │     │  │     ├─ uvloop.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ main.py
│  │     │  ├─ middleware
│  │     │  │  ├─ asgi2.py
│  │     │  │  ├─ message_logger.py
│  │     │  │  ├─ proxy_headers.py
│  │     │  │  ├─ wsgi.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ asgi2.cpython-313.pyc
│  │     │  │     ├─ message_logger.cpython-313.pyc
│  │     │  │     ├─ proxy_headers.cpython-313.pyc
│  │     │  │     ├─ wsgi.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ protocols
│  │     │  │  ├─ http
│  │     │  │  │  ├─ auto.py
│  │     │  │  │  ├─ flow_control.py
│  │     │  │  │  ├─ h11_impl.py
│  │     │  │  │  ├─ httptools_impl.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ auto.cpython-313.pyc
│  │     │  │  │     ├─ flow_control.cpython-313.pyc
│  │     │  │  │     ├─ h11_impl.cpython-313.pyc
│  │     │  │  │     ├─ httptools_impl.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ websockets
│  │     │  │  │  ├─ auto.py
│  │     │  │  │  ├─ websockets_impl.py
│  │     │  │  │  ├─ wsproto_impl.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ auto.cpython-313.pyc
│  │     │  │  │     ├─ websockets_impl.cpython-313.pyc
│  │     │  │  │     ├─ wsproto_impl.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ server.py
│  │     │  ├─ supervisors
│  │     │  │  ├─ basereload.py
│  │     │  │  ├─ multiprocess.py
│  │     │  │  ├─ statreload.py
│  │     │  │  ├─ watchfilesreload.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ basereload.cpython-313.pyc
│  │     │  │     ├─ multiprocess.cpython-313.pyc
│  │     │  │     ├─ statreload.cpython-313.pyc
│  │     │  │     ├─ watchfilesreload.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ workers.py
│  │     │  ├─ _subprocess.py
│  │     │  ├─ _types.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ config.cpython-313.pyc
│  │     │     ├─ importer.cpython-313.pyc
│  │     │     ├─ logging.cpython-313.pyc
│  │     │     ├─ main.cpython-313.pyc
│  │     │     ├─ server.cpython-313.pyc
│  │     │     ├─ workers.cpython-313.pyc
│  │     │     ├─ _subprocess.cpython-313.pyc
│  │     │     ├─ _types.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ uvicorn-0.34.0.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE.md
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ REQUESTED
│  │     │  └─ WHEEL
│  │     ├─ watchfiles
│  │     │  ├─ cli.py
│  │     │  ├─ filters.py
│  │     │  ├─ main.py
│  │     │  ├─ py.typed
│  │     │  ├─ run.py
│  │     │  ├─ version.py
│  │     │  ├─ _rust_notify.cp313-win_amd64.pyd
│  │     │  ├─ _rust_notify.pyi
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ cli.cpython-313.pyc
│  │     │     ├─ filters.cpython-313.pyc
│  │     │     ├─ main.cpython-313.pyc
│  │     │     ├─ run.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ watchfiles-1.0.4.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ licenses
│  │     │  │  └─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  └─ WHEEL
│  │     ├─ websockets
│  │     │  ├─ asyncio
│  │     │  │  ├─ async_timeout.py
│  │     │  │  ├─ client.py
│  │     │  │  ├─ compatibility.py
│  │     │  │  ├─ connection.py
│  │     │  │  ├─ messages.py
│  │     │  │  ├─ router.py
│  │     │  │  ├─ server.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ async_timeout.cpython-313.pyc
│  │     │  │     ├─ client.cpython-313.pyc
│  │     │  │     ├─ compatibility.cpython-313.pyc
│  │     │  │     ├─ connection.cpython-313.pyc
│  │     │  │     ├─ messages.cpython-313.pyc
│  │     │  │     ├─ router.cpython-313.pyc
│  │     │  │     ├─ server.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ auth.py
│  │     │  ├─ cli.py
│  │     │  ├─ client.py
│  │     │  ├─ connection.py
│  │     │  ├─ datastructures.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ extensions
│  │     │  │  ├─ base.py
│  │     │  │  ├─ permessage_deflate.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ permessage_deflate.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ frames.py
│  │     │  ├─ headers.py
│  │     │  ├─ http.py
│  │     │  ├─ http11.py
│  │     │  ├─ imports.py
│  │     │  ├─ legacy
│  │     │  │  ├─ auth.py
│  │     │  │  ├─ client.py
│  │     │  │  ├─ exceptions.py
│  │     │  │  ├─ framing.py
│  │     │  │  ├─ handshake.py
│  │     │  │  ├─ http.py
│  │     │  │  ├─ protocol.py
│  │     │  │  ├─ server.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ auth.cpython-313.pyc
│  │     │  │     ├─ client.cpython-313.pyc
│  │     │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │     ├─ framing.cpython-313.pyc
│  │     │  │     ├─ handshake.cpython-313.pyc
│  │     │  │     ├─ http.cpython-313.pyc
│  │     │  │     ├─ protocol.cpython-313.pyc
│  │     │  │     ├─ server.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ protocol.py
│  │     │  ├─ py.typed
│  │     │  ├─ server.py
│  │     │  ├─ speedups.c
│  │     │  ├─ speedups.cp313-win_amd64.pyd
│  │     │  ├─ speedups.pyi
│  │     │  ├─ streams.py
│  │     │  ├─ sync
│  │     │  │  ├─ client.py
│  │     │  │  ├─ connection.py
│  │     │  │  ├─ messages.py
│  │     │  │  ├─ router.py
│  │     │  │  ├─ server.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ client.cpython-313.pyc
│  │     │  │     ├─ connection.cpython-313.pyc
│  │     │  │     ├─ messages.cpython-313.pyc
│  │     │  │     ├─ router.cpython-313.pyc
│  │     │  │     ├─ server.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ typing.py
│  │     │  ├─ uri.py
│  │     │  ├─ utils.py
│  │     │  ├─ version.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ auth.cpython-313.pyc
│  │     │     ├─ cli.cpython-313.pyc
│  │     │     ├─ client.cpython-313.pyc
│  │     │     ├─ connection.cpython-313.pyc
│  │     │     ├─ datastructures.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ frames.cpython-313.pyc
│  │     │     ├─ headers.cpython-313.pyc
│  │     │     ├─ http.cpython-313.pyc
│  │     │     ├─ http11.cpython-313.pyc
│  │     │     ├─ imports.cpython-313.pyc
│  │     │     ├─ protocol.cpython-313.pyc
│  │     │     ├─ server.cpython-313.pyc
│  │     │     ├─ streams.cpython-313.pyc
│  │     │     ├─ typing.cpython-313.pyc
│  │     │     ├─ uri.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ websockets-15.0.1.dist-info
│  │     │  ├─ entry_points.txt
│  │     │  ├─ INSTALLER
│  │     │  ├─ LICENSE
│  │     │  ├─ METADATA
│  │     │  ├─ RECORD
│  │     │  ├─ top_level.txt
│  │     │  └─ WHEEL
│  │     ├─ yaml
│  │     │  ├─ composer.py
│  │     │  ├─ constructor.py
│  │     │  ├─ cyaml.py
│  │     │  ├─ dumper.py
│  │     │  ├─ emitter.py
│  │     │  ├─ error.py
│  │     │  ├─ events.py
│  │     │  ├─ loader.py
│  │     │  ├─ nodes.py
│  │     │  ├─ parser.py
│  │     │  ├─ reader.py
│  │     │  ├─ representer.py
│  │     │  ├─ resolver.py
│  │     │  ├─ scanner.py
│  │     │  ├─ serializer.py
│  │     │  ├─ tokens.py
│  │     │  ├─ _yaml.cp313-win_amd64.pyd
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ composer.cpython-313.pyc
│  │     │     ├─ constructor.cpython-313.pyc
│  │     │     ├─ cyaml.cpython-313.pyc
│  │     │     ├─ dumper.cpython-313.pyc
│  │     │     ├─ emitter.cpython-313.pyc
│  │     │     ├─ error.cpython-313.pyc
│  │     │     ├─ events.cpython-313.pyc
│  │     │     ├─ loader.cpython-313.pyc
│  │     │     ├─ nodes.cpython-313.pyc
│  │     │     ├─ parser.cpython-313.pyc
│  │     │     ├─ reader.cpython-313.pyc
│  │     │     ├─ representer.cpython-313.pyc
│  │     │     ├─ resolver.cpython-313.pyc
│  │     │     ├─ scanner.cpython-313.pyc
│  │     │     ├─ serializer.cpython-313.pyc
│  │     │     ├─ tokens.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ _black_version.py
│  │     ├─ _pytest
│  │     │  ├─ assertion
│  │     │  │  ├─ rewrite.py
│  │     │  │  ├─ truncate.py
│  │     │  │  ├─ util.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ rewrite.cpython-313.pyc
│  │     │  │     ├─ truncate.cpython-313.pyc
│  │     │  │     ├─ util.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ cacheprovider.py
│  │     │  ├─ capture.py
│  │     │  ├─ compat.py
│  │     │  ├─ config
│  │     │  │  ├─ argparsing.py
│  │     │  │  ├─ compat.py
│  │     │  │  ├─ exceptions.py
│  │     │  │  ├─ findpaths.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ argparsing.cpython-313.pyc
│  │     │  │     ├─ compat.cpython-313.pyc
│  │     │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │     ├─ findpaths.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ debugging.py
│  │     │  ├─ deprecated.py
│  │     │  ├─ doctest.py
│  │     │  ├─ faulthandler.py
│  │     │  ├─ fixtures.py
│  │     │  ├─ freeze_support.py
│  │     │  ├─ helpconfig.py
│  │     │  ├─ hookspec.py
│  │     │  ├─ junitxml.py
│  │     │  ├─ legacypath.py
│  │     │  ├─ logging.py
│  │     │  ├─ main.py
│  │     │  ├─ mark
│  │     │  │  ├─ expression.py
│  │     │  │  ├─ structures.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ expression.cpython-313.pyc
│  │     │  │     ├─ structures.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ monkeypatch.py
│  │     │  ├─ nodes.py
│  │     │  ├─ outcomes.py
│  │     │  ├─ pastebin.py
│  │     │  ├─ pathlib.py
│  │     │  ├─ py.typed
│  │     │  ├─ pytester.py
│  │     │  ├─ pytester_assertions.py
│  │     │  ├─ python.py
│  │     │  ├─ python_api.py
│  │     │  ├─ python_path.py
│  │     │  ├─ recwarn.py
│  │     │  ├─ reports.py
│  │     │  ├─ runner.py
│  │     │  ├─ scope.py
│  │     │  ├─ setuponly.py
│  │     │  ├─ setupplan.py
│  │     │  ├─ skipping.py
│  │     │  ├─ stash.py
│  │     │  ├─ stepwise.py
│  │     │  ├─ terminal.py
│  │     │  ├─ threadexception.py
│  │     │  ├─ timing.py
│  │     │  ├─ tmpdir.py
│  │     │  ├─ unittest.py
│  │     │  ├─ unraisableexception.py
│  │     │  ├─ warnings.py
│  │     │  ├─ warning_types.py
│  │     │  ├─ _argcomplete.py
│  │     │  ├─ _code
│  │     │  │  ├─ code.py
│  │     │  │  ├─ source.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ code.cpython-313.pyc
│  │     │  │     ├─ source.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _io
│  │     │  │  ├─ pprint.py
│  │     │  │  ├─ saferepr.py
│  │     │  │  ├─ terminalwriter.py
│  │     │  │  ├─ wcwidth.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ pprint.cpython-313.pyc
│  │     │  │     ├─ saferepr.cpython-313.pyc
│  │     │  │     ├─ terminalwriter.cpython-313.pyc
│  │     │  │     ├─ wcwidth.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _py
│  │     │  │  ├─ error.py
│  │     │  │  ├─ path.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ error.cpython-313.pyc
│  │     │  │     ├─ path.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ cacheprovider.cpython-313.pyc
│  │     │     ├─ capture.cpython-313.pyc
│  │     │     ├─ compat.cpython-313.pyc
│  │     │     ├─ debugging.cpython-313.pyc
│  │     │     ├─ deprecated.cpython-313.pyc
│  │     │     ├─ doctest.cpython-313.pyc
│  │     │     ├─ faulthandler.cpython-313.pyc
│  │     │     ├─ fixtures.cpython-313.pyc
│  │     │     ├─ freeze_support.cpython-313.pyc
│  │     │     ├─ helpconfig.cpython-313.pyc
│  │     │     ├─ hookspec.cpython-313.pyc
│  │     │     ├─ junitxml.cpython-313.pyc
│  │     │     ├─ legacypath.cpython-313.pyc
│  │     │     ├─ logging.cpython-313.pyc
│  │     │     ├─ main.cpython-313.pyc
│  │     │     ├─ monkeypatch.cpython-313.pyc
│  │     │     ├─ nodes.cpython-313.pyc
│  │     │     ├─ outcomes.cpython-313.pyc
│  │     │     ├─ pastebin.cpython-313.pyc
│  │     │     ├─ pathlib.cpython-313.pyc
│  │     │     ├─ pytester.cpython-313.pyc
│  │     │     ├─ pytester_assertions.cpython-313.pyc
│  │     │     ├─ python.cpython-313.pyc
│  │     │     ├─ python_api.cpython-313.pyc
│  │     │     ├─ python_path.cpython-313.pyc
│  │     │     ├─ recwarn.cpython-313.pyc
│  │     │     ├─ reports.cpython-313.pyc
│  │     │     ├─ runner.cpython-313.pyc
│  │     │     ├─ scope.cpython-313.pyc
│  │     │     ├─ setuponly.cpython-313.pyc
│  │     │     ├─ setupplan.cpython-313.pyc
│  │     │     ├─ skipping.cpython-313.pyc
│  │     │     ├─ stash.cpython-313.pyc
│  │     │     ├─ stepwise.cpython-313.pyc
│  │     │     ├─ terminal.cpython-313.pyc
│  │     │     ├─ threadexception.cpython-313.pyc
│  │     │     ├─ timing.cpython-313.pyc
│  │     │     ├─ tmpdir.cpython-313.pyc
│  │     │     ├─ unittest.cpython-313.pyc
│  │     │     ├─ unraisableexception.cpython-313.pyc
│  │     │     ├─ warnings.cpython-313.pyc
│  │     │     ├─ warning_types.cpython-313.pyc
│  │     │     ├─ _argcomplete.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ _yaml
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     └─ __init__.cpython-313.pyc
│  │     └─ __pycache__
│  │        ├─ mccabe.cpython-313.pyc
│  │        ├─ mypy_extensions.cpython-313.pyc
│  │        ├─ py.cpython-313.pyc
│  │        ├─ typing_extensions.cpython-313.pyc
│  │        └─ _black_version.cpython-313.pyc
│  ├─ pyvenv.cfg
│  └─ Scripts
│     ├─ activate
│     ├─ activate.bat
│     ├─ activate.fish
│     ├─ Activate.ps1
│     ├─ black.exe
│     ├─ blackd.exe
│     ├─ deactivate.bat
│     ├─ dmypy.exe
│     ├─ dotenv.exe
│     ├─ fastapi.exe
│     ├─ get_gprof
│     ├─ get_objgraph
│     ├─ httpx.exe
│     ├─ isort-identify-imports.exe
│     ├─ isort.exe
│     ├─ mypy.exe
│     ├─ mypyc.exe
│     ├─ pip.exe
│     ├─ pip3.13.exe
│     ├─ pip3.exe
│     ├─ py.test.exe
│     ├─ pylint-config.exe
│     ├─ pylint.exe
│     ├─ pyreverse.exe
│     ├─ pytest.exe
│     ├─ python.exe
│     ├─ pythonw.exe
│     ├─ stubgen.exe
│     ├─ stubtest.exe
│     ├─ symilar.exe
│     ├─ undill
│     ├─ uvicorn.exe
│     ├─ watchfiles.exe
│     └─ websockets.exe
├─ websocket
│  ├─ connection_manager.py
│  └─ __pycache__
│     └─ connection_manager.cpython-313.pyc
└─ __pycache__
   └─ main.cpython-313.pyc

```
