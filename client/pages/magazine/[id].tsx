import styled from 'styled-components';
import Text from '@components/atoms/Text';
import Label from '@components/atoms/Label';
import Image from '@components/atoms/Image/Image';
import A from '@components/atoms/A/A';
import Button from '@components/atoms/Button';
import TrackRowList from '@components/organisms/CardLists/TrackRowList';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { requestByCookie } from '@utils/apis';
import apiUrl from '@constants/apiUrl';
import { page, contentType } from '@constants/identifier';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { addToUpNext, addToUpNextAndPlay } from 'reducers/musicPlayer';

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
    background-color: rgba(0, 0, 0, 0.85);
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
    justify-content: center;
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

const ContentsImageContainer = styled.div``;

const ContentsDescriptionContainer = styled.div`
    padding: 8px 0;
    font-size: 15px;
    color: #4e4e4e;
    line-height: 26px;
    word-break: break-all;
    margin: 20px 0;
`;

const ContentsTrackListContainer = styled.div``;

const WholeTrackListContainer = styled.div``;

const WholeTrackTitleContainer = styled.div`
    padding: 8px 0;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
`;

const MagazineDetail = ({ magazineData }) => {
    const dispatch = useDispatch();
    const onClickPlayHandler = () => {
        dispatch(addToUpNextAndPlay(magazineData.playlist.tracks));
    }

    return (
        <ComponentInfoContext.Provider value={{ componentId: `${page.magazine}-${magazineData.id}` }}>
            <Container>
                <ComponentInfoWrapper componentId={contentType.summaryHeader}>
                    <Header>
                        <LabelContainer>
                            <Label selected={true} variant="secondary">
                                {magazineData.category}
                            </Label>
                        </LabelContainer>
                        <TitleContainer>{magazineData.title}</TitleContainer>
                        <DescriptionContainer>{magazineData.description}</DescriptionContainer>
                        <ComponentInfoWrapper componentId={contentType.playlist}>
                            <PlaylistLinkConainer>
                                <A href={'/playlist/' + magazineData.playlist.id} variant="tertiary">
                                    플레이리스트 보기
                                </A>
                            </PlaylistLinkConainer>
                            <ButtonContainer>
                                <Button variant="primary" width="130" height="40" icon={PlayArrowIcon} onClick={onClickPlayHandler}>
                                    전체재생
                                </Button>
                            </ButtonContainer>
                        </ComponentInfoWrapper>
                    </Header>
                </ComponentInfoWrapper>
                <ComponentInfoWrapper componentId={contentType.article}>
                    <ContentsContainer>
                        <ContentsBox>
                            <ContentsTitleContainer>{magazineData.subTitle}</ContentsTitleContainer>
                            <ContentsImageContainer>
                                <img src={magazineData.imageUrl} width="960px" />
                            </ContentsImageContainer>
                            <ContentsDescriptionContainer>{magazineData.content}</ContentsDescriptionContainer>
                            <ComponentInfoWrapper componentId={contentType.track}>
                                <ContentsTrackListContainer>
                                    <TrackRowList items={magazineData.playlist.tracks} />
                                </ContentsTrackListContainer>
                            </ComponentInfoWrapper>
                        </ContentsBox>
                        <ContentsBox>
                            <ComponentInfoWrapper componentId={contentType.track}>
                                <WholeTrackListContainer>
                                    <WholeTrackTitleContainer>{magazineData.title}</WholeTrackTitleContainer>
                                    <TrackRowList items={magazineData.playlist.tracks} />
                                </WholeTrackListContainer>
                            </ComponentInfoWrapper>
                        </ContentsBox>
                    </ContentsContainer>
                </ComponentInfoWrapper>
            </Container>
        </ComponentInfoContext.Provider>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;
    const { req, res } = context;

    const magazineData = await requestByCookie(req, res,`${apiUrl.magazine}/${id}`);

    if (!magazineData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            magazineData,
        },
    };
}
export default MagazineDetail;
