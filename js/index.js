const canvas = document.querySelector("#canvas");
//그래픽 작업 수행
const ctx = canvas.getContext("2d");

function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const wrap = createElement("div", "wrap");
const title = createElement("h1", "title")
title.textContent = "마우스 그림그리기"
body.appendChild(title);
body.appendChild(wrap);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 선 만나는 부분 둥글게
ctx.lineJoin = "round";

// 선 끝부분 둥글게 마무리
ctx.lineCap = "round";

// 선 두께
ctx.lineWidth = 20;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; // 컬러 변경
let direction = true;

canvas.addEventListener("mousemove", Drawing);

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

function Drawing(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 20 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
}
