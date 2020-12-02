import styled from 'styled-components';

interface StyledAProps {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'fourth';
}

const getAStyle = (props: StyledAProps) => {
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
        case 'fourth':
            fontSize = '14px';
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

export const StyledA = styled.a<StyledAProps>`
    ${(props) => getAStyle(props)};
`;

export default StyledA;
