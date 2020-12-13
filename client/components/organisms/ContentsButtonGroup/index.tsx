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
            <Button>모두 재생목록에 추가</Button>
        </ButtonContainer>
    )
}

export default ContentsButtonGroup;