import React from 'react';
import MixtapeCard from '@components/organisms/Cards/MixtapeCard/MixtapeCard';
import AlbumCard from '@components/organisms/Cards/AlbumCard/AlbumCard';
import PlaylistCard from '@components/organisms/Cards/PlaylistCard/PlaylistCard';
import LibraryArtistThumbnail from '@components/molecules/ArtistThumbnail/LibraryArtistThumbnail/LibraryArtistThumbnail';

import { List, Item, ListContainer } from './LibraryCardList.styles';

import { MixtapeCardProps, LibraryArtistThumbnailProps, AlbumCardProps, PlaylistCardProps } from '@interfaces/props';

interface LibraryCardListProps {
    variant?: 'mixtape' | 'artist' | 'album' | 'playlist',
    items: ( MixtapeCardProps | LibraryArtistThumbnailProps | AlbumCardProps | PlaylistCardProps )[];
}

const properCard = ({variant, items}: LibraryCardListProps) => {
    switch (variant) {
        case 'mixtape':
            return (
                items.map((item) => (
                    <Item>
                        <MixtapeCard key = { item.id } {...(item as MixtapeCardProps)} />
                    </Item>
                ))
            )
        case 'artist':
            return (
                items.map((item) => (
                    <Item>
                        <LibraryArtistThumbnail key = { item.id } {...(item as LibraryArtistThumbnailProps)} />
                    </Item>
                ))
            )
        case 'album':
            return (
                items.map((item) => (
                    <Item>
                        <AlbumCard key = { item.id } {...(item as AlbumCardProps)} />
                    </Item>
                ))
            )
        case 'playlist':
            return (
                items.map((item) => (
                    <Item>
                        <PlaylistCard key = { item.id } {...(item as PlaylistCardProps)} />
                    </Item>
                ))
            )
    }
}

const LibraryCardList = ({ variant, items }: LibraryCardListProps) => (
    <ListContainer>
        <List>
            {properCard({variant, items})}
        </List>
    </ListContainer>
);

export default LibraryCardList;