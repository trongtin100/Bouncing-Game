let recTangle = function (height, width, xCoordinate, yCoordinate, color) {
    this.height = height;
    this.width = width;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.color = color;

    this.getHeight = function () {
        return this.height;
    }
    this.getWidth= function () {
        return this.width;
    }
    this.getXCoordinate = function () {
        return this.xCoordinate;
    }
    this.getYCoordinate = function () {
        return this.yCoordinate;
    }
    this.getColor = function () {
        return this.color;
    }

}

let Bar = function (height2, width2, xCoordinate2, yCoordinate2) {
    this.height2 = height2;
    this.width2 = width2;
    this.xCoordinate2 = xCoordinate2;
    this.yCoordinate2 = yCoordinate2;


    this.getHeight2 = function () {
        return this.height2;
    }
    this.getWidth2= function () {
        return this.width2;
    }
    this.getXCoordinate2 = function () {
        return this.xCoordinate2;
    }
    this.getYCoordinate2 = function () {
        return this.yCoordinate2;
    }
}

let main = function () {
    //init đối tượng
    let rectangle = new recTangle(419, 338, 300, 200);
    let bar = new Bar (200, 200, 100, 100);

    //vẽ trên html canvas
    let canvas = document.getElementById("canvas");
    canvas.setAttribute('width', rectangle.getWidth());
    canvas.setAttribute('height', rectangle.getHeight());

    // vẽ hình chữ nhât thanh
    let barCtx = canvas.getContext("2d");
    barCtx.beginPath();
    barCtx.fillStyle = "#FF0000";
    barCtx.fillRect(bar.getXCoordinate2(), bar.getYCoordinate2(), bar.getWidth2(), bar.getHeight2());
    barCtx.fill();

}
main ();





