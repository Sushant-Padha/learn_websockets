
function receiveMoves(websocket) {
  websocket.addEventListener("message", ({ data }) => {
    const event = JSON.parse(data);
    if (event.type === "move") {
      console.log(event.type);

      //move logic
      var item = document.getElementById("one");
      var lbStyle = window.getComputedStyle(item);
      var topValue = lbStyle.getPropertyValue("top").replace("px", "");
      item.style.top = (Number(topValue) + 20) + "px";

    }
  });
}

window.addEventListener("DOMContentLoaded", () => {

  const websocket = new WebSocket("ws://localhost:8000/ws");
  receiveMoves(websocket);

});