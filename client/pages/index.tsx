import styled from 'styled-components';

import MainMagazineCard from '@components/organisms/Cards/MainMagazineCard/MainMagazineCard';
import CardListContainer from '@components/organisms/CardListContainer';
import { MagazineSort } from '@interfaces/props';
import MagazineCardList from '@components/organisms/CardLists/MagazineList/MagazineList';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import Link from 'next/link';
import { fetchListData } from '../utils/apis';
import apiUrl from '../constants/apiUrl';

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

const Home = ({ Magazinesdata, Newsdata, Playlistdata, Albumdata, Mixtapedata }) => {
    //TODO: isLogined state 이용하여 <UserContentsContainer> 부분은 로그인 했을 때만 보이도록 수정
    return (
        <TodayContainer>
            <MainMagazineContainer>
                <Link href="/magazines/main">
                    <a>
                        <MainMagazineCard {...Magazinesdata[0]} />
                    </a>
                </Link>
            </MainMagazineContainer>
            <PublicContentsContainer>
                <ContentsContainer>
                    <CardListContainer title="매거진" href="/">
                        <MagazineCardList variant="row" items={Magazinesdata.slice(1)} />
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
    );
};

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export async function getStaticProps() {
    const Magazinesdata = await fetchListData(apiUrl.magazine);
    const Newsdata = await fetchListData(apiUrl.news);
    const Playlistdata = await fetchListData(apiUrl.playlist);
    const Albumdata = await fetchListData(apiUrl.album);
    const Mixtapedata = await fetchListData(apiUrl.mixtape);

    return {
        props: {
            Magazinesdata,
            Newsdata,
            Playlistdata,
            Albumdata,
            Mixtapedata,
        }, // will be passed to the page component as props
    };
}

export default Home;
