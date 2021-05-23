import React from 'react';
import { Screen, Value } from './styles';

const operationsNumber = new Intl.NumberFormat('en-US', {
  // minimumFractionDigits: 2,
  notation: 'standard',
});

const Display = ({ value }) => {
  return (
    <Screen>
      {/* <Value>{operationsNumber.format(value)}</Value> */}
      <Value>{value}</Value>
    </Screen>
  );
};

export default Display;

Display.defaultProps = {
  value: 785613456789,
};
