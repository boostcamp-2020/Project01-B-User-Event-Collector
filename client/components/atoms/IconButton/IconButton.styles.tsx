import styled from 'styled-components';

interface StyledIconButtonProps {
  variant?: 'plainGreyRegular' | 'plainGreySmall' | 'plainWhiteRegular' | 'plainBlackRegular' ;
}

const getIconButtonStyle = (props: StyledIconButtonProps) => {
  let color; let fontSize = '150px';

  switch (props.variant) {
    case 'plainGreyRegular':
      color = '#D9D9D9';
    break;   
    case 'plainGreySmall':
      color = '#D7D7D7';
      fontSize = '10px';
    break;   
    case 'plainWhiteRegular':
      color = 'white';
    break;   
    case 'plainBlackRegular':
      color = 'black';
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

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${(props) => getIconButtonStyle(props)};
  box-shadow: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  background-color: rgba(0,0,0,0);
  border: none;
`;

export default StyledIconButton;
