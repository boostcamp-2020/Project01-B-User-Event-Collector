import styled from 'styled-components';
import Text from '@components/atoms/Text/Text';
import Label from '@components/atoms/Label';
import Image from '@components/atoms/Image/Image';
import A from '@components/atoms/A/A';
import Button from '@components/atoms/Button';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const MagazineHeaderData = {
    label: 'GENRE',
    title: "차트를 달리는 래퍼 : 잭 할로우, 물라토",
    description: `아직 한 달 남짓한 시간이 남았지만, 2020년 역시 힙합의 해라고 해도 과언이 아니지 않을까? 신인을 비롯한 수많은 힙합 아티스트들이 빌보드 HOT 차트 상위권을 거쳐가며 인기를 끌었기 때문이다. 그런데 최근 힙합을 잘 챙겨 듣지 않은 이들에게는 신인의 이름이 낯설 수도 있다. 올해가 가기 전 이름을 알아 두면 좋을 일곱 명의 래퍼를 확인해보자. - 힙합엘이`,
    href: '/playlist/sample'
}

const MagazineData = [
    {
    title: '동에 번쩍 서에 번쩍 피처링 물라토',
    src: 'https://music-phinf.pstatic.net/20201119_227/1605769173602G013B_JPEG/%B5%CE_%B9%F8%C2%B0_%B9%AE%B4%DC%28%B9%B0%B6%F3%C5%E4%29.jpg',
    description: '역사적인(?) 싱글 ‘WAP’의 뮤직비디오에 등장해 자신의 존재감을 뽐낸 물라토(Mulatto). 사실 그는 프로듀서 저메인 듀프리(Jermaine Dupri)의 신인 래퍼 발굴 프로그램인 <The Rap Game>에서 시즌 1 우승을 차지하며 힙합 팬들에게 이름을 일찍 알렸다. 올해에는 ‘B*tch From Da Souf’로 들어온 성공의 흐름을 이어 나가 구찌 메인(Gucci Mane), 투 체인즈(2 Chainz) 등 다양한 아티스트의 앨범에 참여하며 점차 신에서 자신의 입지를 넓혀가고 있다.',
    tracks: [
        {
            albumImgSrc: "https://musicmeta-phinf.pstatic.net/album/004/728/4728886.jpg?type=r100Fll&amp;v=20200729235909",
            trackId: '1',
            trackTitle: 'Muwop (Feat. Gucci Mane)',
            artist: 'Mulatto',
            albumTitle: 'Muwop',
            href: '/track/sample'
        },
        {
            albumImgSrc: 'https://musicmeta-phinf.pstatic.net/album/004/815/4815118.jpg?type=r100Fll&v=20201102151535',
            trackId: '1',
            trackTitle: 'Popo (How deep is our love?)',
            artist: 'Mulatto, Saweetie',
            albumTitle: 'Queen of Da Souf',
            href: '/track/sample'
        },
    ]
    },
    {
        title: '레모네이드의 은총을 받은 잭 할로우',
        src: 'https://music-phinf.pstatic.net/20201119_200/1605769088113PEDYD_JPEG/%C3%B9_%B9%F8%C2%B0_%B9%AE%B4%DC%28%C0%E8%C7%D2%B7%CE%BF%EC%29.jpg',
        description: `브라이슨 틸러(Bryson Tiller)와의 협업 곡 ‘THRU THE NIGHT’을 통해 떡잎부터 남다른 재능을 보여줬던 잭 할로우(Jack Harlow). 그는 “미다스의 손”이라 불리는 뮤직비디오 감독 콜 베넷(Cole Bennett)과 리리컬 레모네이드(Lyrical Lemonade)의 든든한 지원에 힘입어 ‘WHATS POPPIN’을 힙합 팬의 눈에 띄게 하는 데 성공한다. 이후, 추진력을 얻기 위해 다베이비(DaBaby), 릴 웨인(Lil Wayne) 등이 참여한 리믹스를 발표하며 빌보드 HOT 차트 2위를 달성하기에 이른다.`,
        tracks: [
            {
                albumImgSrc: 'https://musicmeta-phinf.pstatic.net/album/004/612/4612176.jpg?type=r480Fll&v=20200629143408',
                trackId: '1',
                trackTitle: 'WHATS POPPIN (Feat. DaBaby, Tory Lanez & Lil Wayne) (Remix)',
                artist: 'Jack Harlow',
                albumTitle: "WHATS POPPIN (Feat. DaBaby, Tory Lanez & Lil Wayne) (Remix)",
                href: '/track/sample'
            },
            {
                albumImgSrc: 'https://musicmeta-phinf.pstatic.net/album/004/612/4612176.jpg?type=r480Fll&v=20200629143408',
                trackId: '1',
                trackTitle: 'WHATS POPPIN (Feat. DaBaby, Tory Lanez & Lil Wayne) (Remix)',
                artist: 'Jack Harlow',
                albumTitle: "WHATS POPPIN (Feat. DaBaby, Tory Lanez & Lil Wayne) (Remix)",
                href: '/track/sample'
            },
            {
                albumImgSrc: 'https://musicmeta-phinf.pstatic.net/album/004/612/4612176.jpg?type=r480Fll&v=20200629143408',
                trackId: '1',
                trackTitle: 'WHATS POPPIN (Feat. DaBaby, Tory Lanez & Lil Wayne) (Remix)',
                artist: 'Jack Harlow',
                albumTitle: "WHATS POPPIN (Feat. DaBaby, Tory Lanez & Lil Wayne) (Remix)",
                href: '/track/sample'
            },
        ]
    }
]

const TrackDatas = Array(20).fill({
    albumImgSrc: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    trackId: '1',
    trackTitle: 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)',
    artist: '미란이',
    albumTitle: '쇼미더머니 9 Episode 1',
    href: '/track/sample'
});

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