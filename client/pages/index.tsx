import styled from 'styled-components';
import MainMagazineCard from '@components/organisms/Cards/MainMagazineCard/MainMagazineCard';
import CardListContainer from '@components/organisms/CardListContainer';
import MagazineCardList from '@components/organisms/CardLists/MagazineList/MagazineList';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import Link from 'next/link';
import { request } from '@utils/apis';
import apiUrl from '@constants/apiUrl';
import { page, contentType } from '@constants/identifier';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';

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
        <ComponentInfoContext.Provider value={{ componentId: page.today }}>
            <TodayContainer>
                <MainMagazineContainer>
                    <ComponentInfoWrapper componentId={contentType.mainMagazine}>
                        <MainMagazineCard {...Magazinesdata[0]} />
                    </ComponentInfoWrapper>
                </MainMagazineContainer>
                <PublicContentsContainer>
                    <ContentsContainer>
                        <ComponentInfoWrapper componentId={contentType.magaznie}>
                            <CardListContainer title="매거진" href="/">
                                <MagazineCardList variant="row" items={Magazinesdata.slice(1)} />
                            </CardListContainer>
                        </ComponentInfoWrapper>
                    </ContentsContainer>
                    <ContentsContainer>
                        <ComponentInfoWrapper componentId={contentType.news}>
                            <CardListContainer title="NEWS">
                                <ContentsCardList variant="news" items={Newsdata} />
                            </CardListContainer>
                        </ComponentInfoWrapper>
                    </ContentsContainer>
                    <ContentsContainer>
                        <ComponentInfoWrapper componentId={contentType.recommendedPlaylist}>
                            <CardListContainer title="VIBE 추천 플레이리스트" href="/">
                                <ContentsCardList variant="playlist" items={Playlistdata} />
                            </CardListContainer>
                        </ComponentInfoWrapper>
                    </ContentsContainer>
                </PublicContentsContainer>
                <UserContentsContainer>
                    <ContentsContainer>
                        <ComponentInfoWrapper componentId={contentType.recommendedPlaylist}>
                            <CardListContainer title="내 취향 플레이리스트" href="/">
                                <ContentsCardList variant="playlist" items={Playlistdata} />
                            </CardListContainer>
                        </ComponentInfoWrapper>
                    </ContentsContainer>
                    <ContentsContainer>
                        <ComponentInfoWrapper componentId={contentType.mixtape}>
                            <CardListContainer title="나를 위한 믹스테잎">
                                <ContentsCardList variant="mixtape" items={Mixtapedata} />
                            </CardListContainer>
                        </ComponentInfoWrapper>
                    </ContentsContainer>
                    <ContentsContainer>
                        <ComponentInfoWrapper componentId={contentType.customizedAlbum}>
                            <CardListContainer title="좋아할 최신 앨범" href="/">
                                <ContentsCardList variant="album" items={Albumdata} />
                            </CardListContainer>
                        </ComponentInfoWrapper>
                    </ContentsContainer>
                </UserContentsContainer>
            </TodayContainer>
        </ComponentInfoContext.Provider>
    );
};

export async function getServerSideProps(context) {
    const [Magazinesdata, Newsdata, Playlistdata, Albumdata, Mixtapedata] = await Promise.all([
        request(apiUrl.magazine),
        request(apiUrl.news),
        request(apiUrl.playlist),
        request(apiUrl.album),
        request(apiUrl.mixtape),
    ]);

    // TODO: error handling

    return {
        props: {
            Magazinesdata,
            Newsdata,
            Playlistdata,
            Albumdata,
            Mixtapedata,
        },
    };
}

export default Home;
