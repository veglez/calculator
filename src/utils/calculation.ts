interface Operation {
  [key: string]: any;
  sum: { function: (a: number, b: number) => number; level: number };
  sub: { function: (a: number, b: number) => number; level: number };
  multiply: { function: (a: number, b: number) => number; level: number };
  division: { function: (a: number, b: number) => number; level: number };
}
//level indica el rango de jerarquía matematica
//mientras mayor sea el nivel, se debe realizar esa operación antes
const operation: Operation = {
  sum: { function: (a: number, b: number) => a + b, level: 0 },
  sub: { function: (a: number, b: number) => a - b, level: 0 },
  multiply: { function: (a: number, b: number) => a * b, level: 1 },
  division: { function: (a: number, b: number) => a / b, level: 1 },
};

const getKeyOperation = (operatorSymbol: string) => {
  //se convierte el símbolo a una palabra que pueda usarse como llave
  //para el objecto operation
  switch (operatorSymbol) {
    case '+':
      return 'sum';
    case '-':
      return 'sub';
    case 'x':
    case '*':
      return 'multiply';
    case '/':
      return 'division';

    default:
      break;
  }
};

const resolveBinary = (
  operator: any,
  indexOperator: number,
  numbers: Array<number>
) => {
  let cN = [...numbers];
  const a = numbers[indexOperator];
  const b = numbers[indexOperator + 1];
  const result = operator(a, b);
  // console.log(`la operacion entre ${a} y ${b} es: ${result}`);

  cN.splice(indexOperator, 2, result);

  return cN;
};

const results = (
  numbersArray: Array<number>,
  operatorsArray: Array<string>
) => {
  let opArr = operatorsArray; //se hace una copia para poder mutar
  let numbers = numbersArray; //se hace una copia para poder mutar
  while (opArr.length > 1) {
    let operKey = getKeyOperation(opArr[0]); //se obtiene la clave
    let operKey2 = getKeyOperation(opArr[1]);
    //se evalua la jerarquia de la operación multiplicación | div > suma | resta
    if (operation[operKey].level < operation[operKey2].level) {
      numbers = resolveBinary(operation[operKey].function, 1, numbers);
      opArr.splice(1, 1); //se muta el array de operandos, se elimina el que acaba de usarse
    } else {
      numbers = resolveBinary(operation[operKey].function, 0, numbers);
      opArr.splice(0, 1);
    }
  }
  //para este punto solo queda un operador y 2 numeros, se efectúa la última
  //operación y se vuelve a mutar el array de operandos para dejarlo vacío
  let operKey = getKeyOperation(opArr[0]);
  numbers = resolveBinary(operation[operKey].function, 0, numbers);
  opArr.splice(0, 1);
  return numbers[0].toString();
};

export default results;
