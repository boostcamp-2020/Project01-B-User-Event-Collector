import styled from 'styled-components';

interface StyledButtonProps {
  variant?: 'primary';
}

const getButtonStyle = (props: StyledButtonProps) => {
  let color; let borderColor; let backgroundColor;

  switch (props.variant) {
    case 'primary':
      color = 'white';
      borderColor = '#FF1150';
      backgroundColor = '#FF1150';
      break;
    default:
      color = 'black';
      borderColor = '#D7D7D7';
      backgroundColor = 'white';
      break;
  }

  return `
    color: ${color};
    border: 1px solid ${borderColor};
    background-color: ${backgroundColor};
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
