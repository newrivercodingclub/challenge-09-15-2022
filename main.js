var canvas = document.querySelector("canvas");
displayWidth = window.innerWidth * 0.7;
displayHeight = window.innerHeight * 0.7;
canvas.width = displayWidth;
canvas.height = displayHeight;

var ctx = canvas.getContext("2d");

// x and y are the coordinates of the circle

// vx and vy are the respective velocity

// initial x and y
var x = Math.floor(Math.random() * displayWidth);
var y = Math.floor(Math.random() * displayHeight);

// random velocities, currently random can be zero
var vx = Math.floor(Math.random() * 2);
var vy = Math.floor(Math.random() * 4);
var radius = 20;

move();

// Animation Function
function move() {
  requestAnimationFrame(move);

  // Clears the canvas
  ctx.clearRect(0, 0, displayWidth, displayHeight);

  // Draw circle
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fill();

  // Framework for lines
  //   Line 1
  ctx.beginPath();
  ctx.lineCap = "square";
  ctx.moveTo(0, 300);
  ctx.lineTo(200, 300);
  ctx.stroke();
  //   Line 2
  ctx.beginPath();
  ctx.lineCap = "square";
  ctx.moveTo(200, 300);
  ctx.lineTo(500, displayHeight);
  ctx.stroke();
  //   Line 3
  ctx.beginPath();
  ctx.lineCap = "square";
  ctx.moveTo(displayWidth, 300);
  ctx.lineTo(displayWidth - 200, 300);
  ctx.stroke();
  //   Line 4
  ctx.beginPath();
  ctx.lineCap = "square";
  ctx.moveTo(displayWidth - 200, 300);
  ctx.lineTo(displayWidth - 500, displayHeight);
  ctx.stroke();

  // Conditions so that the ball bounces
  if (radius + x > displayWidth) {
    vx = 0 - vx;
    console.log(vx);
  }

  if (x - radius < 0) {
    vx = -vx;
    console.log(vx);
  }

  if (y + radius > displayHeight) {
    vy = vy * -1;
    console.log(vy);
  }
  if (y - radius < 0) {
    vy = 0 + -vy;
    console.log(vy);
  }

  x = x + vx;
  y = y + vy;
}
