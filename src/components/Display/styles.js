import styled from 'styled-components';

export const Screen = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.theme.background.screen};
  border-radius: 10px;
  font-size: 32px;
  padding: 0 0.5em;
`;

export const Value = styled.p`
  overflow: scroll;
`;
