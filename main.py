from fastapi import FastAPI, WebSocket
import time

app = FastAPI()

@app.websocket_route("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        time.sleep(2)
        data = {
            "type": "move"
        }
        print("sending")
        await websocket.send_json(data)