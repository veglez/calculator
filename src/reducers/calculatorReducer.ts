import result from '../utils/calculation';
interface CalculatorState {
  numbers: Array<number>;
  operators: Array<string>;
  latestOperations: Array<number>;
  allOperations: string;
  display: string;
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
};

export const types = {
  operator: 'OPERATOR',
  edit: 'EDIT',
  number: 'NUMBER',
  equal: 'EQUAL',
};

const calculatorReducer = (state: CalculatorState, action) => {
  const cifra = parseFloat(state.display);

  switch (action.type) {
    case types.edit:
      console.log(state);
      return action.payload === 'del'
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
      console.log(state);
      console.log(state.numbers.concat(state.display));
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
      };

    default:
      return { ...state, display: state.display.concat(action.payload) };
  }
};

export default calculatorReducer;

//
