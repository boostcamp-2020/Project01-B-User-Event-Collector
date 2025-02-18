//_app.js에서는 페이지들의 공통되는 부분을 처리
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'; //head를 수정할 수 있게 함
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { clearAllTracks } from 'reducers/selectedTrack';
import { useRouter } from 'next/router';

import wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga';

import HeaderSideBar from '@components/organisms/HeaderSideBar';
import MusicPlayer from '@components/organisms/MusicPlayer';
import FloatingSelectMenu from '@components/organisms/FloatingSelectMenu';
import PlaylistAddModal from '@components/organisms/PlaylistModal/PlaylistAddModal';
import '../assets/global.css';

import { componentType } from '@constants/identifier';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import useTransitionEventLog from '@hooks/useTransitionEventLog';

import { LOAD_USER_REQUEST } from 'constants/actions';
import { CookiesProvider } from 'react-cookie';

const Container = styled.div`
    background-color: white;
`;

const trackData = {
    id: 3,
    title: '0310',
    lyrics:
        'You smoked and you looked at me\n넌 담배를 피며 날 쳐다봤어\nI hate it when you do \n난 네가 그럴 때가 싫더라\nI said “no thanks” to you\n난 됐다고 말했고 \nyou asked me If I was okay,\n넌 괜찮냐 물었지 \nwhat If I wasn’t \n안 괜찮다면 뭐 어때 \n\nLeaving is fine \n떠나도 괜찮아\nIt’s just I don’t wanna be all by myself again\n난 그냥 또 다시 혼자가 되고 싶지 않은데\nlike every time, like every last time\n항상 그랬듯, 항상 그전처럼 말야\n\nYou knew that I was no good for you \n넌 내가 너에게 좋지 않을 거란 걸 알았어\nwhen we lay down after doing that things you loved \n네가 좋아하던 것들을 하고나서 누워있을 때 말야 \nyou knew that I wasn’t better than you \n넌 내가 너보다 나은 사람이 아닌 걸 알고 있었어 \nI hope that I could be seemed really fine with you leaving \n네가 떠나도 괜찮아 보일 수 있으면 좋겠어',
    playtime: 250,
    albumId: 10,
    album: {
        id: 10,
        title: 'Every letter I sent you.',
        imageUrl: 'https://musicmeta-phinf.pstatic.net/album/003/735/3735168.jpg?type=r360Fll&v=20200218131210',
    },
    artist: {
        id: 5,
        name: '백예린',
    },
    liked: 1,
};

const currentPlayList = Array(30).fill(trackData);

const App = ({ Component, pageProps }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const { tracks } = useSelector(state =>  state.selectedTrack);
 
    const selectedTrackCount = tracks.length;

    useTransitionEventLog({ userId: user.id });

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    useEffect(() => {
        dispatch(clearAllTracks());
    }, [router.asPath]);

    useEffect(() => {
        dispatch({
            type: LOAD_USER_REQUEST
        });
    }, [router.asPath]);

    return (
        <CookiesProvider>
        <Container >
            <Head>
                <meta charSet="utf-8" name="Description" content="mini VIBE Event Collector"/>
                <title>miniVibe</title>
                <link rel="shortcut icon" href="https://img.icons8.com/cute-clipart/64/000000/like.png" />
            </Head>
            <ComponentInfoContext.Provider value={{ componentId: componentType.mainHeader }}>
                <HeaderSideBar user={user} />
            </ComponentInfoContext.Provider>
            <ComponentInfoContext.Provider value={{ componentId: componentType.floatingSelectMenu }}>
                {selectedTrackCount > 0 && <FloatingSelectMenu />}
            </ComponentInfoContext.Provider>
            <ComponentInfoContext.Provider value={{ componentId: componentType.musicPlayer }}>
                <MusicPlayer />
            </ComponentInfoContext.Provider>
           
            <Component {...pageProps} />
        </Container>
        </CookiesProvider>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
