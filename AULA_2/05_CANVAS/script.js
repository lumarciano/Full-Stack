let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas1.getContext('2d');

function desenhar_quadrado(x, y, x1, y1, stroke, fill, ctx){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = stroke; //cor linhas
    ctx.fillStyle = fill; //cor preenchimento
    ctx.strokeRect(x,y,x1,y1); //linhas
    ctx.fillRect(x,y,x1,y1); //preenchimento
    ctx.closePath();
}

function desenhar_linha(x, y, x1, y1, x2, y2, stroke, fill, ctx){
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function desenhar_arco(x, y ,r, ang1, ang2, stroke, fill, ctx){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.arc(x, y, r, ang1, ang2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function escrever(x, y, texto, stroke, fill, ctx){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.font = "20px Arial"
    ctx.strokeText(texto, x, y)
    ctx.fillText(texto, x, y);
    ctx.closePath();
}


//////////////////////////////////////////////////////////////////////////////////

//desenhar_quadrado(0, 0, 50, 50, 'blue', 'blue', ctx); //teste

                    //          CASA           //

//chao//
desenhar_quadrado(0, 200, 300, 300, 'grey', 'grey', ctx);

//agua//
desenhar_quadrado(0, 200, 45, 400, 'transparent', 'rgb(127, 157, 255)', ctx);
desenhar_quadrado(0, 257, 140, 400, 'transparent', 'rgb(127, 157, 255)', ctx);
desenhar_arco(0, 200, 46, Math.PI, 0, 'transparent', 'rgb(127, 157, 255)', ctx);
desenhar_arco(140, 300, 43.5, Math.PI, 0, 'transparent', 'rgb(127, 157, 255)', ctx);

//tronco//
desenhar_quadrado(45, 200, 18, -46, 'transparent', 'rgb(100, 64, 17)', ctx);
desenhar_quadrado(245, 257, 18, -46, 'transparent', 'rgb(100, 64, 17)', ctx);

//folhas//
desenhar_arco(54.2, 145, 23, 0, 2*Math.PI, 'transparent', 'green', ctx);
desenhar_arco(253.5, 197, 23, 0, 2*Math.PI, 'transparent', 'green', ctx);

//parede casa//
desenhar_quadrado(117, 200, 70, -70, 'transparent', 'rgb(100, 64, 17)', ctx);

//porta//
desenhar_quadrado(145, 200, 15, -35, 'transparent', 'rgb(78, 57, 29)', ctx);

//janela//
desenhar_quadrado(125, 165, 20, -20, 'transparent', 'rgb(50, 112, 228)', ctx);
desenhar_quadrado(160, 165, 20, -20, 'transparent', 'rgb(50, 112, 228)', ctx);

//telhado//
desenhar_linha(117, 130, 152, 100, 187, 130, 'transparent', 'salmon', ctx);

//desenhar_linha(117, 130, 152, 100, 'black', ctx);
//desenhar_linha(152, 100, 187, 130, 'black', ctx);
//desenhar_linha(187, 130, 117, 130, 'black', ctx);

//sol//
desenhar_arco(230, 73, 35, 0, 2*Math.PI, 'transparent', 'yellow', ctx);


//////////////////////////////////////////////////////////////////////////////////

                    //          ABSTRATO - "Canvas"           //

//quadrados cantos//
desenhar_quadrado(0, 0, 45, 45, 'blue', 'blue', ctx1);

desenhar_quadrado(255, 0, 300, 45, 'red', 'red', ctx1);

desenhar_quadrado(0, 300, 55, -55, 'transparent', 'yellow', ctx1);
desenhar_quadrado(27.5, 245, 27.5, 27.5, 'white', 'white', ctx1);

desenhar_quadrado(300, 300, -55, -55, 'transparent', 'black', ctx1);
desenhar_quadrado(272.5, 245, -27.5, 27.5, 'white', 'white', ctx1);

//diagonais//
desenhar_linha(0, 0, 150, 150, 0, 0, 'blue', 'blue', ctx1);
desenhar_linha(150, 150, 300, 0, 150, 150, 'red', 'red', ctx1);
//desenhar_linha(150, 150, 150, 300, 150, 150, 'black', 'black', ctx1);

//quadrado centro//
desenhar_quadrado(150, 150, -40, 40, 'red', 'red', ctx1);
desenhar_linha(150, 150, 150, 300, 150, 150, 'black', 'black', ctx1);

//quadrado esq. + dir//
desenhar_quadrado(0, 122.5, 27.5, 55, 'aquamarine', 'aquamarine', ctx1);
desenhar_quadrado(300, 136.26, -27.5, 27.5, 'aquamarine', 'aquamarine', ctx1);
desenhar_linha(0, 150, 300, 150, 0, 150, 'green', 'green', ctx1);

//meio circulo//
desenhar_arco(150, 300, 40, 0, 2*Math.PI, 'green', 'aquamarine', ctx1);

//arcos//
desenhar_arco(150, 300, 70, 0, -Math.PI/2, 'green', 'transparent', ctx1); // arco maior, em baixo, esquerdo
desenhar_arco(150, 300, 55, -Math.PI/2, 0, 'green', 'transparent', ctx1); // arco menor, em baixo, direito
desenhar_arco(150, 150, 70, Math.PI, 0, 'green', 'transparent', ctx1); // arco menor, em baixo, direito
desenhar_arco(150, 150, 85, -Math.PI/4, 0, 'green', 'transparent', ctx1); // arco menor, centro, direito
desenhar_arco(150, 150, 85, Math.PI, Math.PI + Math.PI/4, 'green', 'transparent', ctx1); // arco maior, centro, esquerdo

//circulos//
desenhar_arco(75, 225, 17, 0, 2*Math.PI, 'green', 'yellow', ctx1);
desenhar_arco(227, 225, 17, 0, 2*Math.PI, 'green', 'yellow', ctx1);
desenhar_arco(150, 110, 17, 0, 2*Math.PI, 'blue', 'aquamarine', ctx1);

//Canvas//
escrever(110, 40, "Canvas", 'black', 'black', ctx1);







