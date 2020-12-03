import styled from 'styled-components';

import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@components/atoms/Button';

const ButtonContainer = styled.div`
    width: 260px;
    height: 40px;
    display: flex;
    justify-content: space-between;
`;

const StyledDehazeIcon = styled(DehazeIcon)`
    margin-top: 1px;
`;

const ContentsButtonGroup = () => {
    return (
        <ButtonContainer>
            <Button icon = { StyledDehazeIcon }>바로 다음에</Button>
            <Button icon = { StyledDehazeIcon }>맨 아래에</Button>
        </ButtonContainer>
    )
}

export default ContentsButtonGroup;