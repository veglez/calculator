const initialState = {
  numbers: [],
  operators: [],
  display: '',
  allOperations: '',
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'operator':
      if (state.display) return { ...state };
      break;

    default:
      break;
  }
};

export default calculatorReducer;

//
