import styled, { css } from 'styled-components';

const size = 60;
const shadow = 'inset 0px -4px 0px 0px ';

// color: white;
export const StyledKey = styled.button`
  width: ${({ span }) => {
    return `${span * size}px`;
  }};
  width: 100%;
  height: ${size}px;
  font-size: var(--font-size-numbers);
  font-family: var(--family);
  border: none;
  outline: none;
  border-radius: 4px;
  color: inherit;

  ${(props) => {
    if (props.value === 'DEL' || props.value === 'RESET') {
      return css`
        background-color: ${props.theme.keys.del_reset.background};
        box-shadow: ${shadow} ${props.theme.keys.del_reset.shadow};
        font-size: 0.5em;
        color: ${props.theme.text.main};
      `;
    }
    if (props.value === '=') {
      return css`
        background-color: ${props.theme.keys.toggle_equal.background};
        box-shadow: ${shadow} ${props.theme.keys.toggle_equal.shadow};
        font-size: 0.5em;
        color: ${props.theme.text.main};
      `;
    }
    return css`
      box-shadow: ${shadow} ${props.theme.keys.normal.background};
      background-color: ${props.theme.keys.normal.shadow};
    `;
  }};
`;
