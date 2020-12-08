import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';
import axios from 'axios';
import apiUrl from 'constants/apiUrl';

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

const MixtapeLibrary = ({ mixtapeData }) => {
    return (
        <LibraryContainer>
            <LibraryHeaderContainer>
                <LibraryHeader sort="mixtape" />
            </LibraryHeaderContainer>
            <LibraryContentsContainer>
                <LibraryCardList variant="mixtape" items={mixtapeData} />
            </LibraryContentsContainer>
        </LibraryContainer>
    );
};

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/
export async function getServerSideProps() {
    const response = await axios({
        method: 'GET',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
        url: apiUrl.libraryMixtape,
    });
    const mixtapeData = response.data.data;
    return {
        props: {
            mixtapeData,
        },
    };
}
export default MixtapeLibrary;
