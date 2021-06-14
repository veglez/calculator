import React, { useState, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { pallete } from './context/theme';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import { Calculator, Header, OperationsDisplay } from './appStyles';
import Display from './components/Display/Display';
import Keypad from './components/Keypad/Keypad';
import calculatorReducer, {
  initialState,
  types,
} from './reducers/calculatorReducer';

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const keyboard = React.useRef(null);

  const handleKeyboard = (e) => {
    let pressedKey = e.key;
    let tipo = 'number';

    switch (pressedKey) {
      case 'Enter':
        tipo = types.equal;
        dispatch({ type: tipo, payload: pressedKey });
        break;
      case 'Delete':
      case 'Backspace':
      case 'Escape':
        tipo = types.edit;
        dispatch({ type: tipo, payload: pressedKey });
        break;
      case '+':
      case '-':
      case '/':
      case '*':
        tipo = types.operator;
        dispatch({ type: tipo, payload: pressedKey });
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case '.':
        tipo = types.number;
        dispatch({ type: tipo, payload: pressedKey });
        break;
      default:
    }
  };

  React.useEffect(() => {
    keyboard.current.focus();
    document.body.addEventListener('keydown', handleKeyboard);
    return () => {
      document.body.removeEventListener('keydown', handleKeyboard);
    };
  }, []);

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
      <Calculator ref={keyboard}>
        <Header>
          <h1>Calc</h1>
          <ThemeSwitcher handleInput={handleInput} />
        </Header>
        <OperationsDisplay>{state.allOperations}</OperationsDisplay>
        <Display value={state.display} />
        <Keypad handleClick={handleClick} />
      </Calculator>
    </ThemeProvider>
  );
};

export default App;
