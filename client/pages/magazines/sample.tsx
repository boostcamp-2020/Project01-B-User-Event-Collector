import styled from 'styled-components';
import Text from '@components/atoms/Text';
import Label from '@components/atoms/Label';
import Image from '@components/atoms/Image/Image';
import A from '@components/atoms/A/A';
import Button from '@components/atoms/Button';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const MagazineHeaderData = {
    label: 'GENRE',
    title: "나만 없어 그 한정판 LP 레코드",
    description: `플로피 디스크 모양의 저장 버튼처럼 상징적 존재가 될 것 같았던 LP 레코드가 다시 규모로는 작아도 열기로는 큰 존재가 되고 있다. 특성상 한정반으로 발매될 수밖에 없는 LP 레코드와 1초의 차이로 그를 구입하지 못한 이들을 위해 LP 레코드로 발매되어 많은 사랑을 받은 음반을 모아봤다. 결국 중요한 건 음악 아닌가. 나만 없는 그 한정판 LP 레코드. 바이브에서 맘껏 들으시길. - 하박국`,
    href: '/playlist/sample'
}

const magData = {
    id: 1,
    title: "나만 없어 그 한정판\nLP 레코드",
    imageUrl: "https://music-phinf.pstatic.net/20201116_25/1605515795782Xy0Kf_JPEG/0-%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6-%C1%A4%B9%E6%C7%FC_11.jpg?type=w720",
    date: "2020-11-19",
    category: "gerne",
    playlist: {
        id: 1,
        description: null,
        tracks: [
            {
                id: 1,
                title: "Square",
                lyrics: "All the colors and personalities\n모든 색깔과 성격들 \nyou can’t see right through what I truly am\n그것들 사이로는 내가 정말 어떤 사람인지 볼 수 없어\nyou’re hurting me without noticing \n넌 예고도 없이 나에게 상처를 주고 \nI’m so, so broke like someone just robbed me\n누가 날 털어간 것 마냥 부서진 것 같아\n\nI’m no invincible\n난 강한 사람이 아니야\nI have much memories of getting more weaker \n난 점점 약해져가는 기억들이 훨씬 많은 걸\nI know I’m not loveable\n나도 내가 사랑받을 수 없는 거 알아\nbut you know what you’d have to say\n그래도 네가 어떤 말을 해줘야 하는지 알지?\n\n\n“Come on let’s go to bed \n“나와 같이 침대로 가자 \nwe gonna rock the night away\n우린 이 밤을 신나게 보낼 거야\nwho did that to you, babe\n누가 너에게 그런 짓을 한 거야\nIf you’re not in the right mood to sleep now then, \n네가 당장 잠들 수 있는 기분이 아니라면 \nCome on, let’s drink and have very unmanageable day \n나와서 나랑 한잔하고, 감당하기 힘든 하루를 보내자!\nwould you want me in bae\n내가 거기 있길 바라?\nIf you’re not in the right mood to sleep now then \n네가 당장 잠들 수 있는 기분이 아니라면 \ncome take my arms and go \n나와 함께 가자!\nI’II be yours for sure”\n내가 너의 것이 되어줄게!” ",
                playtime: 261,
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
                liked: 1
            },
            {
                id: 2,
                title: "Popo (How deep is our love?)",
                lyrics: "Get away from your own sorrow\n슬픔에서 벗어나봐요\nLet the sun come through your window\n당신의 창문에 햇살이 들어오게 해봐요\nYou don’t have to open up wide \n마음을 활짝 열 필요는 없지만\nBut I want to intimate\n전 가까워지고 싶어요 \n\n\nYou’ll never know how much your voice attracts me, boy\n당신은 당신 목소리가 날 얼마나 끌리게 하는지 모를 거예요\nIt’s exceptional\n정말 특별해요\nEspecially, when you’re playing the song for me\n특히 날 위해 곡을 연주할 땐\nI can’t take my eyes away\n눈을 뗄 수 없어요\n\n\nCan I walk with you? \n당신과 걸을 수 있을까요\nor have a tea with you\n차를 마셔도 좋아요\nYour scent makes me feel like I live in Paris \n당신의 향기는 내가 마치 파리에 살고 있는 것처럼 느끼게 해요\nCan I love you?\n사랑해도 될까요?\ngiving my all to you?\n내 전부를 다 주는 것도요 \nyou \n당신에게요",
                playtime: 261,
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
            },
            {
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
                liked: 1
            }
        ]
    }
}

