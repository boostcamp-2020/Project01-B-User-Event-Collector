import styled from 'styled-components';

interface StyledSpanProps {
  variant?: 'special' | 'primary' | 'secondary';
  selected?: boolean;
}

const getSpanStyle = ({ selected, variant }: StyledSpanProps) => {
  if (!selected) return '';

  let color = 'white';
  let borderColor;
  let backgroundColor;

  switch (variant) {
    case 'special':
      backgroundColor = 'linear-gradient(104deg,#ff2300,#fc00b9 51%,#a100f8)';
      borderColor = '#ff0050';
      break;
    case 'primary':
      backgroundColor = '#ff0050';
      borderColor = '#ff0050';
      break;
    case 'secondary':
      backgroundColor = '#8b00ed';
      borderColor = '#8b00ed';
      break;
    default:
      color = '#aaa';
      borderColor = '#D7D7D7';
      backgroundColor = 'white';
      break;
  }

  return `
    color: ${color};
    border: 1px solid ${borderColor};
    background: ${backgroundColor};
  `;
};

export const StyledSpan = styled.span<StyledSpanProps>`
  padding: 5px 16px;
  height: 29px;
  line-height: 29px;
  border: 1px solid #d7d7d7;
  border-radius: 14.5px;
  font-weight: 700;
  margin: 0 3px;
  font-size: 14px;
  color: #aaa;
  ${(props) => getSpanStyle(props)};
`;

export default StyledSpan;
