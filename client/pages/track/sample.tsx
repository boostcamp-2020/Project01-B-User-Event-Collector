import styled from 'styled-components';
import DetailHeader from '@components/organisms//DetailHeader';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import Text from '@components/atoms/Text';
import AlbumCard from '@components/organisms/Cards/AlbumCard/AlbumCard';

const trackData = {
    id: 3,
    title: "0310",
    lyrics: "You smoked and you looked at me\n넌 담배를 피며 날 쳐다봤어\nI hate it when you do \n난 네가 그럴 때가 싫더라\nI said “no thanks” to you\n난 됐다고 말했고 \nyou asked me If I was okay,\n넌 괜찮냐 물었지 \nwhat If I wasn’t \n안 괜찮다면 뭐 어때 \n\nLeaving is fine \n떠나도 괜찮아\nIt’s just I don’t wanna be all by myself again\n난 그냥 또 다시 혼자가 되고 싶지 않은데\nlike every time, like every last time\n항상 그랬듯, 항상 그전처럼 말야\n\nYou knew that I was no good for you \n넌 내가 너에게 좋지 않을 거란 걸 알았어\nwhen we lay down after doing that things you loved \n네가 좋아하던 것들을 하고나서 누워있을 때 말야 \nyou knew that I wasn’t better than you \n넌 내가 너보다 나은 사람이 아닌 걸 알고 있었어 \nI hope that I could be seemed really fine with you leaving \n네가 떠나도 괜찮아 보일 수 있으면 좋겠어",
    playtime: 250,
    albumId: 10,
    album: {
        id: 10,
        title: "Every letter I sent you.",
        imageUrl: "https://musicmeta-phinf.pstatic.net/album/003/735/3735168.jpg?type=r360Fll&v=20200218131210"
    },
    artist: {
        id: 5,
        name: "백예린"
    },
    liked: 0
};

const albumdata = Array(9).fill({
    id: 11,
    title: "그냥",
    description: "이영지의 새로운 싱글앨범 <그냥>이 발매되었다.\n\n이번 곡은 아티스트 이영지가 그 동안 보여줘 왔던 기존 곡들과는 사뭇 다른 감성으로 우리에게 다가온다.\n\n2019년 11월 첫번째 발표곡 <암실>을 시작으로 약 6개월간 5곡의 작품을 발표한 이영지는 자신의 음악적 스펙트럼을 계속해서 확장해 나가며 다양한 음악을 우리에게 선사하고 있다.\n\n감성짙은 이번 싱글앨범 <그냥>은 우리에게 그녀의 또 다른 새로운 시작을 알리고 있다.",
    releaseDate: "2020-05-07",
    imageUrl: "https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg",
    artist: {
        id: 3,
        name: "이영지"
    }});

const playlistdata = Array(9).fill({
    id: 1,
    title: "VIBE AND CHILL",
    subTitle: "",
    description: "VIBE",
    imageUrl: "https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png",
    customized: false
});

const belongAlbumData = {
    id: trackData.album.id,
    title: trackData.album.title,
    imageUrl: trackData.album.imageUrl,
    artist: {
        id: trackData.artist.id,
        name: trackData.artist.name
    }
};

const Container = styled.div`
    min-height: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
    padding: 0 0 150px 225px;
`;

const Header = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
`;

const ContentsContainer = styled.div`
    width: 960px;
`;

const Contents = styled.div`
    margin: 0px 0 0px 0;
    border-bottom: 1px #d7d7d7 solid;
    padding-bottom: 50px;
`;

const ScrollContents = styled.div`
    margin: 0px 0 0px 0;
    border-bottom: 1px #d7d7d7 solid;
    padding-bottom: 0px;
`;

const ContentsHeader = styled.div`
    margin: 30px 0 10px 0;
`;

const Lyrics = styled.div`
    height: 300px;
    overflow: scroll;
`;

const BelongAlbum = styled.div``;

const Track = () => {
    return (
        <Container>
            <Header>
                <DetailHeader sort="track" data={trackData} />
            </Header>
            <ContentsContainer>
                <Contents>
                    <ContentsHeader>
                        <Text variant="regularStrong">가사</Text>
                    </ContentsHeader>
                    <Lyrics>
                        {trackData.lyrics.split('\n').map((line) => {
                            return (
                                <Text variant="primary">
                                    {line}
                                    <br />
                                </Text>
                            );
                        })}
                    </Lyrics>
                </Contents>
                <Contents>
                    <ContentsHeader>
                        <Text variant="regularStrong">수록 앨범</Text>
                    </ContentsHeader>
                    <BelongAlbum>
                        <AlbumCard
                        { ...(belongAlbumData) }
                        />
                    </BelongAlbum>
                </Contents>
                <ScrollContents>
                    <CardListContainer title="관련 아티스트 앨범">
                        <ContentsCardList variant="album" items={albumdata} />
                    </CardListContainer>
                </ScrollContents>
                <ScrollContents>
                    <CardListContainer title="관련 플레이리스트">
                        <ContentsCardList variant="playlist" items={playlistdata} />
                    </CardListContainer>
                </ScrollContents>
            </ContentsContainer>
        </Container>
    );
};

export default Track;