const MagazineData = [
    {
    title: '백예린 - Every Letter I Sent you',
    src: 'https://music-phinf.pstatic.net/20201116_134/1605515912711lcfoe_JPEG/1_%B9%E9%BF%B9%B8%B0.jpeg',
    description: '발매되기 전부터 이토록 화제를 모은 앨범이 2020년에 또 있었을까. JYP를 나간 후 백예린이 발표한 앨범 <Every letter i sent you>는 발매 전부터 후까지 쉬지 않고 크고 작은 화제를 모았다. 음원으로 발표되지 않아 많은 사람들이 라이브 영상 클립으로만 보고 들었던 ‘Square’가 수록된 것을 포함해, 18곡에 이르는 더블 시디 분량의 곡 수. 전 곡을 영어로 부른 것까지 기존 대중가요계에서는 찾기 힘든 파격이 돋보이는 앨범이었다. 2,000장 한정으로 발매된 한정판 투명 블루디스크 LP 레코드가 1분도 안 돼 동나는 건 당연한 일. 안타까운 건 이를 구입한 이들 중에는 재판매(리셀)을 목적으로 프리미엄(플미)를 붙여 판매하려는 업자도 속해 있었다는 점이다. 결국 백예린은 이후 예약 구매를 받아 제작하는 형태로 다시 LP 레코드를 제작했다. 그 역시 현재는 플미 거래되고 있다고. 이래저래 대단한 백예린이다.',
    tracks: magData.playlist.tracks
    },
    // {
    //     title: '이소라 - 눈썹달',
    //     src: 'https://music-phinf.pstatic.net/20201116_263/1605516347825ddHwx_JPEG/4_%C0%CC%BC%D2%B6%F3.jpg',
    //     description: `바이닐 붐이 일면서 가장 좋은 점 중 하나는 과거의 명반을 커다란 LP 레코드를 통해 다시 소장할 수 있는 기쁨이다. 대신 아쉬운 점도 있는데 대부분의 음반이 재빨리 클릭하지 않으면 구할 수 없을뿐더러 그중 상당수가 리셀러에게 비싼 가격에 판매된다는 점이다. 최근에는 이를 막기 위해 사전예약을 받은 후 LP 레코드를 제작하는 경우도 있지만, 모든 제작자가 그렇게 친절하진 않다. 이소라의 <눈썹달>은 재발매되기 딱 좋은 요건을 갖춘 음반이다. '바람이 분다'라는 명곡 수록, 아름다운 앨범 디자인, 거기다 활동이 드문 이소라라는 가수의 신비로움까지. 이소라의 <눈썹달>은 천으로 만든 커버와 두 장의 보라색 LP로 발매 전부터 많은 이의 기대를 모았다. 하지만 지나치게 높은 가격과 겉에 비해 허전한 부클릿, A면이 모노로 녹음되어 있다는 소문과 나쁜 음질로 발매 후 리콜 논란에 휩싸이기도 했다. 그와 상관없이 음반은 리셀러에게 비싸게 판매되고 있지만.`,
    //     tracks: [
    //         {
    //             albumImgSrc: 'https://musicmeta-phinf.pstatic.net/album/000/029/29410.jpg?type=r480Fll&v=20191212155250',
    //             trackId: '1',
    //             trackTitle: '바람이 분다',
    //             artist: '이소라',
    //             albumTitle: '눈썹달',
    //             href: '/track/sample',
    //             lyrics: '아직 없음ㅎ'
    //         },
    //         {
    //             albumImgSrc: 'https://musicmeta-phinf.pstatic.net/album/000/029/29410.jpg?type=r480Fll&v=20191212155250',
    //             trackId: '1',
    //             trackTitle: '이제 그만',
    //             artist: '이소라',
    //             albumTitle: '눈썹달',
    //             href: '/track/sample',
    //             lyrics: '아직 없음ㅎ'
    //         },
    //         {
    //             albumImgSrc: 'https://musicmeta-phinf.pstatic.net/album/000/029/29410.jpg?type=r480Fll&v=20191212155250',
    //             trackId: '1',
    //             trackTitle: '시시콜콜한 이야기',
    //             artist: '이소라',
    //             albumTitle: '눈썹달',
    //             href: '/track/sample',
    //             lyrics: '아직 없음ㅎ'
    //         },
    //     ]
    // }
]

