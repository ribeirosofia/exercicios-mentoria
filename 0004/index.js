// 4 - Faça um programa que lê as duas notas parciais
// obtidas por um aluno numa disciplina ao longo
//  de um semestre, e calcule a sua média.
// A atribuição de conceitos obedece à tabela abaixo:
// Média de aproveitamento        Conceito
// Entre 9.0 e 10.0                  A
// Entre 7.5 e 9.0                   B
// Entre 6.0 e 7.5                   C
// Entre 4.0 e 6.0                   D
// Entre 4.0 e 0                     E

const prompt = require("prompt-sync")({ sigint: true });

const notaA = Number(prompt("Insira nota A: "));
const notaB = Number(prompt("Insira nota B: "));

if (isNaN(notaA) || isNaN(notaB)) {
  console.log(
    "Pelo menos uma destas notas é inválida. Digite um número válido de 0 a 10"
  );
} else {
  let media = ((notaA + notaB) / 2).toFixed(2);

  if (media >= 9.0 && media <= 10.0) {
    console.log("Conceito A");
  } else if (media >= 7.5 && media < 9.0) {
    console.log("Conceito B");
  } else if (media >= 6.0 && media < 7.5) {
    console.log("Conceito C");
  } else if (media >= 4.0 && media < 6.0) {
    console.log("Conceito D");
  } else if (media >= 0 && media < 4.0) {
    console.log("Conceito E");
  } else {
    console.log("Nota inválida");
  }
}
