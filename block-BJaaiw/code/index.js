let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");

let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;


let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

let brickRowCount = 5;
let brickColumnCount = 3;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let score = 0;
let lives = 3;

let bricks = [];
for (let i = 0; i < brickColumnCount; i++) {
  bricks[i] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[i][r] = { x: 0, y: 0, status: 1 };
  }
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  let relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

function collisionDetection() {
  for (let i = 0; i < brickColumnCount; i++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[i][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBall() {
  c.beginPath();
  c.arc(x, y, ballRadius, 0, Math.PI * 2);
  c.fillStyle = "#0095DD";
  c.fill();
  c.closePath();
}

function drawPaddle() {
  c.beginPath();
  c.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  c.fillStyle = "#0095DD";
  c.fill();
  c.closePath();
}

function drawBricks() {
  for (let i = 0; i < brickColumnCount; i++) {
    for (let r = 0; r < brickRowCount; r++) {
       if(bricks[i][r].status == 1) {
      let brickX = (r * (brickWidth + brickPadding))+ brickOffsetLeft;
      let brickY = (i * (brickHeight + brickPadding))+ brickOffsetTop;
      bricks[i][r].x = brickX;
      bricks[i][r].y = brickY;
      c.beginPath();
      c.rect(brickX, brickY, brickWidth, brickHeight);
      c.fillStyle = "#0095DD";
      c.fill();
      c.closePath();
    }
  }
}
 }

function drawScore() {
  c.font = "16px Arial";
  c.fillStyle = "#0095DD";
  c.fillText(`Score: ${score}`, 8, 20);
}

function drawLives() {
  c.font = "16px Arial";
  c.fillStyle = "#0095DD";
  c.fillText("Lives: " + lives, canvas.width - 65, 20);
  //c.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}
function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives--;
      if (!lives) {
        alert("GAME OVER");
        document.location.reload();
      }
      else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw();



