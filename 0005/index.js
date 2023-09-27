// 5 - Faça um programa que receba a idade de dez
// pessoas e que calcule e mostre a quantidade
// de pessoas com idade maior ou igual a 18 anos.

const prompt = require("prompt-sync")({ sigint: true });

let quantidade = 0;

for (let i = 0; i <= 10; i++) {
  let idade = parseInt(prompt("Insira uma idade: "));

  if (idade >= 18) {
    quantidade++;
  }
}

console.log(
  `Quantidade de pessoas com idade maior ou igual a 18 anos: ${quantidade}`
);
