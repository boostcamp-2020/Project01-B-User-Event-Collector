//_app.js에서는 페이지들의 공통되는 부분을 처리
import PropTypes from 'prop-types';
import Head from 'next/head';   //head를 수정할 수 있게 함
import styled from 'styled-components';

import HeaderSideBar from '@components/organisms/HeaderSideBar';
import '../assets/global.css';

const Container = styled.div`
    background-color: white;
`;

const userData =  {
    id: '0',
    name: 'testUser',
};

const App = ({ Component, pageProps }) => {
    return (
        <Container>
            <Head>
                <meta charSet="utf-8" />
                <title>miniVibe</title>
            </Head>
            <HeaderSideBar user = {userData} />
            <Component {...pageProps}/>
        </Container>
    )
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;

