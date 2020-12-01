import styled from 'styled-components';

interface StyleProps {
  variant?: string;
}

const getListStyle = (props) => {
    switch (props.variant) {
        case 'row':
            return `
                    display: flex;
                    margin: 0;
                `
        default:
            return ""
      }
}

const getItemStyle = (props) => {
    switch (props.variant) {
        case 'row':
            return `
                    margin-left: 17px;

                    &:first-child {
                        margin-left: 0;
                    }
                `
        default:
            return `
                    float: left;
                    width: 33.333333%;
                    margin: 0;
                    padding: 0 17px 39px 0;
                `
        
      }
}

export const List = styled.ul<StyleProps>`
    padding: 0;
    list-style: none; 

    ${(props) => getListStyle(props)};
`;

export const Item = styled.ul<StyleProps>`
    box-sizing: border-box;
    ${(props) => getItemStyle(props)};
`;


