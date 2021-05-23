import React from 'react';
import { StyledKey } from './styles';

const Key = ({ value, handleClick }) => {
  return (
    <StyledKey value={value} onClick={handleClick}>
      {value}
    </StyledKey>
  );
};

export default Key;

// Key.defaultProps = {
//   span: 1,
// };
