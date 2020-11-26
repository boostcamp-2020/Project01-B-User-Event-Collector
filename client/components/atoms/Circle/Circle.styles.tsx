import styled from 'styled-components';

interface StyledCircleProps {
  variant?: 'primary';
}

const getCircleStyle = (props: StyledCircleProps) => {
  let diameter; let boxShadow;

  switch (props.variant) {
    case 'primary':
      diameter = '38px';
      boxShadow = '0 1px 3px 0 rgba(0,0,0,.2)';
      break;
    default:
      diameter = '42px';
      boxShadow = 'none';
      break;
  }

  return `
    width: ${diameter};
    height: ${diameter};
    box-shadow: ${boxShadow};
  `;
};

export const StyledCircle = styled.div<StyledCircleProps>`
  ${(props) => getCircleStyle(props)};
  cursor: pointer;
  border-radius: 70%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export default StyledCircle;
