// 1 - Faça um programa para a leitura de duas notas parciais de um aluno.
// 	•	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// 	•	A mensagem "Aprovado com Distinção", se a média for igual a dez;
// •	A mensagem "Reprovado" se a média for menor de do que sete;
// Corrigir números negativos
// Aceitar somente números positivos
// Mostrar nota final do usuário
// Ao receber um input, mostrar ao usuário se for um valor inválido
// e solicitar o valor novamente

const prompt = require("prompt-sync")({ sigint: true });

const notaA = Number(prompt("Insira nota A: "));
const notaB = Number(prompt("Insira nota B: "));

if (isNaN(notaA) || isNaN(notaB)) {
  console.log(
    "Pelo menos uma destas notas é inválida. Digite um número válido de 0 a 10"
  );
} else {
  let media = ((notaA + notaB) / 2).toFixed(2);

  if (media == 10) {
    console.log(`Aprovado com Distinção: ${media}`);
  } else if (media >= 7) {
    console.log(`Aprovado:  ${media}`);
  } else if (0 <= media < 7) {
    console.log(`Reprovado:  ${media}`);
  } else {
    console.log(`Nota inválida`);
  }
}
