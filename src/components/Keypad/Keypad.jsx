import React from 'react';
import Key from '../Key/Key';
import { KeypadContainer } from './styles';

const keys = [
  7,
  8,
  9,
  'DEL',
  4,
  5,
  6,
  '+',
  1,
  2,
  3,
  '-',
  '.',
  0,
  '/',
  'x',
  'RESET',
  '=',
];

const Keypad = ({ handleClick }) => {
  return (
    <KeypadContainer>
      {keys.map((key, i) => {
        return <Key value={key} key={i} handleClick={handleClick} />;
      })}
    </KeypadContainer>
  );
};

export default Keypad;
