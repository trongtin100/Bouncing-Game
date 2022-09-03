var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 15;
var x = canvas.width/2;             //why?
var y = canvas.height-30;           //why?
var dx = 2;                         //why?
var dy = -2;                        //why?
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.getElementById("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if( e.key == "Right" || e.key = "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
//Ve trái bóng:
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
// vẽ đường di chuyển:
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    // điều kiện bóng bật lại khi chạm viền:
    // Bóng bật lại viền bề rộng
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // Bóng bật lại viền bề ngang
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
// bóng di chuyển - chuyển đổi ảnh.
setInterval(draw, 10);