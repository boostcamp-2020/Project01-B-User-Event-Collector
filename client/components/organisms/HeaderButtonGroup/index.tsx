import styled from 'styled-components';

import DropDownMenu from '@components/molecules/DropdownMenu';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@components/atoms/Button';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddButton from '@components/atoms/Button/AddButton';

const ButtonContainer = styled.div`
    width: 480px;
    height: 40px;
    display: flex;
    justify-content: space-between;
`;

const StyledDehazeIcon = styled(DehazeIcon)`
    margin-top: 1px;
`;

const StyledDropDown = styled(DropDownMenu)`
    z-index: 5;
`;

const StyledMoreHorizIcon = styled(MoreHorizIcon)`
    color: black;
    font-size: 3rem;
    margin-left: 10px;
    margin-top: 5px;
`;

const contentsDropDownMenu = [{
    content: '내 플레이리스트 추가'
}, {
    content: '보관함에 추가'
}, {
    content: '현재재생목록에 추가'
}, {
    content: 'MP3 구매'
}]

const HeaderButtonGroup = () => {
    return (
        <ButtonContainer>
            <Button variant = "primary" width='130' height='40' icon={PlayArrowIcon} >전체재생</Button>
            <Button width='130' height='40' icon={ShuffleIcon}>랜덤재생</Button>
            <Button>MP3 구매</Button>
            <AddButton />
            <StyledDropDown 
            id = "contents" 
            control = {StyledMoreHorizIcon} 
            menuItems = {contentsDropDownMenu}/>
        </ButtonContainer>
    )
}

export default HeaderButtonGroup;