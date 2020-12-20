import styled from 'styled-components';
import { Play } from '@components/molecules/TrackPlayButton/TrackPlayButton.styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const List = styled.li`
    width: 960px;
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: space-between;
    &.checked {
        background-color: #ededed66;
    }
    &:hover ${Play} {
        visibility: visible;
        opacity: 60%;
    }
    &:hover {
        background-color: #ececec;
    }
`;
const TrackArea = styled.div`
    display: flex;
    height: 50px;
    box-sizing: border-box;
`;
export const TrackLeft = styled(TrackArea)`
    padding: 5px 0;
    width: 380px;
`;
export const TrackMiddle = styled(TrackArea)``;
export const TrackRight = styled(TrackArea)`
    display: flex;
    padding: 15px 0;
    width: 136px;
    justify-content: space-between;
    align-items: center;
`;
export const TrackPlayBtnContainer = styled.div`
    padding-right: 7px;
    height: 40px;
`;
export const TrackTitle = styled.div`
    padding: 13px 0 13px 7px;
    max-width: 287px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
export const TrackMiddleElem = styled.div`
    width: 195px;
    max-width: 195px;
    padding: 15px 0 15px 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const BackgroundImg = styled.div`
    &::after {
        content: '';
        background-image: linear-gradient(transparent, transparent),
            url(https://vibe.naver.com/img/sp_vibe.463acaba.svg);
        background-size: 1118px 1106px;
        background-position: -33px -1057px;
        display: inline-block;
        width: 20px;
        height: 20px;
    }
`;
export const Mp3 = styled(BackgroundImg)`
    &::after {
        background-position: -810px -890px;
        width: 30px;
    }
`;
export const ShowLyricButton = styled(BackgroundImg)`
    &::after {
        background-position: -33px -1057px;
    }
`;

export const StyledMoreHorizIcon = styled(MoreHorizIcon)`
    right: 5%;
    bottom: 7%;
    color: #999;
    font-size: 3rem;
`;

export const Like = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
`;
