import styled from 'styled-components';

export const KeypadContainer = styled.div`
  border-radius: 10px;
  display: grid;
  gap: 10px;
  grid: repeat(5, 1fr) / repeat(4, 60px);
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.theme.text.secondary};
  background-color: ${(props) => props.theme.background.toggle_keypad};

  button:nth-last-child(2) {
    grid-column: 1 / span 2;
  }

  button:last-child {
    grid-column: 3 / span 2;
  }
`;
