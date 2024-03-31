import pytest
from backend import app


def test_hello():
    client = app.test_client()
    response = client.get("/hello")
    assert response.status_code == 200
    assert response.data == b"Hello, Flask API!"