const data = {
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
    liked: 1
}

const TrackDatas = Array(20).fill(data);

const Container = styled.div`
    min-height: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 0 0 150px 225px;
    margin: 0;
`;

const Header = styled.div`
    display: flex;
    flex-flow: column;
    background-color: rgba(0,0,0,0.85);
    justify-content: center;
    align-items: center;
    margin: 0 0 20px 0;
    width: 100%;
    min-height: 400px;
`;

const LabelContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 15px 0;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    color: white;
    font-size: 38px;
    font-weight: 700;
    margin: 15px 0;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 960px;
    color: #999;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    line-height: 25px;
    margin: 15px 0;
`;

const PlaylistLinkConainer = styled.div`
    margin: 15px 0;
`;

const ButtonContainer = styled.div`
    margin: 15px 0;
    width: 270px;
    display: flex;
    justify-content: space-between;
`;

const ContentsContainer = styled.div`
    width: 960px;
`;

const ContentsBox = styled.div`
    border-bottom: 1px solid #dddddd;
    padding: 30px 0 40px 0;
`;

const ContentsTitleContainer = styled.div`
    font-size: 28px;
    line-height: 38px;
    font-weight: 700;
    margin: 20px 0;
`;

const ContentsImageContainer = styled.div`

`;

const ContentsDescriptionContainer = styled.div`
    padding: 8px 0;
    font-size: 15px;
    color: #4e4e4e;
    line-height: 26px;
    word-break: break-all;
    margin: 20px 0;
`;

const ContentsTrackListContainer = styled.div`

`;

const WholeTrackListContainer = styled.div`

`;

const WholeTrackTitleContainer = styled.div`
    padding: 8px 0;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
`;

const MagazineDetail = () => {
    return (
        <Container>
            <Header>
                <LabelContainer>
                    <Label selected = {true} variant = "secondary">{MagazineHeaderData.label}</Label>
                </LabelContainer>
                <TitleContainer>
                    {MagazineHeaderData.title}
                </TitleContainer>
                <DescriptionContainer>
                    {MagazineHeaderData.description}
                </DescriptionContainer>
                <PlaylistLinkConainer>
                    <A href = {MagazineHeaderData.href} variant="tertiary">플레이리스트 보기 ></A>
                </PlaylistLinkConainer>
                <ButtonContainer>
                    <Button variant = "primary" width='130' height='40' icon={PlayArrowIcon} >전체재생</Button>
                    <Button width='130' height='40' icon={ShuffleIcon}>랜덤재생</Button>
                </ButtonContainer>
            </Header>
            <ContentsContainer>
                {MagazineData.map(m => (
                                    <ContentsBox>
                                    <ContentsTitleContainer>
                                        {m.title}
                                    </ContentsTitleContainer>
                                    <ContentsImageContainer>
                                        <img src={m.src} width = "960px"/>
                                    </ContentsImageContainer>
                                    <ContentsDescriptionContainer>
                                        {m.description}
                                    </ContentsDescriptionContainer>
                                    <ContentsTrackListContainer>
                                        <TrackRowList items={m.tracks} />
                                    </ContentsTrackListContainer>
                                </ContentsBox>
                ))}
                <ContentsBox>
                    <WholeTrackListContainer>
                        <WholeTrackTitleContainer>
                            {MagazineHeaderData.title}
                        </WholeTrackTitleContainer>
                        <TrackRowList items={TrackDatas} />
                    </WholeTrackListContainer>
                </ContentsBox>
            </ContentsContainer>
        </Container>
    )   
}

export default MagazineDetail;