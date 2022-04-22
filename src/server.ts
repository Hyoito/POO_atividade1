import { setUncaughtExceptionCaptureCallback } from "process";

const prompt = require("prompt-sync")();

// 1 questão
let nota1 = prompt("Informe a nota do trabalho de laboratorio: ");
let nota2 = prompt("Informe a nota da avaliação semestral: ");
let nota3 = prompt("Informe a nota do exame final: ");

let peso1 = Number(nota1) * 2;
let peso2 = Number(nota2) * 3;
let peso3 = Number(nota3) * 5;

let media = peso1 + peso2 + peso3 / 3;

console.log(`Media ${media}`);

if (media >= 8){
    console.log(`Conceito A`)
}else if (media >= 7){
    console.log(`Conceito B`)
}else if (media >= 6){
    console.log(`Conceito C`)
}else if (media >=5){
    console.log(`Conceito D`)
}else{
    console.log(`Conceito E`)
}

// 2 questão
// let numero = new Array(3)
// for (var i = 0; i < numero.length; i++){
//     numero[i] = prompt(`Informe o ${i+1} numero:`);
// }
// console.log(`${numero.sort()}`);


//3 questão
// let numero = new Array(4)


// for (var i = 0; i < numero.length; i++){
//     numero[i] = prompt(`Informe o ${i+1} numero:`);
// }

// if (numero[0] > numero [1]){
//     console.log("Errado digite novamente os numero")
// }else if( numero[1] > numero[2]){
//     console.log("Errado digite novamente os numero")
// }else if( numero[0] > numero[2]){
//     console.log("Errado digite novamente os numero")
// }else{
//     console.log(`${numero.reverse()}`);
// }

//4 questão
// let codigo = prompt("Informe o número")

// let salario = prompt("Informe o salario")

// switch (Number(codigo)) {
//     case 1:
//         console.log(`Escrituário: aumento de 50%:`, salario * 1.5);
//         break;
//     case 2:
//         console.log(`Secretário: aumento de 35%:`, salario * 1.35);
//         break;
//     case 3:
//         console.log(`Caixa : aumento de 20%:`, salario * 1.2);
//         break;
//     case 4:
//         console.log(`Gerente : aumento de 10%:`, salario * 1.1);
//         break;
//     case 5:
//         console.log(`Diretor : aumento de 0%:`, salario);
//         break;
//     default:
//         break;
// }

// 5 questão
// let qtN = 0
// let soma = 0
// let maior = 0
// let menor = 0 
// let qtI = 0
// let qtP = 0
// let somaP = 0

// let numero = Number(prompt("Digite um numero:"))

// function calcular(){
//     maior = numero
//     menor = numero
//     while (numero != 30000){
//         qtN += 1
//         soma += numero
//         numero = Number(prompt("Digite um numero"))
        
//         if (numero > maior){
//             maior = numero
//         }else if (numero < menor){
//             menor = numero
//         }       
//         if (numero % 2 == 0){
//             qtP += 1
//             somaP += numero
//         }else{
//           qtI += 1
//         }
//     }
//     console.log(`A quantidade de número é ${qtN}`)
//     console.log(`A media é ${(soma/qtN)}`)
//     console.log(`O maior número é ${maior}`)
//     console.log(`O menor número é ${menor}`)
//     console.log(`A media de número pares é ${somaP / qtP}`)
//     console.log(`A porcentagem de número impares é ${((qtI / qtN) *100)}%`)

// }
// calcular()
