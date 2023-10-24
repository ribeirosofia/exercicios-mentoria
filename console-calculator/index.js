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
8- Transformar o resultado em primeiro operador para que o cálculo
continue acontecendo e só pare quando o usuário desejar parar.

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
  let shouldContinue = true;
  let firstCalculation = true;

  do {
    let previousResult = 0;
    let result;

    let num1;
    let operator;
    let num2;

    if (firstCalculation) {
      num1 = Number(createMenu("Digite o primeiro número: "));
      firstCalculation = false;
    } else if (shouldContinue) {
      num1 = previousResult;
    } else {
      num1 = Number(createMenu("Digite o primeiro número: "));
    }

    operator = createMenu("Digite a operação: ");
    num2 = Number(createMenu("Digite o segundo número: "));

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Pelo menos um destes números é inválido. Digite novamente.");
    } else {
      switch (operator) {
        case "+":
          result = add(num1, num2);
          break;
        case "-":
          result = minus(num1, num2);
          break;
        case "*":
          result = multiply(num1, num2);
          break;
        case "/":
          if (num2 === 0) {
            console.log("Cálculo inválido. Impossível divisão por zero");
            break;
          } else {
            result = divide(num1, num2);
            break;
          }
        default:
          console.log("Operador inválido. Digite novamente.");
          break;
      }
    }
    console.log(result);
    previousResult = result;

    const shouldExitOrContinue =
      createMenu(`Deseja sair? Digite 'S' caso queira parar. 
    Caso queira continuar, digite 'C': `);
    if (shouldExitOrContinue.trim().toUpperCase() === "S") {
      shouldContinue = false;
    } else if (shouldExitOrContinue.trim().toUpperCase() === "C") {
      const userInput =
        createMenu(`Deseja utilizar o último resultado para continuar
      a conta?
      Se sim, digite 'C'. Caso queira um novo calculo, digite 'N': `);
      if (userInput.trim().toUpperCase() === "N") {
        shouldContinue = true;
        firstCalculation = true;
      } else if (userInput.trim().toUpperCase() === "C") {
        shouldContinue = true;
      }
    }
  } while (shouldContinue);
};

calc();
