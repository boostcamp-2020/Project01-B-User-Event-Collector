import styled from 'styled-components';

interface StyledTextProps {
  variant?: 'primary' | 'secondary';
}

const getTextStyle = (props: StyledTextProps) => {
  let color; let fontSize = '15px';

  switch (props.variant) {
    case 'primary':
      color = '#999';
      fontSize = '13px';
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
    font-size: ${fontSize};
  `;
};

export const StyledText = styled.p<StyledTextProps>`
  ${(props) => getTextStyle(props)};
  margin: 0;
`;

export default StyledText;
