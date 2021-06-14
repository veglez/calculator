import result from '../utils/calculation';
interface CalculatorState {
  numbers: Array<number>;
  operators: Array<string>;
  latestOperations: Array<number>;
  allOperations: string;
  display: string;
  equal: boolean;
}

interface Action {
  type: string;
  action: string;
}

export const initialState: CalculatorState = {
  numbers: [],
  operators: [],
  latestOperations: [],
  allOperations: '',
  display: '',
  equal: false,
};

export const types = {
  operator: 'OPERATOR',
  edit: 'EDIT',
  number: 'NUMBER',
  equal: 'EQUAL',
};

const calculatorReducer = (state: CalculatorState, action: any) => {
  const cifra = parseFloat(state.display);
  let symbol = action.payload === '*' ? 'x' : action.payload;

  switch (action.type) {
    case types.edit:
      return action.payload === 'del' ||
        action.payload === 'Backspace' ||
        action.payload === 'Delete'
        ? {
            ...state,
            display: state.display.substring(0, state.display.length - 1),
          }
        : initialState;

    case types.operator:
      console.log(action.payload);
      return isNaN(cifra) || action.payload === '0'
        ? { ...state } //si display vacio entonces error
        : state.equal
        ? {
            ...state,
            equal: false,
            numbers: [...state.numbers, parseFloat(state.display)],
            operators: [...state.operators, symbol],
            allOperations: state.display + symbol,
            display: '',
          }
        : {
            ...state,
            numbers: [...state.numbers, parseFloat(state.display)],
            operators: [...state.operators, symbol],
            allOperations: state.allOperations.concat(state.display, symbol),
            display: '',
          };

    case types.equal:
      return state.equal
        ? state
        : {
            ...state,
            allOperations: state.allOperations.concat(state.display, '  =  '),
            display: result(
              state.numbers.concat(parseFloat(state.display)),
              state.operators
            ),
            latestOperations: [
              ...state.latestOperations,
              parseFloat(state.allOperations + state.display),
            ],
            numbers: [],
            operators: [],
            equal: true,
          };

    default:
      return action.payload === '.' && state.display.includes('.')
        ? state
        : state.equal
        ? { ...state, display: action.payload, equal: false, allOperations: '' }
        : { ...state, display: state.display.concat(action.payload) };
  }
};

export default calculatorReducer;

//
