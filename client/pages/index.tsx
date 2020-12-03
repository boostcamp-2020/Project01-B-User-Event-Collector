import styled from 'styled-components';

import MainMagazineCard from "@components/organisms/Cards/MainMagazineCard/MainMagazineCard";
import CardListContainer from "@components/organisms/CardListContainer";
import { MagazineSort } from '@interfaces/props';
import MagazineCardList from '@components/organisms/CardLists/MagazineList/MagazineList';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import Link from 'next/link';

const mainMagazineData = 
{
    src: "https://music-phinf.pstatic.net/20201119_255/1605768990292DkTAH_JPEG/%B4%EB%C7%A5-%C0%CC%B9%CC%C1%F61.jpg?type=w720",
    href: "localhost:3000",
    title: "차트를 달리는 래퍼 : 잭 할로우, 물라토",
    description: "아직 한 달 남짓한 시간이 남았지만, 2020년 역시 힙합의 해라고 해도 과언이 아니지 않을까? 신인을 비롯한 수많은 힙합 아티스트들이 빌보드 HOT 차트 상위권을 거쳐가며 인기를 끌었기 때문이다. 그런데 최근 힙합을 잘 챙겨 듣지 않은 이들에게는 신인의 이름이 낯설 수도 있다. 올해가 가기 전 이름을 알아 두면 좋을 일곱 명의 래퍼를 확인해보자. - 힙합엘이",
    label: "GENRE"
}

const Magazinesdata = Array(9).fill({
    src: 'https://music-phinf.pstatic.net/20201116_25/1605515795782Xy0Kf_JPEG/0-%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6-%C1%A4%B9%E6%C7%FC_11.jpg?type=w720',
    href: '/magazines/sample',
    title: "나만 없어 그 한정판 LP 레코드",
    date: '2020.11.19',
    sort: MagazineSort.main,
});

const Newsdata = Array(9).fill({
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    href: 'localhost:3000',
    title: `이영지가 새 앨범을 발표했습니다`,
});

const Albumdata = Array(9).fill({
    src: "https://musicmeta-phinf.pstatic.net/album/005/102/5102890.jpg?type=r360Fll&v=20201123123608",
    href: 'localhost:3000',
    title: "Blue Skies",
    artist: "Birdy"
});

const Artistdata = Array(9).fill({
    name: '이영지',
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    href: 'localhost:3000',
});

const Mixtapedata = Array(9).fill({
    src: "https://vibeapp.music.naver.com/vibe/v1/cover/mix/3171155,2487724,3553414,635724/favorite/favorite/",
    href: 'localhost:3000',
    title: "나를 위한 믹스테잎",
    artist: "Lana Del Rey, Dua Lipa, 이영지"
});

const Playlistdata = Array(9).fill({
    src: "https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png",
    href: 'localhost:3000',
    title: "VIBE AND CHILL",
    description: "VIBE"
});

const TodayContainer = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: #f2f2f2;
    padding: 0 0 300px 225px;
`;

const MainMagazineContainer = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 40px 0;
`;

const PublicContentsContainer = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const UserContentsContainer = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const ContentsContainer = styled.div`
    border-bottom: 1px solid #dddddd;
`;

const Home = () => {
    //TODO: isLogined state 이용하여 <UserContentsContainer> 부분은 로그인 했을 때만 보이도록 수정
    return (
        <TodayContainer>
            <MainMagazineContainer>
                <Link href='/magazines/main'><a><MainMagazineCard {...mainMagazineData} /></a></Link>
            </MainMagazineContainer>
            <PublicContentsContainer>
                <ContentsContainer>
                    <CardListContainer title="매거진" href="/">
                        <MagazineCardList variant="row" items={Magazinesdata} />
                    </CardListContainer>
                </ContentsContainer>
                <ContentsContainer>
                    <CardListContainer title="NEWS">
                        <ContentsCardList variant="news" items={Newsdata} />
                    </CardListContainer>
                </ContentsContainer>
                <ContentsContainer>
                    <CardListContainer title="VIBE 추천 플레이리스트" href="/">
                        <ContentsCardList variant="playlist" items={Playlistdata} />
                    </CardListContainer>
                </ContentsContainer>
            </PublicContentsContainer>
            <UserContentsContainer>
                <ContentsContainer>
                    <CardListContainer title="내 취향 플레이리스트" href="/">
                        <ContentsCardList variant="playlist" items={Playlistdata} />
                    </CardListContainer>
                </ContentsContainer>
                <ContentsContainer>
                    <CardListContainer title="나를 위한 믹스테잎">
                        <ContentsCardList variant="mixtape" items={Mixtapedata} />
                    </CardListContainer>
                </ContentsContainer>
                <ContentsContainer>
                    <CardListContainer title="좋아할 최신 앨범" href="/">
                        <ContentsCardList variant="album" items={Albumdata} />
                    </CardListContainer>
                </ContentsContainer>
            </UserContentsContainer>
        </TodayContainer>
    )
}

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default Home;