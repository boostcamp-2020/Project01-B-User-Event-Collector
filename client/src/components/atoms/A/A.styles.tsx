import styled from 'styled-components';

const getAStyle = (props) => {
  let color = 'black';
  let fontWeight = '400';
  let fontSize;

  switch (props.variant) {
    case 'primary':
      fontWeight = '800';
      fontSize = '26px';
      break;
    case 'secondary':
      fontWeight = '700';
      fontSize = '17px';
      break;
    case 'tertiary':
      color = '#999';
      fontSize = '13px';
      break;
    default:
      fontSize = '16px';
      break;
  }

  return `
    color: ${color};
    font-size:  ${fontSize};
    font-weight: ${fontWeight};
    text-decoration: none;

    &:hover {
       text-decoration: underline;
    }
  `;
};

export const StyledA = styled.a`
${(props) => getAStyle(props)};
`;

export default StyledA;
