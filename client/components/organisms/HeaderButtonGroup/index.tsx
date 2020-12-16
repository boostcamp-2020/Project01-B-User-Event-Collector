import styled from 'styled-components';

import DropDownMenu from '@components/molecules/DropdownMenu';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@components/atoms/Button';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddButton from '@components/atoms/Button/AddButton';
import Heart from '@components/atoms/Heart/Heart';

import { HeaderButtonGroupProps } from 'interfaces/props';
import { useContext, useState } from 'react';
import { addToLibrary, deleteFromLibrary } from '@utils/apis';
import apiUrl from '@constants/apiUrl';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';

const ButtonContainer = styled.div<HeaderButtonGroupProps>`
    width: ${(props) => (props.sort === 'track' ? '300px' : '480px')};
    height: 40px;
    display: flex;
    align-items: center;
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
    margin-top: 0px;
`;

const contentsDropDownMenu = [
    {
        content: '내 플레이리스트 추가',
    },
    {
        content: '보관함에 추가',
    },
    {
        content: '현재재생목록에 추가',
    },
    {
        content: 'MP3 구매',
    },
];

const HeaderButtonGroup = ({ sort, onAddUpNextHandler, liked }: HeaderButtonGroupProps) => {
    const [likeStatus, setLikeStatus] = useState(liked);
    const componentInfo = useContext(ComponentInfoContext);
    const data = componentInfo.data;

    const likeHandler = () => {
        if (!likeStatus) {
            addToLibrary(`${apiUrl.like}${data.type}s`, { data: { id: data.id } })
                .then((data) => {
                    setLikeStatus(!likeStatus);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            deleteFromLibrary(`${apiUrl.like}${data.type}s/${data.id}`)
                .then((data) => {
                    setLikeStatus(!likeStatus);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    return (
        <ButtonContainer sort={sort} liked={liked}>
            {sort === 'track' && (
                <Button variant="primary" width="100" height="40" icon={PlayArrowIcon} onClick={onAddUpNextHandler}>
                    재생
                </Button>
            )}
            {sort !== 'track' && (
                <Button variant="primary" width="130" height="40" icon={PlayArrowIcon} onClick={onAddUpNextHandler}>
                    전체재생
                </Button>
            )}
            {sort !== 'track' && (
                <Button width="130" height="40" icon={ShuffleIcon}>
                    랜덤재생
                </Button>
            )}
            <Button height="40">MP3 구매</Button>
            {sort !== 'track' && <AddButton onClick={likeHandler} liked={likeStatus} />}
            {sort === 'track' && <Heart isSelected={likeStatus} onClick={likeHandler} />}
            <StyledDropDown
                id="contents"
                control={StyledMoreHorizIcon}
                menuItems={contentsDropDownMenu}
                state={{ setLikeStatus }}
            />
        </ButtonContainer>
    );
};

export default HeaderButtonGroup;
