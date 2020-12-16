import React from 'react'
import PlayTriangle from '../../atoms/PlayTriangle/PlayTriangle';
import { StyledPlayButton, StyledCircle } from './PlayButton.styles';
import { requestTracks } from '../../../utils/apis';
import apiUrl from '@constants/apiUrl';
import { withCookies, Cookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { addToUpNext, addToUpNextAndPlay } from 'reducers/musicPlayer';

interface playButtonProps {
    sort?: string;
    data?;
}

const PlayButton = ({sort, data}) => {
    const cookies = new Cookies();      //request를 위해 새 쿠키 생성
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const onClickHandler = async () => {
        if(user.isLoggedIn){
        let res; let tracks;
        switch (sort) {
            case 'todayMagazine':
                res = await requestTracks(`${apiUrl.magazine}/${data.id}`, cookies.get('token'));
                tracks = res.playlist.tracks;
                dispatch(addToUpNextAndPlay(tracks));
                break;
            case 'playlist':
                res = await requestTracks(`${apiUrl.playlist}/${data.id}`, cookies.get('token'));
                tracks = res.tracks;
                dispatch(addToUpNextAndPlay(tracks));
                break;
            case 'news':
                res = await requestTracks(`${apiUrl.album}/${data.albumId}`, cookies.get('token'));
                tracks = res.tracks;
                dispatch(addToUpNextAndPlay(tracks));
                break;
            case 'album':
                res = await requestTracks(`${apiUrl.album}/${data.id}`, cookies.get('token'));
                tracks = res.tracks;
                dispatch(addToUpNextAndPlay(tracks));
                break;
            case 'mixtape':
                res = await requestTracks(`${apiUrl.playlist}/${data.id}`, cookies.get('token'));
                tracks = res.tracks;
                dispatch(addToUpNextAndPlay(tracks));
                break;
            case 'station':
                break;
            default:
                return;
        }}
    }

    return(
    <StyledPlayButton onClick={onClickHandler}>
        <StyledCircle />
        <PlayTriangle />
    </StyledPlayButton>
    )
};

export default PlayButton;