/* let nome = prompt("Insira seu nome: ");
let idade = parseInt(prompt("Insira sua idade: "));
let ano_atual = 2024;

let ano_nascimento = ano_atual - idade;

let resposta = "olá, " + nome + ". O seu ano de nascimento é: " + ano_nascimento;

document.getElementById("resp").innerHTML = resposta; */

/* function soma(a, b){
    let c = a + b;
    return c;
}

function mult(a, b){
    let c = a * b;
    return c;
} */

//let x = parseInt(prompt("Insira o primeiro valor"));
//let y = parseInt(prompt("Insira o primeiro valor"));
//document.getElementById("resp").innerHTML = soma(x, y);

/* function ex2(){
    numero = document.getElementById("i1").value;
    document.getElementById("r2").innerHTML = mult(numero, 3);
}



function ex3(){
    let numero1 = parseInt(document.getElementById("ex3_num1").value);
    let numero2 = parseInt(document.getElementById("ex3_num2").value);
    document.getElementById("r3").innerHTML = soma(numero1, numero2);
} */



/* function ex4(){
    
    let numero2 = parseInt(document.getElementById("ex4_num2").value);

    if(numero1 < 0 || numero2 < 0){
        document.getElementById("r4").innerHTML = soma(numero1, numero2);
    }else{
        document.getElementById("r4").innerHTML = mult(numero1, numero2);
    }
} */


let numb_ale = Math.floor(Math.random()*100);

function ex5(){
    let advnumb = parseInt(document.getElementById("adv_user").value);

    document.getElementById("ID_DO_ELEMENTO").innerHTML = `Não desista !!!`;
    
    /* document.getElementById("ID_DO_ELEMENTO").innerHTML = Math.floor(Math.random()*100); */

    if(advnumb === numb_ale){
        document.getElementById("ID_DO_ELEMENTO").style.setProperty("background-color", "green");
        document.getElementById("ID_DO_ELEMENTO").innerHTML = "Parabéns!";
        numb_ale = Math.floor(Math.random() * 100);

    }else if(advnumb < numb_ale){
        document.getElementById("ID_DO_ELEMENTO").style.setProperty("background-color", "red");
        document.getElementById("ID_DO_ELEMENTO").innerHTML = `Número escolhido MENOR ao Gerado. Não desista !!!`;
    
    }else if(advnumb > numb_ale){
        document.getElementById("ID_DO_ELEMENTO").style.setProperty("background-color", "red");
        document.getElementById("ID_DO_ELEMENTO").innerHTML = `Número escolhido MAIOR ao Gerado. Não desista !!!`;
    }

}

function mostraadvnumb() {
    document.getElementById("ID_DO_ELEMENTO").innerHTML = `Numero Gerado: ${numb_ale}`;
    // Gerar um novo número aleatório após revelar o número
    //numeroAleatorio = Math.floor(Math.random() * 100);
}

//console.log(x);