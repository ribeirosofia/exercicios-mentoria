/*
Monte uma calculadora que possua um menu inicial.
1-Nesse menu, deve aparecer primeiramente um espaço para
digitar o primeiro número.
2-Depois, a calculadora deve ser capaz de ler os botões de 
operação.
3- Deve aparecer um espaço para digitar o segundo número.
4- Para finalizar, a calculadora deve ser capaz de 
finalizar o cálculo ao apertar o botão de enter.
5- A calculadora deve ser capaz de continuar o cálculo
até o usuário dar uma instrução de parada (loop).
6- A calculadora deve prever caso o usuário 
utilize um operador diferente do operador sugerido
e enviar uma mensagem de erro.
7- A calculadora deve emitir uma mensagem de erro
em caso de divisão cujo o segundo número seja igual a zero
e impedir que o cálculo seja feito.

*/

const prompt = require("prompt-sync")({ sigint: true });

const createMenu = (msg) => {
  return prompt(msg);
};
const add = (a, b) => {
  return a + b;
};
const minus = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  if (b !== "0") {
    return a / b;
  }
};

const calc = () => {
  const num1 = Number(createMenu("Digite o primeiro número: "));
  const operator = createMenu("Digite a operação: ");
  const num2 = Number(createMenu("Digite o segundo número: "));
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Pelo menos um destes números é inválido. Digite novamente.");
  }

  if (operator === "+") {
    return console.log(`O resultado é: ${add(num1, num2)}`);
  } else if (operator === "-") {
    return console.log(`O resultado é: ${minus(num1, num2)}`);
  } else if (operator === "*") {
    return console.log(`O resultado é: ${multiply(num1, num2)}`);
  } else if (operator === "/") {
    if (num2 === 0) {
      return console.log("Cálculo inválido. Impossível divisão por zero");
    } else {
      return console.log(`O resultado é:${divide(num1, num2)}`);
    }
  } else {
    console.log("Operador inválido. Digite novamente.");
  }
};

calc();
