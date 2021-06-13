import styled from 'styled-components';

export const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: min(100%, 480px);
  height: min(100vh, auto);
  /* max-width: 470px; */
  margin: 50px auto;
  border: 1px solid steelblue;
  color: ${(props) => props.theme.text.main};
  background-color: ${(props) => props.theme.background.main};
  padding: 30px 24px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1em;
    text-transform: lowercase;
  }
`;

export const OperationsDisplay = styled.p`
  overflow-x: scroll;
  min-height: 38px;

  &::-webkit-scrollbar {
    visibility: hidden;
    display: none;
  }
`;
