import styled from 'styled-components';
import { Play } from '@components/molecules/TrackPlayButton/TrackPlayButton.styles';

export const List = styled.li`
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: space-between;
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
    padding: 15px 0;
    width: 136px;
    justify-content: space-between;
`;
export const TrackPlayBtnContainer = styled.div`
    padding-right: 7px;
    height: 40px;
`;
export const TrackTitle = styled.div`
    padding: 13px 0 13px 7px;
`;
export const TrackMiddleElem = styled.div`
    width: 195px;
    max-width: 195px;
    padding: 15px 0 15px 30px;
`;

const BackgroundImg = styled.div`
    &::after {
        content: '';
        background-image: linear-gradient(transparent, transparent),
            url(https://vibe.naver.com/img/sp_vibe.cc4cc861.svg);
        background-size: 808px 764px;
        display: inline-block;
        width: 20px;
        height: 20px;
    }
`;
export const Mp3 = styled(BackgroundImg)`
    &::after {
        background-position: -710px -562px;
        width: 30px;
    }
`;
export const ShowLyricButton = styled(BackgroundImg)`
    &::after {
        background-position: -284px -716px;
    }
`;
export const LikeOptions = styled(BackgroundImg)`
    &::after {
        background-position: -760px -325px;
        width: 18px;
        height: 18px;
    }
`;
