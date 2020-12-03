import React from 'react';
import NewsCard from '@components/organisms/Cards/NewsCard';
import MixtapeCard from '@components/organisms/Cards/MixtapeCard/MixtapeCard';
import AlbumCard from '@components/organisms/Cards/AlbumCard/AlbumCard';
import PlaylistCard from '@components/organisms/Cards/PlaylistCard/PlaylistCard';
import NormalArtistThumbnail from '@components/molecules/ArtistThumbnail/NormalArtistThumbnail/NormalArtistThumbnail';
import { NewsCardProps, MixtapeCardProps, LibraryArtistThumbnailProps, AlbumCardProps, PlaylistCardProps } from '@interfaces/props';
import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    box-sizing: border-box;
    margin-left: 17px;

    &:first-child {
        margin-left: 0;
    }
`;

interface ContentsCardListProps {
    variant?: 'news' | 'mixtape' | 'artist' | 'album' | 'playlist',
    items: ( NewsCardProps | MixtapeCardProps | LibraryArtistThumbnailProps | AlbumCardProps | PlaylistCardProps )[];
}

const properCard = ({variant, items}: ContentsCardListProps) => {
    switch (variant) {
        case 'mixtape':
            return (
                items.map((item) => (
                    <Item>
                        <MixtapeCard {...(item as MixtapeCardProps)} />
                    </Item>
                ))
            )
        case 'artist':
            return (
                items.map((item) => (
                    <Item>
                        <NormalArtistThumbnail {...(item as LibraryArtistThumbnailProps)} />
                    </Item>
                ))
            )
        case 'album':
            return (
                items.map((item) => (
                    <Item>
                        <AlbumCard {...(item as AlbumCardProps)} />
                    </Item>
                ))
            )
        case 'playlist':
            return (
                items.map((item) => (
                    <Item>
                        <PlaylistCard {...(item as PlaylistCardProps)} />
                    </Item>
                ))
            )
        case 'news': 
            return (
                items.map((item) => (
                    <Item>
                        <NewsCard {...item} />
                    </Item>
                ))
            )
    }
}

const ContentsCardList = ({ variant, items }: ContentsCardListProps) => (
    <List>
        {properCard({variant, items})}
    </List>
);

export default ContentsCardList;
