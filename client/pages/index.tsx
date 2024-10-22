import styled from 'styled-components';
import MainMagazineCard from '@components/organisms/Cards/MainMagazineCard/MainMagazineCard';
import CardListContainer from '@components/organisms/CardListContainer';
import MagazineCardList from '@components/organisms/CardLists/MagazineList/MagazineList';
import ContentsCardList from '@components/organisms/CardLists/ContentsCardList';
import { requestByCookie, request } from '@utils/apis';
import apiUrl from '@constants/apiUrl';
import { page, contentType } from '@constants/identifier';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { useSelector, useDispatch } from 'react-redux';

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

const NotLoginContentsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgba(50,50,50,0.3);
    height: 100px;
    font-weight: 700;
`;

const ContentsContainer = styled.div`
    border-bottom: 1px solid #dddddd;
`;

const Home = ({ Magazinesdata, Newsdata, Playlistdata, Albumdata }) => {
    //TODO: isLogined state 이용하여 <UserContentsContainer> 부분은 로그인 했을 때만 보이도록 수정
    const user = useSelector((state) => state.user);

    return (
        <ComponentInfoContext.Provider value={{ componentId: page.today }}>
            <TodayContainer>
                <MainMagazineContainer>
                    <ComponentInfoWrapper componentId={contentType.mainMagazine}>
                        <MainMagazineCard {...Magazinesdata[0]} />
                    </ComponentInfoWrapper>
                </MainMagazineContainer>
                {!user.isLoggedIn && 
                <NotLoginContentsContainer>
                로그인을 하셔야 모든 서비스를 이용하실 수 있습니다.
                </NotLoginContentsContainer>
                }
                <PublicContentsContainer >
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
                {user.isLoggedIn && (
                    <UserContentsContainer>
                        <ContentsContainer>
                            <ComponentInfoWrapper componentId={contentType.recommendedPlaylist}>
                                <CardListContainer title="내 취향 플레이리스트" href="/">
                                    <ContentsCardList variant="playlist" items={Playlistdata} />
                                </CardListContainer>
                            </ComponentInfoWrapper>
                        </ContentsContainer>
                        {
                            // TODO: user logined -> 믹스테잎 or null
                        }
                        {/* <ContentsContainer>
                        <ComponentInfoWrapper componentId={contentType.mixtape}>
                            <CardListContainer title="나를 위한 믹스테잎">
                                <ContentsCardList variant="mixtape" items={Mixtapedata} />
                            </CardListContainer>
                        </ComponentInfoWrapper>
                    </ContentsContainer> */}
                        <ContentsContainer>
                            <ComponentInfoWrapper componentId={contentType.customizedAlbum}>
                                <CardListContainer title="좋아할 최신 앨범" href="/">
                                    <ContentsCardList variant="album" items={Albumdata} />
                                </CardListContainer>
                            </ComponentInfoWrapper>
                        </ContentsContainer>
                    </UserContentsContainer>
                )}
            </TodayContainer>
        </ComponentInfoContext.Provider>
    );
};

export async function getServerSideProps() {
    const [Magazinesdata, Newsdata, Playlistdata, Albumdata] = await Promise.all([
        request(apiUrl.magazine),
        request(apiUrl.news),
        request(apiUrl.playlist),
        request(apiUrl.album),
    ]);

    if (!Magazinesdata || !Newsdata || !Playlistdata || !Albumdata) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            Magazinesdata,
            Newsdata,
            Playlistdata,
            Albumdata,
        },
    };
}

export default Home;
