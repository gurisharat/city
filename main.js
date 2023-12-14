// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";

// Rectangular Building Base
ctx.fillRect(0, 350, 150, 300);

// Middle Section / Triangle Building
ctx.fillRect(20, 200, 110, 150);

// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";

// Building Base
ctx.fillRect(150, 100, 150, 550);

// Medium Top
ctx.fillRect(170, 40, 110, 60);

// Small Top
ctx.fillRect(190, 20, 70, 20);

// Triangle Building (left)
ctx.fillStyle = "white";
ctx.fillRect(40, 200, 12.5, 12.5);
ctx.fillRect(60, 200, 12.5, 12.5);
ctx.fillRect(80, 200, 12.5, 12.5);
ctx.fillRect(100, 200, 12.5, 12.5);
ctx.fillRect(40, 225, 12.5, 12.5);
ctx.fillRect(60, 225, 12.5, 12.5);
ctx.fillRect(80, 225, 12.5, 12.5);
ctx.fillRect(100, 225, 12.5, 12.5);
ctx.fillRect(40, 250, 12.5, 12.5);
ctx.fillRect(60, 250, 12.5, 12.5);
ctx.fillRect(80, 250, 12.5, 12.5);
ctx.fillRect(100, 250, 12.5, 12.5);
ctx.fillRect(40, 275, 12.5, 12.5);
ctx.fillRect(60, 275, 12.5, 12.5);
ctx.fillRect(80, 275, 12.5, 12.5);
ctx.fillRect(100, 275, 12.5, 12.5);
ctx.fillRect(40, 300, 12.5, 12.5);
ctx.fillRect(60, 300, 12.5, 12.5);
ctx.fillRect(80, 300, 12.5, 12.5);
ctx.fillRect(100, 300, 12.5, 12.5);
ctx.fillRect(40, 325, 12.5, 12.5);
ctx.fillRect(60, 325, 12.5, 12.5);
ctx.fillRect(80, 325, 12.5, 12.5);
ctx.fillRect(100, 325, 12.5, 12.5);

// Rectangle Building (left-bottom)
ctx.fillRect(20, 365, 125, 30);
ctx.fillRect(20, 410, 125, 30);
ctx.fillRect(20, 455, 125, 30);
ctx.fillRect(20, 500, 125, 30);
ctx.fillRect(20, 545, 125, 30);
ctx.fillRect(20, 590, 125, 30);

// Rectangle Building (right)
ctx.fillStyle = "white";
ctx.fillRect(175, 125, 12, 500);
ctx.fillRect(197, 125, 12, 500);
ctx.fillRect(219, 125, 12, 500);
ctx.fillRect(241, 125, 12, 500);
ctx.fillRect(263, 125, 12, 500);
