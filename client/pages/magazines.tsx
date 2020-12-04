import styled from 'styled-components';

import Text from '@components/atoms/Text';
import Label from '@components/atoms/Label';
import MainMagazineCard from '@components/organisms/Cards/MainMagazineCard/MainMagazineCard';
import { MagazineSort } from '@interfaces/props';
import MagazineList from '@components/organisms/CardLists/MagazineList/MagazineList';

const mainMagazineData = {
    src:
        'https://music-phinf.pstatic.net/20201119_255/1605768990292DkTAH_JPEG/%B4%EB%C7%A5-%C0%CC%B9%CC%C1%F61.jpg?type=w720',
    href: 'localhost:3000',
    title: '차트를 달리는 래퍼 : 잭 할로우, 물라토',
    description:
        '아직 한 달 남짓한 시간이 남았지만, 2020년 역시 힙합의 해라고 해도 과언이 아니지 않을까? 신인을 비롯한 수많은 힙합 아티스트들이 빌보드 HOT 차트 상위권을 거쳐가며 인기를 끌었기 때문이다. 그런데 최근 힙합을 잘 챙겨 듣지 않은 이들에게는 신인의 이름이 낯설 수도 있다. 올해가 가기 전 이름을 알아 두면 좋을 일곱 명의 래퍼를 확인해보자. - 힙합엘이',
    label: 'GENRE',
};

const Magazinesdata = Array(9).fill({
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    href: 'localhost:3000',
    title: `이 주의 디깅 #77 
    이영지 새 앨범 발표`,
    date: '2020.11.25',
    sort: MagazineSort.main,
});

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: #fbfbfb;
    padding: 0 0 300px 225px;
`;

const TitleContainer = styled.div`
    width: 960px;
    display: flex;
    margin-top: 60px;
`;

const LabelContainer = styled.div`
    width: 960px;
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
`;

const MainMagazineContainer = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 0 40px 0;
`;

const ContentsContainer = styled.div`
    width: 960px;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const Magazine = () => {
    return (
        <Container>
            <TitleContainer>
                <Text variant="tertiary">VIBE MAG</Text>
            </TitleContainer>
            <LabelContainer>
                <Label variant="primary" selected={true}>
                    전체
                </Label>
                <Label variant="special">SPECIAL</Label>
                <Label variant="primary">PICK</Label>
                <Label variant="secondary">GENRE</Label>
            </LabelContainer>
            <MainMagazineContainer>
                <MainMagazineCard {...mainMagazineData} />
            </MainMagazineContainer>
            <ContentsContainer>
                <ContentsContainer>
                    <MagazineList items={Magazinesdata} />
                </ContentsContainer>
            </ContentsContainer>
        </Container>
    );
};

/*export const getServerSideProps = wrapper.getServerSideProps((context) => {
    constext.store.dispatch({
        type: LOAD_USER_REQUEST,
    });
})*/

export default Magazine;
