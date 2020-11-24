import styled from 'styled-components';

const getInputStyle = (props) => {
  let placeholderColor; let backgroundColor;
  let fontSize; let fontWeight;

  switch (props.variant) {
    case 'search':
      placeholderColor = '#999';
      backgroundColor = 'white';
      fontSize = '21px';
      fontWeight = '500';
      break;
    default:
      placeholderColor = '#999';
      backgroundColor = '#ededed';
      fontSize = '14px';
      fontWeight = '400';
      break;
  }

  return `
    background-color: ${backgroundColor};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${placeholderColor};
  }
  `;
};

export const StyledInput = styled.input`
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
