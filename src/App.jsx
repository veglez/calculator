import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { pallete } from './context/theme';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import { Calculator, Header } from './appStyles';
import Display from './components/Display/Display';
import Keypad from './components/Keypad/Keypad';

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [displayValue, setDisplayValue] = useState({
    value: '',
    result: false,
  });

  const handleInput = (e) => {
    const index = e.target.value;
    setThemeIndex(index);
  };

  const handleClick = (e) => {
    const value = e.target.value.toLowerCase();
    switch (value) {
      case 'del':
        setDisplayValue((p) => {
          if (p.result) return { result: false, value: '' };
          return { ...p, value: p.value.substring(0, p.value.length - 1) };
        });
        break;
      case 'reset':
        setDisplayValue((p) => {
          return { ...p, value: '' };
        });
        break;
      case '=':
        setDisplayValue((p) => {
          const multi = p.value.includes('x');
          let operation = p.value;
          if (multi) operation = p.value.replace('x', '*');
          return { result: true, value: eval(operation) };
        });
        break;
      default:
        setDisplayValue((p) => {
          if (p.result) return { result: false, value: ' '.concat(value) };
          return { ...p, value: p.value + value };
        });
        break;
    }
  };

  return (
    <ThemeProvider theme={pallete[themeIndex]}>
      <Calculator>
        <Header>
          <h1>Calc</h1>
          <ThemeSwitcher handleInput={handleInput} />
        </Header>
        <Display value={displayValue.value} />
        <Keypad handleClick={handleClick} />
      </Calculator>
    </ThemeProvider>
  );
};

export default App;
