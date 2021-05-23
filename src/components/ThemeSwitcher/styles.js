import styled from 'styled-components';

const commonStyles__track = {
  padding: '6px',
  height: '100%',
  borderRadius: '15px',
};
const commonStyles__thumb = {
  background: 'blue',
  width: 15,
  height: 15,
  borderRadius: '50%',
};

export const Label = styled.label`
  color: inherit;
  display: flex;
  align-items: flex-end;
  gap: 20px;
  text-transform: uppercase;
  font-size: 0.4em;

  datalist {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    font-size: 1em;
  }
`;

export const Range = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background-color: transparent;

  &::-webkit-slider-runnable-track {
    ${commonStyles__track};
    background-color: ${(props) => props.theme.background.toggle_keypad};
  }
  &::-moz-range-track {
    ${commonStyles__track};
    background-color: ${(props) => props.theme.background.toggle_keypad};
  }
  &::-ms-track {
    ${commonStyles__track};
    background-color: ${(props) => props.theme.background.toggle_keypad};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: 0.5; //*($track-h - $thumb-d);
    ${commonStyles__thumb}
    background-color: ${(props) => props.theme.keys.toggle_equal.background}
  }
  &::-moz-range-thumb {
    ${commonStyles__thumb}
  }
  &::-ms-thumb {
    margin-top: 0;
    ${commonStyles__thumb}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
`;
