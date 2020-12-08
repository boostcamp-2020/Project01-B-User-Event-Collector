import styled from 'styled-components';
import ArtistHeader from '@components/organisms/ArtistHeader/ArtistHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';

const artistData = {
    id: 3,
    name: "이영지",
    imageUrl: "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg",
    genre: {
        "name": "랩/힙합"
    },
    tracks: [
        {
            id: 4,
            title: "그냥",
            lyrics: "keep callin' to me\n왜 인지는 묻지 말아 주면은 안돼?\njust text me \n밥은 잘 먹고 있는지에 대해\n뭔들 난 다 좋아\n별거 없는 그런 삶\nim so sick of these days\n말해 줘 너의 밤은 어때\n또 너의 날은 어떻고?\n나의 시간은 못 돼서\n다시 이 굴레에 날 가둬  \n이 밤은 또 내껄\n자꾸만 뺏으려 들어\nwhere should i go right now? \n\n뭘 쥐어도 다 모래\n결국 흐르니 난 뭘 해?  \n못 된 생각이 인내를 놓을땐 \n도태 되는거야 no thanks\n가지면 뭐해\ni got nothing to prove no\n사랑을 할래\n위기는 모르는 채로 oh \n너 불안정한 내게\n자꾸 깊은 믿음을 심어주지마\n나도 모르는 새에\n널 내 안에 들여놓고 착각 할지도 몰라\n\npainful thoughts \nin ma head \n다 모순인 거야\n비운의 틈새로\n나 겨울의 냄새를 맡고파\npainful thoughts\nim ma head \n다 거짓인 거야\n난 그저 여름의 향수에만 잠깐 젖고파\ncuz im bored\n아늑하기만 한\n나의 방은 어두워서\n상처는 아물지  않아\n날 봐줘\n저 멀리 가고 있는\n날 보게 된다면은 붙잡아줘 ",
            playtime: 217,
            albumId: 11,
            artist: {
                id: 3,
                name: "이영지"
            },
            album: {
                id: 11,
                title: "그냥",
                imageUrl: "https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg"
            },
            liked: 0
        },
        {
            id: 6,
            title: "암실",
            lyrics: "농도가 아주 짙은\n랩을 뱉어도\n네 안에 쌓인 독\n덜어 낼 수 없어\n팔리는 음악은\n누가 찍어\n모자란 걸\n양심을 잃은 돈 거머쥘 수 없어\n\n더 벌어서\n더 버려 벗겨지는 마음\n개나 준 채로 숨어 암전 속으로\n나 바뻐\n좌절도 늘 그랬듯이 힘이 쭉 빠져\n밉상이니 맘껏 비웃어\n\n난 찾아야 돼 exit 작업실 의자 뒤에\n문 말고 딜레마 속 지랄맞은 굴레 i mean\n지피지기 면백전 백승 은 나발이고\n다물어 이 방 안에 내 적은 나뿐임\nuh 나는 나를 알아 점점 퇴보해 가\n구멍난 스타킹 안 꿰매 신어도 되는데\n나 왜이리 빈곤한 걸까\n묻지 말아줘 맘이 공허한 걸까\n\n아직 잃을 준비가 안 된 것 같아서 좀 많이 두려워\n돈 명예 시계 전부 얻어도 날 다 채울 수 가 없으니\n더 날 불러줘 막연한 회의감 가득한 방 안에서도 듣게끔\n\nplease 날 나가게 해줘\n좀 더 잃을 게 많아져도\ni can't do this no more\nso please 날 나가게 해줘\n날 지워낸 다음 덮어내 다시\nblack 을 제외한 색깔로 more\nso please 날 나가게\n날아가게 해줘\nso please 날 나가게\n날아가게 해줘\nso please 날 나가게\n날아가게 해줘\nso please 날 나가게\n날아가게 해줘",
            playtime: 152,
            albumId: 12,
            artist: {
                id: 3,
                name: "이영지"
            },
            album: {
                id: 12,
                title: "암실",
                imageUrl: "https://musicmeta-phinf.pstatic.net/album/003/399/3399784.jpg"
            },
            liked: 0
        }
    ],
    albums: [
        {
            id: 11,
            title: "그냥",
            imageUrl: "https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg"
        },
        {
            id: 12,
            title: "암실",
            imageUrl: "https://musicmeta-phinf.pstatic.net/album/003/399/3399784.jpg"
        }
    ]
};

const TrackDatas = artistData.tracks;

const Artistdata = [
    {
        "id": 3,
        "name": "이영지",
        "imageUrl": "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg",
        "genre": {
            "id": 1,
            "name": "랩/힙합"
        }
    },
    {
        "id": 4,
        "name": "BLACKPINK",
        "imageUrl": "https://musicmeta-phinf.pstatic.net/artist/000/500/500555.jpg",
        "genre": {
            "id": 2,
            "name": "댄스"
        }
    },
    {
        "id": 5,
        "name": "백예린",
        "imageUrl": "https://musicmeta-phinf.pstatic.net/artist/000/234/234253.jpg",
        "genre": {
            "id": 3,
            "name": "알앤비/소울"
        }
    },
    {
        "id": 6,
        "name": "새소년",
        "imageUrl": "https://musicmeta-phinf.pstatic.net/artist/000/829/829598.jpg?type=ff300_300&v=20200510175911",
        "genre": {
            "id": 4,
            "name": "인디뮤직"
        }
    }
];

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

const TrackListContainer = styled.div`
    margin: 30px 0 0 0;
    border-bottom: 1px #d7d7d7 solid;
    padding-bottom: 50px;
`;

const ArtistListContainer = styled.div`
`;

const Artist = () => {
    return (
        <Container>
            <Header>
                <ArtistHeader src = { artistData.imageUrl } name = { artistData.name } genre = { artistData.genre.name }/>
            </Header>
            <ContentsContainer>
                <ContentsButtonGroup />
                <TrackListContainer>
                    <TrackRowList items={TrackDatas} />
                </TrackListContainer>
                <ArtistListContainer>
                    <CardListContainer title="연관 아티스트">
                    <ContentsCardList variant="artist" items={Artistdata} />
                </CardListContainer>
                </ArtistListContainer>
            </ContentsContainer>
        </Container>
    )
}

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default Artist;