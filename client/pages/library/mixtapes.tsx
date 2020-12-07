import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';

const Mixtapedata = Array(9).fill({
    id: 1,
    title: "나를 위한 믹스테잎",
    subTitle: "",
    description: "Lana Del Rey, Dua Lipa, 이영지",
    imageUrl: "https://vibeapp.music.naver.com/vibe/v1/cover/mix/3171155,2487724,3553414,635724/favorite/favorite/",
    customized: false
});

const LibraryContainer = styled.div`
    width: 100%;
    min-height: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
    padding: 0 0 300px 225px;
`;

const LibraryHeaderContainer = styled.div`
    margin: 50px 0 30px 0;
`;

const LibraryContentsContainer = styled.div``;

const MixtapeLibrary = () => {
    return (
        <LibraryContainer>
            <LibraryHeaderContainer>
                <LibraryHeader sort="mixtape" />
            </LibraryHeaderContainer>
            <LibraryContentsContainer>
                <LibraryCardList variant="mixtape" items={Mixtapedata} />
            </LibraryContentsContainer>
        </LibraryContainer>
    );
};

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default MixtapeLibrary;
