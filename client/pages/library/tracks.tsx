import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';

const TrackDatas = Array(20).fill({
    albumImgSrc: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    trackId: '1',
    trackTitle: 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)',
    artist: '미란이',
    albumTitle: '쇼미더머니 9 Episode 1',
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

const LibraryContentsContainer = styled.div`
    width: 960px;
`;

const LibraryTrackListContainer = styled.div`
    margin: 30px 0;
`;

const TrackLibrary = () => {
    return (
        <LibraryContainer>
            <LibraryHeaderContainer>
                <LibraryHeader sort = "track"/>
            </LibraryHeaderContainer>
            <LibraryContentsContainer>
                <ContentsButtonGroup />
                <LibraryTrackListContainer>
                    <TrackRowList items={TrackDatas} />
                </LibraryTrackListContainer>
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