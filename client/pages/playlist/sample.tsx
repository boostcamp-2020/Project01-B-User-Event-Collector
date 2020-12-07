import styled from 'styled-components';
import DetailHeader from '@components/organisms//DetailHeader';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ContentsButtonGroup from '@components/organisms/ContentsButtonGroup';
import CardListContainer from '@components/organisms/CardListContainer';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';

const playlistData = 
{
    "id": 2,
    "title": "VIBE AND CHILL",
    "subTitle": "",
    "description": "VIBE",
    "imageUrl": "https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png",
    "tracks": [
        {
            "id": 4,
            "title": "그냥",
            "lyrics": "keep callin' to me\n왜 인지는 묻지 말아 주면은 안돼?\njust text me \n밥은 잘 먹고 있는지에 대해\n뭔들 난 다 좋아\n별거 없는 그런 삶\nim so sick of these days\n말해 줘 너의 밤은 어때\n또 너의 날은 어떻고?\n나의 시간은 못 돼서\n다시 이 굴레에 날 가둬  \n이 밤은 또 내껄\n자꾸만 뺏으려 들어\nwhere should i go right now? \n\n뭘 쥐어도 다 모래\n결국 흐르니 난 뭘 해?  \n못 된 생각이 인내를 놓을땐 \n도태 되는거야 no thanks\n가지면 뭐해\ni got nothing to prove no\n사랑을 할래\n위기는 모르는 채로 oh \n너 불안정한 내게\n자꾸 깊은 믿음을 심어주지마\n나도 모르는 새에\n널 내 안에 들여놓고 착각 할지도 몰라\n\npainful thoughts \nin ma head \n다 모순인 거야\n비운의 틈새로\n나 겨울의 냄새를 맡고파\npainful thoughts\nim ma head \n다 거짓인 거야\n난 그저 여름의 향수에만 잠깐 젖고파\ncuz im bored\n아늑하기만 한\n나의 방은 어두워서\n상처는 아물지  않아\n날 봐줘\n저 멀리 가고 있는\n날 보게 된다면은 붙잡아줘 ",
            "artist": {
                "id": 3,
                "name": "이영지"
            },
            "album": {
                "id": 11,
                "title": "그냥",
                "imageUrl": "https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg"
            },
            "liked": 0
        },
        {
            "id": 5,
            "title": "Lovesick Girls",
            "lyrics": "영원한 밤\n창문 없는 방에 우릴 가둔 love\nWhat can we say\n매번 아파도 외치는 love\n\n다치고 망가져도 나\n뭘 믿고 버티는 거야\n어차피 떠나면 상처투성인 채로 미워하게 될걸\n끝장을 보기 전 끝낼 순 없어\n이 아픔을 기다린 것처럼\n\n아마 다 잠깐 일지도 몰라\n우린 무얼 찾아서 헤매는 걸까\n\nBut I don’t care I’ll do it over and over\n내 세상 속엔 너만 있으면 돼\n\nWe are the lovesick girls\n네 멋대로 내 사랑을 끝낼순 없어\nWe are the lovesick girls\n이 아픔 없인 난 아무 의미가 없어\n\nBut we were born to be alone\nYeah we were born to be alone\nYeah we were born to be alone \nBut why we still looking for love\n\nNo love letters, no x and o’s\nNo love never, my exes know\nNo diamond rings, that set in stone\nTo the left, better left alone\n\nDidn’t wanna be a princess, I’m priceless\nA prince not even on my list\nLove is a drug that I quit\nNo doctor could help when I’m lovesick",
            "artist": {
                "id": 4,
                "name": "BLACKPINK"
            },
            "album": {
                "id": 9,
                "title": "THE ALBUM",
                "imageUrl": "https://musicmeta-phinf.pstatic.net/album/004/983/4983288.jpg?type=r360Fll&v=20201106182509"
            },
            "liked": 1
        },
        {
            "id": 1,
            "title": "Square",
            "lyrics": "All the colors and personalities\n모든 색깔과 성격들 \nyou can’t see right through what I truly am\n그것들 사이로는 내가 정말 어떤 사람인지 볼 수 없어\nyou’re hurting me without noticing \n넌 예고도 없이 나에게 상처를 주고 \nI’m so, so broke like someone just robbed me\n누가 날 털어간 것 마냥 부서진 것 같아\n\nI’m no invincible\n난 강한 사람이 아니야\nI have much memories of getting more weaker \n난 점점 약해져가는 기억들이 훨씬 많은 걸\nI know I’m not loveable\n나도 내가 사랑받을 수 없는 거 알아\nbut you know what you’d have to say\n그래도 네가 어떤 말을 해줘야 하는지 알지?\n\n\n“Come on let’s go to bed \n“나와 같이 침대로 가자 \nwe gonna rock the night away\n우린 이 밤을 신나게 보낼 거야\nwho did that to you, babe\n누가 너에게 그런 짓을 한 거야\nIf you’re not in the right mood to sleep now then, \n네가 당장 잠들 수 있는 기분이 아니라면 \nCome on, let’s drink and have very unmanageable day \n나와서 나랑 한잔하고, 감당하기 힘든 하루를 보내자!\nwould you want me in bae\n내가 거기 있길 바라?\nIf you’re not in the right mood to sleep now then \n네가 당장 잠들 수 있는 기분이 아니라면 \ncome take my arms and go \n나와 함께 가자!\nI’II be yours for sure”\n내가 너의 것이 되어줄게!” ",
            "artist": {
                "id": 5,
                "name": "백예린"
            },
            "album": {
                "id": 10,
                "title": "Every letter I sent you.",
                "imageUrl": "https://musicmeta-phinf.pstatic.net/album/003/735/3735168.jpg?type=r360Fll&v=20200218131210"
            },
            "liked": 1
        },
        {
            "id": 2,
            "title": "Popo (How deep is our love?)",
            "lyrics": "Get away from your own sorrow\n슬픔에서 벗어나봐요\nLet the sun come through your window\n당신의 창문에 햇살이 들어오게 해봐요\nYou don’t have to open up wide \n마음을 활짝 열 필요는 없지만\nBut I want to intimate\n전 가까워지고 싶어요 \n\n\nYou’ll never know how much your voice attracts me, boy\n당신은 당신 목소리가 날 얼마나 끌리게 하는지 모를 거예요\nIt’s exceptional\n정말 특별해요\nEspecially, when you’re playing the song for me\n특히 날 위해 곡을 연주할 땐\nI can’t take my eyes away\n눈을 뗄 수 없어요\n\n\nCan I walk with you? \n당신과 걸을 수 있을까요\nor have a tea with you\n차를 마셔도 좋아요\nYour scent makes me feel like I live in Paris \n당신의 향기는 내가 마치 파리에 살고 있는 것처럼 느끼게 해요\nCan I love you?\n사랑해도 될까요?\ngiving my all to you?\n내 전부를 다 주는 것도요 \nyou \n당신에게요",
            "artist": {
                "id": 5,
                "name": "백예린"
            },
            "album": {
                "id": 10,
                "title": "Every letter I sent you.",
                "imageUrl": "https://musicmeta-phinf.pstatic.net/album/003/735/3735168.jpg?type=r360Fll&v=20200218131210"
            },
            "liked": 0
        },
        {
            "id": 3,
            "title": "0310",
            "lyrics": "You smoked and you looked at me\n넌 담배를 피며 날 쳐다봤어\nI hate it when you do \n난 네가 그럴 때가 싫더라\nI said “no thanks” to you\n난 됐다고 말했고 \nyou asked me If I was okay,\n넌 괜찮냐 물었지 \nwhat If I wasn’t \n안 괜찮다면 뭐 어때 \n\nLeaving is fine \n떠나도 괜찮아\nIt’s just I don’t wanna be all by myself again\n난 그냥 또 다시 혼자가 되고 싶지 않은데\nlike every time, like every last time\n항상 그랬듯, 항상 그전처럼 말야\n\nYou knew that I was no good for you \n넌 내가 너에게 좋지 않을 거란 걸 알았어\nwhen we lay down after doing that things you loved \n네가 좋아하던 것들을 하고나서 누워있을 때 말야 \nyou knew that I wasn’t better than you \n넌 내가 너보다 나은 사람이 아닌 걸 알고 있었어 \nI hope that I could be seemed really fine with you leaving \n네가 떠나도 괜찮아 보일 수 있으면 좋겠어",
            "artist": {
                "id": 5,
                "name": "백예린"
            },
            "album": {
                "id": 10,
                "title": "Every letter I sent you.",
                "imageUrl": "https://musicmeta-phinf.pstatic.net/album/003/735/3735168.jpg?type=r360Fll&v=20200218131210"
            },
            "liked": 0
        }
    ]
}

const TrackDatas = playlistData.tracks;

const Artistdata = Array(9).fill({
    id: 3,
    name: "이영지",
    imageUrl: "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg",
    genre: {
        id: 1,
        name: "랩/힙합"
    }
});

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

const Playlist = () => {
    return (
        <Container>
            <Header>
                <DetailHeader sort = "playlist" data = {playlistData}/>
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

export default Playlist;