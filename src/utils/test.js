const operation = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  multiply: (a, b) => a * b,
  division: (a, b) => a / b,
};

const getKeyOperation = (operatorSymbol) => {
  switch (operatorSymbol) {
    case '+':
      return 'sum';
    case '-':
      return 'sub';
    case 'x':
      return 'multiply';
    case '/':
      return 'division';

    default:
      break;
  }
};

const resolveBinary = (operation, indexOperator, numbers) => {
  let cN = [...numbers];
  const a = numbers[indexOperator];
  const b = numbers[indexOperator + 1];
  const result = operation(a, b);

  cN.splice(indexOperator, 2, result);

  return cN;
};

//[2,3,4,5]  [+,*,+]
const result = (numbersArray, operatorsArray) => {
  let numbers = [...numbersArray];
  let opArr = [...operatorsArray];
  const hierarchy = ['x', '/', '+', '-'];

  hierarchy.forEach((oper) => {
    let index = opArr.indexOf(oper);
    while (index !== -1) {
      let operKey = getKeyOperation(oper);
      numbers = resolveBinary(operation[operKey], index, numbers);
      opArr.splice(index, 1);
      index = opArr.indexOf(oper);
    }
    opArr = opArr.filter((c, i) => i !== index);
  });
  return numbers;
};

result([2, 3, 4, 5], ['+', 'x', '+']);
