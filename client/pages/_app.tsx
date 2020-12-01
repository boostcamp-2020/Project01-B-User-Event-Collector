//_app.js에서는 페이지들의 공통되는 부분을 처리
import PropTypes from 'prop-types';
import Head from 'next/head';   //head를 수정할 수 있게 함
import HeaderSideBar from '@components/organisms/HeaderSideBar';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>miniVibe</title>
            </Head>
            <HeaderSideBar />
            <Component />
        </>
    )
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;