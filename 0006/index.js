// 6 - Faça um programa que recebe a altura de um
// triangulo em um número inteiro e imprima-o
// utilizando asteriscos. Veja o Exemplo:

// Entrada: 5

// *
// **
// ***
// ****
// *****

const prompt = require("prompt-sync")({ sigint: true });

let altura = parseInt(prompt("Insira uma altura: "));

for (let i = 0; i < altura; i++) {
  let linha = "*".repeat(i);
  console.log(linha);
}
