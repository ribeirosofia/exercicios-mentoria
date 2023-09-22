// 3 - Faça um Programa que peça um número inteiro
// e determine se ele e par ou ímpar.

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else if (num % 2 !== 0) {
    return "odd";
  } else {
    return "not a number";
  }
}

console.log(evenOrOdd(66));
