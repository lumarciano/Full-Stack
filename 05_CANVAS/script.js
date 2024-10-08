let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas.getContext('2d');

function desenhar_quadrado(x, y, x1, y1, stroke, fill, ctx){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = stroke; //cor linhas
    ctx.fillStyle = fill; //cor preenchimento
    ctx.strokeRect(x,y,x1,y1); //linhas
    ctx.fillRect(x,y,x1,y1); //preenchimento
    ctx.closePath();
}

function desenhar_linha(x, y, x1, y1, cor, ctx){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = cor;
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.stroke();
    ctx.closePath();
}

function desenhar_arco(x, y ,r, ang1, ang2, stroke, fill, ctx){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.arc(x, y, r, ang1, ang2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function escrever(x, y, texto, stroke, fill, ctx){
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.font = "25px Arial"
    ctx.strokeText(texto, x, y)
    ctx.fillText(texto, x, y);
    ctx.closePath();
}


//////////////////////////////////////////////////////////////////////////////////

//desenhar_quadrado(0, 0, 50, 50, 'blue', 'blue', ctx); //teste

//          CASA           //
desenhar_quadrado




