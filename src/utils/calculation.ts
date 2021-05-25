const operation = {
  sum: (a: number, b: number) => a + b,
  sub: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
  division: (a: number, b: number) => a / b,
};

const getKeyOperation = (operatorSymbol: string) => {
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

const resolveBinary = (
  operator,
  indexOperator: number,
  numbers: Array<number>
) => {
  let cN = [...numbers];
  const a = numbers[indexOperator];
  const b = numbers[indexOperator + 1];
  const result = operator(a, b);

  cN.splice(indexOperator, 2, result);

  return cN;
};

//[2,3,4,5]  [+,*,+]
const results = (
  numbersArray: Array<number>,
  operatorsArray: Array<string>
) => {
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
  return numbers[0].toString();
};

export default results;