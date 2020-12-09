import React from 'react';
import MixtapeCard from '@components/organisms/Cards/MixtapeCard/MixtapeCard';
import AlbumCard from '@components/organisms/Cards/AlbumCard/AlbumCard';
import PlaylistCard from '@components/organisms/Cards/PlaylistCard/PlaylistCard';
import LibraryArtistThumbnail from '@components/molecules/ArtistThumbnail/LibraryArtistThumbnail/LibraryArtistThumbnail';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { dataType } from '@constants/identifier';
import { List, Item, ListContainer } from './LibraryCardList.styles';

import { MixtapeCardProps, LibraryArtistThumbnailProps, AlbumCardProps, PlaylistCardProps } from '@interfaces/props';

interface LibraryCardListProps {
    variant?: 'mixtape' | 'artist' | 'album' | 'playlist';
    items: (MixtapeCardProps | LibraryArtistThumbnailProps | AlbumCardProps | PlaylistCardProps)[];
}

const properCard = ({ variant, items }: LibraryCardListProps) => {
    switch (variant) {
        case 'mixtape':
            return items.map((item) => (
                <ComponentInfoWrapper componentId={`${item.id}`} data={{ type: dataType.mixtape, id: item.id }}>
                    <Item>
                        <MixtapeCard key={item.id} {...(item as MixtapeCardProps)} />
                    </Item>
                </ComponentInfoWrapper>
            ));
        case 'artist':
            return items.map((item) => (
                <ComponentInfoWrapper componentId={`${item.id}`} data={{ type: dataType.artist, id: item.id }}>
                    <Item>
                        <LibraryArtistThumbnail key={item.id} {...(item as LibraryArtistThumbnailProps)} />
                    </Item>
                </ComponentInfoWrapper>
            ));
        case 'album':
            return items.map((item) => (
                <ComponentInfoWrapper componentId={`${item.id}`} data={{ type: dataType.album, id: item.id }}>
                    <Item>
                        <AlbumCard key={item.id} {...(item as AlbumCardProps)} />
                    </Item>
                </ComponentInfoWrapper>
            ));
        case 'playlist':
            return items.map((item) => (
                <ComponentInfoWrapper componentId={`${item.id}`} data={{ type: dataType.playlist, id: item.id }}>
                    <Item>
                        <PlaylistCard key={item.id} {...(item as PlaylistCardProps)} />
                    </Item>
                </ComponentInfoWrapper>
            ));
    }
};

const LibraryCardList = ({ variant, items }: LibraryCardListProps) => (
    <ListContainer>
        <List>{properCard({ variant, items })}</List>
    </ListContainer>
);

export default LibraryCardList;
