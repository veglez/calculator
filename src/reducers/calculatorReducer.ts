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
      return isNaN(cifra)
        ? { ...state } //si display vacio entonces error
        : {
            ...state,
            numbers: [...state.numbers, parseFloat(state.display)],
            operators: [...state.operators, action.payload],
            allOperations: state.allOperations.concat(
              state.display,
              action.payload
            ),
            display: '',
          };

    case types.equal:
      return {
        ...state,
        // display: eval(state.allOperations.concat(state.display)),
        display: result(
          state.numbers.concat(parseFloat(state.display)),
          state.operators
        ),
        allOperations: '',
        latestOperations: [
          ...state.latestOperations,
          parseFloat(state.allOperations + state.display),
        ],
        numbers: [],
        operators: [],
        equal: true,
      };

    default:
      return state.equal
        ? { ...state, display: action.payload, equal: false }
        : { ...state, display: state.display.concat(action.payload) };
  }
};

export default calculatorReducer;

//
