import styled from 'styled-components';
import { InputProps } from '@interfaces/props';

const getInputStyle = (props: InputProps) => {
  let placeholderColor; let backgroundColor;
  let fontSize; let fontWeight;
  let width = '70%'; let height = '20px';
  switch (props.variant) {
    case 'search':
      placeholderColor = '#999';
      backgroundColor = 'white';
      fontSize = '21px';
      fontWeight = '500';
      width = '85%';
      height = '100%';
      break;
    default:
      placeholderColor = '#999';
      backgroundColor = '#ededed';
      height = '20ox';
      width = '225px';
      fontSize = '14px';
      fontWeight = '400';
      break;
  }

  return `
    background-color: ${backgroundColor};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    width: ${width};
    height: ${height};
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${placeholderColor};
  }
  `;
};

export const StyledInput = styled.input<InputProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 9px 15px;
  border: none;
  ${(props) => getInputStyle(props)};
  border-radius: 4px;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
`;

export default StyledInput;
