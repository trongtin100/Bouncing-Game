var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(80,80,60,60);
ctx.fillstyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240,160,30, Math.PI*2,false);
ctx.fillstyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(320, 60, 150, 80);
ctx.strokeStyle = "rgba(0, 0, 355, 0.5)";
ctx.stroke();
ctx.closePath();

