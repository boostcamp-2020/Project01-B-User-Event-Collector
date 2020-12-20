import styled from 'styled-components';

interface StyledSpanProps {
  variant?: 'special' | 'primary' | 'secondary';
  selected?: boolean;
}

const getSpanStyle = ({ selected, variant }: StyledSpanProps) => {
  if (!selected || !variant) return '';

  const color = 'white';
  let borderColor;
  let backgroundColor;
  let fontStyle = "normal";

  switch (variant) {
    case 'special':
      backgroundColor = 'linear-gradient(104deg,#ff2300,#fc00b9 51%,#a100f8)';
      borderColor = 'rgba(0,0,0,0)';
      fontStyle = "oblique";
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
      return '';
  }

  return `
    color: ${color};
    border: 1px solid ${borderColor};
    background: ${backgroundColor};
    font-style: ${fontStyle};
  `;
};

export const StyledSpan = styled.span<StyledSpanProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80px;
  padding: 5px 16px;
  height: 29px;
  line-height: 29px;
  border: 1px solid #d7d7d7;
  border-radius: 14.5px;
  font-weight: 700;
  margin: 0 10px 0 0;
  font-size: 14px;
  color: #aaa;
  cursor: default;
  ${(props) => getSpanStyle(props)};
`;

export default StyledSpan;
