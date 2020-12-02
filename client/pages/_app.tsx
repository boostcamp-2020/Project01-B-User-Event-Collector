//_app.js에서는 페이지들의 공통되는 부분을 처리
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'; //head를 수정할 수 있게 함
import styled from 'styled-components';

import HeaderSideBar from '@components/organisms/HeaderSideBar';
import PlayController from '@components/organisms/PlayController';
import '../assets/global.css';

const Container = styled.div`
    background-color: white;
`;

const userData = {
    id: '0',
    name: 'testUser',
};

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
            </Head>
            <HeaderSideBar user={userData} />
            <PlayController />
            <Component {...pageProps} />
        </Container>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default App;
