import styled from 'styled-components';

interface StyledTextProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const getTextStyle = (props: StyledTextProps) => {
  let color; let fontSize = '15px'; let fontWeight = '400';

  switch (props.variant) {
    case 'primary':
      color = '#999';
      fontSize = '13px';
      break;
    case 'secondary':
      color = 'white';
      break;
    case 'tertiary':
      color = 'black';
      fontWeight = '800';
      fontSize = '26px';
      break;
    default:
      color = 'black';
      break;
  }

  return `
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeight}
  `;
};

export const StyledText = styled.p<StyledTextProps>`
  ${(props) => getTextStyle(props)};
  margin: 0;
`;

export default StyledText;
