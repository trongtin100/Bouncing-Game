
let GameBoard = function ( width, height ){
    this.width = width;
    this.height = height;

    this.getWidth = function () {
        return this.width;
    }
    this.getHeight = function () {
        return this.height;
    }
}

let Ball = function (xCoordinate, yCoordinate, movingSpeed,  movingRadian){
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.movingSpeed = movingSpeed;
    this.movingRadian = movingRadian;

    this.getXCoordinate = function () {
        return this.xCoordinate;
    }
    this.getYCoordinate = function () {
        return this.yCoordinate;
    }
    this.movingSpeed = function () {
        return this.movingSpeed;
    }
    this.movingRadian = function () {
        return this.movingRadian;
    }

    this.moving = function () {
        //...
    }

    this.changeDirectionMethod = function () {
        //...
    }
}

let Bar = function ( xCoordinate, yCoordinate , width, height){
    this.width = width;
    this.height = height;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;

    this.getWidth = function () {
        return this.width;
    }

    this.getHeight = function () {
        return this.height;
    }
    this.getXCoordinate = function () {
        return this.xCoordinate;
    }
    this.getYCoordinate = function () {
        return this.yCoordinate;
    }



    this.moveLeft = function () {
        // ...
    }

    this.moveRight = function () {
        //...
    }

}

let main = function () {
    //init đối tượng
    let gameBoard = new GameBoard(419, 338);
    let ball = new Ball(405, 100, 5, 45);
    let bar = new Bar(150, 300, 150,10);

    //vẽ trên html canvas
    let canvas = document.getElementById("canvas");
    canvas.setAttribute('width', gameBoard.getWidth());
    canvas.setAttribute('height', gameBoard.getHeight());

    // ve hinh ball tren canvas
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#blue";
    ctx.arc(ball.getXCoordinate(), ball.getYCoordinate(), 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    function init () {
        ctx.style.position="relative";
        ctx.style.left= "0px";
        ctx.style.top= "0px";
    }
    function moveRight () {
        ctx.style.left = parseInt(ctx.style.left)  -20 + "px" ;
    }
    function moveleft () {
        ctx.style.left = parseInt(ctx.style.left) +20 + "px";
    }


    // vẽ hình chữ nhât thanh bar
    let barCtx = canvas.getContext ("2d");
    barCtx.beginPath();
    barCtx.fillStyle = "#FF0000";
    barCtx.fillRect (bar.getXCoordinate(), bar.getYCoordinate(), bar.getWidth(), bar.getHeight());
    barCtx.fill();




}
main ();






