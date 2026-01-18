
"use strict"
const readline = require('readline');
// попробовал вывод в консоль. Почему то через терминал работает а через консоль не дает вводить

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solveEquation(a, b, c) {

  let arr = [];

  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const root1 = (-b + sqrtDiscriminant) / (2 * a);
    const root2 = (-b - sqrtDiscriminant) / (2 * a);

    arr.push(root1, root2);
    return arr;
  }
}

rl.question('Введите a: ', (a) => {
  rl.question('Введите b: ', (b) => {
    rl.question('Введите c: ', (c) => {
      const result = solveEquation(
        parseFloat(a), 
        parseFloat(b), 
        parseFloat(c)
      );
      console.log('Результат', result);
      rl.close();
    });
  });
});

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;
  const loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  const monthlyPayment = loanBody * (monthlyPercent + 
    (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1))
  );
  
  const totalPayment = monthlyPayment * countMonths + contribution;

  return Math.round(totalPayment * 100) / 100;
}