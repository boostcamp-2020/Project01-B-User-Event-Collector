import PlayListCardList from '.';

export default {
    title: 'Organisms/PlayListCardList',
    component: PlayListCardList,
};
const PlaylistDatas = Array(10).fill({
    title: '이영지 대표곡',
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=f674_674_repre3&v=2020113005',
    href: '#',
    description: 'VIBE',
});
export const Default = () => <PlayListCardList items={PlaylistDatas} />;
