"use strict"

let valorCalculado = null;
let arrayValores = [];

function obtendoValoresInput() {
    const primeiroValor = document.querySelector(".primeiro-valor input").value;
    const operacao = document.querySelector(".operacao input").value;
    const segundoValor = document.querySelector(".segundo-valor input").value;

    arrayValores = [parseInt(primeiroValor), parseInt(segundoValor)];
    verificarInputs(primeiroValor, operacao, segundoValor);


}

//Função para trocar os inputs vazios para undefined
function verificarInputs(primeiroValor, operacao, segundoValor) {
    if (primeiroValor === "") {
        primeiroValor = undefined;
    }

    if (operacao === "") {
        operacao = undefined;
    }

    if (segundoValor == "") {
        segundoValor = undefined;
    }

    calcular(primeiroValor, operacao, segundoValor);
}

// ====== DEFAULT PARAMETERS ======

// Antes do ES6
// function calcular(primeiroValor, operacao, segundoValor) {
//     if (typeof primeiroValor === 'undefined') {
//         primeiroValor = 0;
//     } 

//     if (typeof operacao === 'undefined') {
//         operacao = "+";
//     } 

//     if (typeof segundoValor === 'undefined') {
//         segundoValor = 0;
//     } 



//     if (operacao === "+") {
//         valorCalculado = parseInt(primeiroValor) + parseInt(segundoValor);
//     } else if (operacao === "-") {
//         valorCalculado = parseInt(primeiroValor) - parseInt(segundoValor);
//     } else if (operacao === "*") {
//         valorCalculado = parseInt(primeiroValor) * parseInt(segundoValor);
//     } else if (operacao === "/") {
//         valorCalculado = parseInt(primeiroValor) / parseInt(segundoValor);
//     }
//     construindoHTML(valorCalculado);
// }



// Depois do ES6
function calcular(primeiroValor = 0, operacao = "+", segundoValor = 0) {

    if (operacao === "+") {
        valorCalculado = parseInt(primeiroValor) + parseInt(segundoValor);
    } else if (operacao === "-") {
        valorCalculado = parseInt(primeiroValor) - parseInt(segundoValor);
    } else if (operacao === "*") {
        valorCalculado = parseInt(primeiroValor) * parseInt(segundoValor);
    } else if (operacao === "/") {
        valorCalculado = parseInt(primeiroValor) / parseInt(segundoValor);
    }

    arrayValores.push(valorCalculado);

    // destructuring();

    // printandoArrayConsole();

    construindoHTML(valorCalculado);
}


// ===== FOR, FOREACH, FOR... OF =====

function printandoArrayConsole() {

    // Usando for
    // for (let i = 0; i < arrayValores.length; i++) {
    //     console.log(arrayValores[i]);
    //     }

    // Usando forEach
    // arrayValores.forEach(valor => console.log(valor));

    // Usando for... of
    for (let valor of arrayValores) {
        console.log(valor);
    }
}


// ===== DESTRUCTURING =====

function destructuring() {
    //Antes do ES6
    // const numero1 = arrayValores[0];
    // const numero2 = arrayValores[1];
    // const valorFinal = arrayValores[2];

    // Depois do ES6
    const [numero1, numero2, valorFinal] = arrayValores;
    console.log(`Numero 1 é: ${numero1}`);
    console.log(`Numero 2 é: ${numero2}`);
    console.log(`Valor Final é: ${valorFinal}`);
}


// ===== TAMPLATE STRINGS =====

// Antes do ES6
// function construindoHTML(valorCalculado) {
//         const valorCalculadoDiv = document.querySelector(".valor-calculado");

//         valorCalculadoDiv.innerHTML = ("<p>" + "O" + " " + "Resultado" + " " + "é:" + valorCalculado + "</p>");

//     }



// Depois do ES6
function construindoHTML(valorCalculado) {
    const valorCalculadoDiv = document.querySelector(".valor-calculado");

    valorCalculadoDiv.innerHTML = (`<p>O Resultado é: ${valorCalculado}</p>`);
}



