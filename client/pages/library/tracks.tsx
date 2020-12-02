import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';

const LibraryContainer = styled.div`
    width: 100%;
    min-height: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
`;

const LibraryHeaderContainer = styled.div`
    margin: 50px 0 30px 0;
`;

const LibraryContentsContainer = styled.div`

`;

const TrackLibrary = () => {
    return (
        <LibraryContainer>
            <LibraryHeaderContainer>
                <LibraryHeader sort = "track"/>
            </LibraryHeaderContainer>
            <LibraryContentsContainer>

            </LibraryContentsContainer>
        </LibraryContainer>
    )
}

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default TrackLibrary;