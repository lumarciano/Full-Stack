let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red'; //cor linhas
ctx.fillStyle = 'blue'; //cor preenchimento
ctx.strokeRect(10,10,50,50); //linhas
ctx.fillRect(10,10,50,50); //preenchimento
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.lineTo(100,200);
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.arc(200,200,50,Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();


// circulo
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.arc(200,200,50,0,Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'blue';
ctx.font = "90px Arial"
ctx.strokeText("Olá",200,200)
ctx.fillText("Olá",200,200);
ctx.closePath();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas1.getContext('2d');

// quadrados
ctx1.beginPath();
ctx1.lineWidth = 0;
ctx1.strokeStyle = 'red'; //cor linhas
ctx1.fillStyle = 'red'; //cor preenchimento
ctx1.strokeRect(0,0,50,50); //linhas
ctx1.fillRect(0,0,50,50); //preenchimento
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 0;
ctx1.strokeStyle = 'green'; //cor linhas
ctx1.fillStyle = 'green'; //cor preenchimento
ctx1.strokeRect(350,350,400,400); //linhas
ctx1.fillRect(350,350,400,400); //preenchimento
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 0;
ctx1.strokeStyle = 'yellow'; //cor linhas
ctx1.fillStyle = 'yellow'; //cor preenchimento
ctx1.strokeRect(0,350,50,400); //linhas
ctx1.fillRect(0,350,50,400); //preenchimento
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 0;
ctx1.strokeStyle = 'blue'; //cor linhas
ctx1.fillStyle = 'blue'; //cor preenchimento
ctx1.strokeRect(350,0,400,50); //linhas
ctx1.fillRect(350,0,400,50); //preenchimento
ctx1.closePath();

// linhas
ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.strokeStyle = 'green';
ctx1.moveTo(0,200);
ctx1.lineTo(400,200);
ctx1.stroke();
ctx1.closePath();

// arcos
ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.strokeStyle = 'green';
ctx1.fillStyle = 'transparent';
ctx1.arc(200,200,50,0,Math.PI);
ctx1.stroke();
ctx1.fill();
ctx1.closePath();

// circulo
ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.strokeStyle = 'green';
ctx1.fillStyle = 'yellow';
ctx1.arc(80,130,20,0,2*Math.PI);
ctx1.stroke();
ctx1.fill();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.strokeStyle = 'green';
ctx1.fillStyle = 'yellow';
ctx1.arc(320,130,20,0,2*Math.PI);
ctx1.stroke();
ctx1.fill();
ctx1.closePath();

// linhas
ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.strokeStyle = 'red';
ctx1.moveTo(0,0);
ctx1.lineTo(400,400);
ctx1.stroke();
ctx1.closePath();

ctx1.beginPath();
ctx1.lineWidth = 1;
ctx1.strokeStyle = 'blue';
ctx1.moveTo(400,0);
ctx1.lineTo(0,400);
ctx1.stroke();
ctx1.closePath();

// texto
ctx1.beginPath();
ctx1.lineWidth = 10;
//ctx.strokeStyle = 'red';
ctx1.fillStyle = 'black';
ctx1.font = "25px Arial"
//ctx1.strokeText("Olá",200,200)
ctx1.fillText("Desenvolvimento Web",75,75);
ctx1.closePath();

//////////////////////////////////////////////////////////////////////////////////////

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext('2d');

// quadrados
ctx2.beginPath();
ctx2.lineWidth = 0;
//ctx2.strokeStyle = 'grey'; //cor linhas
ctx2.fillStyle = 'grey'; //cor preenchimento
// ctx2.strokeRect(0,0,50,50); //linhas
ctx2.fillRect(0,300,400,400); //preenchimento
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 0;
//ctx2.strokeStyle = 'grey'; //cor linhas
ctx2.fillStyle = 'grey'; //cor preenchimento
// ctx2.strokeRect(0,0,50,50); //linhas
ctx2.fillRect(0,300,400,400); //preenchimento
ctx2.closePath();