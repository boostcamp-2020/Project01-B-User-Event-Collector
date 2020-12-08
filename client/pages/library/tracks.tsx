import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
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

const LibraryContentsContainer = styled.div`
    width: 960px;
`;

const LibraryTrackListContainer = styled.div`
    margin: 30px 0;
`;

const TrackLibrary = ({ TrackData }) => {
    return (
        <LibraryContainer>
            <LibraryHeaderContainer>
                <LibraryHeader sort="track" />
            </LibraryHeaderContainer>
            <LibraryContentsContainer>
                <ContentsButtonGroup />
                <LibraryTrackListContainer>
                    <TrackRowList items={TrackData} />
                </LibraryTrackListContainer>
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
        url: apiUrl.libraryTrack,
    });
    const TrackData = response.data.data;
    console.log(TrackData);
    return {
        props: {
            TrackData,
        },
    };
}
export default TrackLibrary;
