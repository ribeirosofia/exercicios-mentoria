// 2 - Faça um programa que leia três números
// e mostre o maior e o menor deles;

const prompt = require("prompt-sync")({ sigint: true });

let inputA = Number(prompt("Insira número A: "));
let inputB = Number(prompt("Insira número B: "));
let inputC = Number(prompt("Insira número C: "));

if (isNaN(inputA) || isNaN(inputB) || isNaN(inputC)) {
  console.log("Pelo menos um destes valores é inválido. Digite novamente.");
} else {
    let numA = Number(inputA);
    let numB = Number(inputB);
    let numC = Number(inputC);
    
    let biggerABC = Math.max(numA, numB, numC);
    let smallerABC = Math.min(numA, numB, numC);
    
    console.log(`O maior número é ${biggerABC} e o menor deles é ${smallerABC}`);
}


