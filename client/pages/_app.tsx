//_app.js에서는 페이지들의 공통되는 부분을 처리
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'; //head를 수정할 수 있게 함
import styled from 'styled-components';

import HeaderSideBar from '@components/organisms/HeaderSideBar';
import MusicPlayer from '@components/organisms/MusicPlayer';
import FloatingSelectMenu from '@components/organisms/FloatingSelectMenu';
import '../assets/global.css';

const Container = styled.div`
    background-color: white;
`;

const userData = {
    id: '0',
    name: 'testUser',
};

const trackData =     
{
    id: 0,
    title: '그냥',
    artistId: 0,
    artist: { id: 0, name: '이영지' },
    albumId: 0,
    album: { id: 0, title: '그냥', imageUrl: 'https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg?type=r720Fll&v=20200507115931' },
    lyrics: '가사입니다',
    playtime: '217',
};

const currentPlayList = Array(30).fill(trackData);

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Container>
            <Head>
                <meta charSet="utf-8" />
                <title>miniVibe</title>
                <link rel="shortcut icon" href="https://img.icons8.com/cute-clipart/64/000000/like.png" />
            </Head>
            <HeaderSideBar user={userData} />
            <FloatingSelectMenu />
            <MusicPlayer tracks = { currentPlayList }/>
            <Component {...pageProps} />
        </Container>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default App;
