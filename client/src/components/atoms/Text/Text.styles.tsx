import styled from 'styled-components';

const getTextStyle = (props) => {
  let color;

  switch (props.variant) {
    case 'primary':
      color = '#999';
      break;
    case 'secondary':
      color = 'white';
      break;
    default:
      color = 'black';
      break;
  }

  return `
    color: ${color};
  `;
};

export const StyledText = styled.p`
  ${(props) => getTextStyle(props)};
  font-size: 15px;
`;

export default StyledText;
