import React, { useState } from 'react';
import { Label, Range, Container } from './styles';

const ThemeSwitcher = ({ handleInput }) => {
  const [value, setValue] = useState(0);
  return (
    <Label>
      <span>theme</span>

      <Container>
        <datalist id='themeLabels'>
          <option value='0' label='1'></option>
          <option value='1' label='2'></option>
          <option value='2' label='3'></option>
        </datalist>
        <Range
          list='themeLabels'
          type='range'
          min={0}
          max={2}
          value={value}
          name='switcher'
          onChange={(e) => setValue(e.target.value)}
          onInput={handleInput}
          // id='switcher'
        />
      </Container>
    </Label>
  );
};
export default ThemeSwitcher;
