import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import Button from '@components/atoms/Button';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import DehazeIcon from '@material-ui/icons/Dehaze';

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

const LibraryButtonContainer = styled.div`
    width: 260px;
    display: flex;
    justify-content: space-between;
`;

const LibraryTrackListContainer = styled.div`
    margin: 30px 0;
`;

const StyledDehazeIcon = styled(DehazeIcon)`
    margin-top: 1px;
`;

const TrackLibrary = () => {
    return (
        <LibraryContainer>
            <LibraryHeaderContainer>
                <LibraryHeader sort = "track"/>
            </LibraryHeaderContainer>
            <LibraryContentsContainer>
                <LibraryButtonContainer>
                    <Button icon = { StyledDehazeIcon }>바로 다음에</Button>
                    <Button icon = { StyledDehazeIcon }>맨 아래에</Button>
                </LibraryButtonContainer>
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