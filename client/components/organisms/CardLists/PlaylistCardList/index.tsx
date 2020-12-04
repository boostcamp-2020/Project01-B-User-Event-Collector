import styled from 'styled-components';
import PlaylistCard from '@components/organisms/Cards/PlaylistCard/PlaylistCard';
import { PlaylistCardProps } from '@interfaces/props';

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    white-space: nowrap;
`;
const List = styled.li`
    display: inline-block;
    & + & {
        margin-left: 18px;
    }
`;
const PlaylistCardList = ({ items }: { items: PlaylistCardProps[] }) => (
    <ListContainer>
        {items.map((item) => (
            <List>
                <PlaylistCard {...(item as PlaylistCardProps)} />
            </List>
        ))}
    </ListContainer>
);

export default PlaylistCardList;
