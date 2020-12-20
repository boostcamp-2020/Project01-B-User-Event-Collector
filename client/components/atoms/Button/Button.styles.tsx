import styled from 'styled-components';

interface StyledButtonProps {
  variant?: 'primary' | 'secondary';
  width?: string;
  height?: string;
}

const getButtonStyle = (props: StyledButtonProps) => {
  let color = 'black'; let border; let backgroundColor;

  switch (props.variant) {
    case 'primary':
      color = 'white';
      border = '1px solid #FF1150';
      backgroundColor = '#FF1150';
      break;
    case 'secondary':
      border = '0';
      backgroundColor = 'rgba(0,0,0,0)';
      break;
    default:
      border = '1px solid #D7D7D7';
      backgroundColor = 'white';
      break;
  }

  return `
    color: ${color};
    border: ${border};
    background-color: ${backgroundColor};
    width: ${props.width}px;
    height: ${props.height}px;
  `;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 9px 15px;

  ${(props) => getButtonStyle(props)};
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
  font-size: 15px;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
`;

export default StyledButton;
