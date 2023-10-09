// 8 - Faça um programa que apresente um menu de opções
//  para o cálculo das seguintes operações entre dois
// números: adição, subtração, multiplicação e divisão.
//  O programa deve usar laços de repetição para
// possibilitar ao usuário a escolha da operação desejada,
//  a exibição do resultado e a volta ao menu de opções.
//  O programa só termina quando for escolhida a opção
// de saída.
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
  if (b !== 0) {
    return a / b;
  } else {
    return console.log("Divisão inválida. Impossível divisão por zero.");
  }
};

do {
  console.log("Escolha uma das seguintes operações:");
  console.log("1. Adição");
  console.log("2. Subtração");
  console.log("3. Multiplicação");
  console.log("4. Divisão");
  console.log("5. Sair");

  const operator = parseInt(prompt("Digite a operação desejada: "));

  if (operator === 5) {
    console.log("Fim do cálculo. Volte sempre.");
  } else if (operator <= 4 || operator >= 1) {
    const num1 = createMenu("Digite o primeiro número: ");
    const num2 = createMenu("Digite o segundo número: ");
    switch (operator) {
      case 1:
        console.log(`O resultado é ${add(num1, num2)}`);
        break;
      case 2:
        console.log(`O resultado é ${minus(num1, num2)}`);
        break;
      case 3:
        console.log(`O resultado é ${multiply(num1, num2)}`);
        break;
      case 4:
        console.log(`O resultado é ${divide(num1, num2)}`);
        break;
    }
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Pelo menos um destes números é inválido. Digite novamente.");
    }
  } else {
    console.log("Cálculo inválido. Tente novamente um número entre 1 a 5.");
  }
} while (true);
