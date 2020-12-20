import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import PlayButton from './PlayButton';

const store = {
    getState: () => {
        return {
            user: { id: 1 },
            musicPlayer: {
                nowPlaying: { id: 1 },
                playTime: 120,
            },
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

export default {
    title: 'Molecules/PlayButton',
    component: PlayButton,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
};

const data = {
    id: 11,
    title: '그냥',
    description:
        '이영지의 새로운 싱글앨범 <그냥>이 발매되었다.\n\n이번 곡은 아티스트 이영지가 그 동안 보여줘 왔던 기존 곡들과는 사뭇 다른 감성으로 우리에게 다가온다.\n\n2019년 11월 첫번째 발표곡 <암실>을 시작으로 약 6개월간 5곡의 작품을 발표한 이영지는 자신의 음악적 스펙트럼을 계속해서 확장해 나가며 다양한 음악을 우리에게 선사하고 있다.\n\n감성짙은 이번 싱글앨범 <그냥>은 우리에게 그녀의 또 다른 새로운 시작을 알리고 있다.',
    releaseDate: '2020-05-07',
    imageUrl: 'https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg',
    artist: {
        id: 3,
        name: '이영지',
    },
    tracks: [
        {
            id: 4,
            title: '그냥',
            lyrics:
                "keep callin' to me\n왜 인지는 묻지 말아 주면은 안돼?\njust text me \n밥은 잘 먹고 있는지에 대해\n뭔들 난 다 좋아\n별거 없는 그런 삶\nim so sick of these days\n말해 줘 너의 밤은 어때\n또 너의 날은 어떻고?\n나의 시간은 못 돼서\n다시 이 굴레에 날 가둬  \n이 밤은 또 내껄\n자꾸만 뺏으려 들어\nwhere should i go right now? \n\n뭘 쥐어도 다 모래\n결국 흐르니 난 뭘 해?  \n못 된 생각이 인내를 놓을땐 \n도태 되는거야 no thanks\n가지면 뭐해\ni got nothing to prove no\n사랑을 할래\n위기는 모르는 채로 oh \n너 불안정한 내게\n자꾸 깊은 믿음을 심어주지마\n나도 모르는 새에\n널 내 안에 들여놓고 착각 할지도 몰라\n\npainful thoughts \nin ma head \n다 모순인 거야\n비운의 틈새로\n나 겨울의 냄새를 맡고파\npainful thoughts\nim ma head \n다 거짓인 거야\n난 그저 여름의 향수에만 잠깐 젖고파\ncuz im bored\n아늑하기만 한\n나의 방은 어두워서\n상처는 아물지  않아\n날 봐줘\n저 멀리 가고 있는\n날 보게 된다면은 붙잡아줘 ",
            playtime: 217,
            albumId: 11,
            artist: {
                id: 3,
                name: '이영지',
            },
            album: {
                id: 11,
                title: '그냥',
                imageUrl: 'https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg',
            },
            liked: 0,
        },
    ],
    relatedAlbums: [
        {
            id: 12,
            title: '암실',
            description:
                '이영지의 첫 싱글앨범 [암실] 이 발매되었다.\n고등래퍼3의 우승자 이면서 최연소 우승자란 타이틀을 거머쥔 래퍼 이영지의 첫 싱글앨범 [암실]은 본인이 작사, 작곡을 맡았다. ',
            releaseDate: '2019-11-02',
            imageUrl: 'https://musicmeta-phinf.pstatic.net/album/003/399/3399784.jpg',
            artist: {
                id: 3,
                name: '이영지',
            },
        },
        {
            id: 14,
            title: '타협',
            description:
                '래퍼 이영지의 6번째 디지털 싱글 앨범 [타협] 이 발매되었다.\n이번 앨범은 세상에 대한 회의감과 위화감, 체념 등의 복잡한 감정을 담은 곡이다.\n곡을 듣는 이 모두 자신만의 감정과 해석으로 들어주기를 바라며 이번 싱글 앨범 [타협]을 완성하였다.',
            releaseDate: '2020-11-18',
            imageUrl: 'https://musicmeta-phinf.pstatic.net/album/005/095/5095200.jpg?type=r360Fll&v=20201118115931',
            artist: {
                id: 3,
                name: '이영지',
            },
        },
    ],
};

export const Default = () => <PlayButton sort="album" data={data} />;
