import React, { useState, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { pallete } from './context/theme';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import { Calculator, Header } from './appStyles';
import Display from './components/Display/Display';
import Keypad from './components/Keypad/Keypad';
import calculatorReducer, {
  initialState,
  types,
} from './reducers/calculatorReducer';

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleInput = (e) => {
    const index = e.target.value;
    setThemeIndex(index);
  };

  const handleClick = (e) => {
    const value = e.target.value.toLowerCase();
    let tipo = 'number';

    switch (value) {
      case '=':
        tipo = types.equal;
        break;
      case 'del':
      case 'reset':
        tipo = types.edit;
        break;
      case '+':
      case '-':
      case '/':
      case 'x':
        tipo = types.operator;
        break;
      default:
        tipo = types.number;
        break;
    }

    dispatch({ type: tipo, payload: value });
  };

  return (
    <ThemeProvider theme={pallete[themeIndex]}>
      <Calculator>
        <Header>
          <h1>Calc</h1>
          <ThemeSwitcher handleInput={handleInput} />
        </Header>
        <p style={{ minHeight: 38 }}>{state.allOperations}</p>
        <Display value={state.display} />
        <Keypad handleClick={handleClick} />
      </Calculator>
    </ThemeProvider>
  );
};

export default App;
