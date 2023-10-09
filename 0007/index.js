// 7 - Faça uma função que ordene uma lista de números.

const listOfNumbers = (list) => {
  list.sort((a, b) => {
    return a - b;
  });
  return list;
};

const numbers = [89, 665, 355, 456, 47];
console.log(listOfNumbers(numbers));
