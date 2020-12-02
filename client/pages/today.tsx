import MainMenu from '@components/molecules/SubMenu';

const Home = () => {
    return (
        <>
         <MainMenu/>
        </>
    )
}

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default Home;