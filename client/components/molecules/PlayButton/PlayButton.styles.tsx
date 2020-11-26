import styled from 'styled-components';

export const StyledCircle = styled.div`
width: 43px;
height: 43px;
border-radius: 70%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: 0.2s ease-in;
opacity: 91%;
`;

export const StyledPlayButton = styled.div`
background-color: black;
width: 53px;
height: 53px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
&:hover ${StyledCircle}{
    width: 45px;
    height: 45px;
    opacity: 100%;
    transition: 0.2s ease-in;
}
`;

export default StyledPlayButton;