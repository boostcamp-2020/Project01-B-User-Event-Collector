import React from 'react';
import NewsCard from '@components/organisms/Cards/NewsCard';
import MixtapeCard from '@components/organisms/Cards/MixtapeCard/MixtapeCard';
import AlbumCard from '@components/organisms/Cards/AlbumCard/AlbumCard';
import PlaylistCard from '@components/organisms/Cards/PlaylistCard/PlaylistCard';
import NormalArtistThumbnail from '@components/molecules/ArtistThumbnail/NormalArtistThumbnail/NormalArtistThumbnail';
import {
    NewsCardProps,
    MixtapeCardProps,
    LibraryArtistThumbnailProps,
    AlbumCardProps,
    PlaylistCardProps,
} from '@interfaces/props';
import styled from 'styled-components';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { dataType } from '@constants/identifier';

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
    variant?: 'news' | 'mixtape' | 'artist' | 'album' | 'playlist';
    items: (NewsCardProps | MixtapeCardProps | LibraryArtistThumbnailProps | AlbumCardProps | PlaylistCardProps)[];
}

const properCard = ({ variant, items }: ContentsCardListProps) => {
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
                        <NormalArtistThumbnail key={item.id} {...(item as LibraryArtistThumbnailProps)} />
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
        case 'news':
            return items.map((item) => (
                <ComponentInfoWrapper componentId={`${item.id}`} data={{ type: dataType.news, id: item.id }}>
                    <Item>
                        <NewsCard key={item.id} {...item} />
                    </Item>
                </ComponentInfoWrapper>
            ));
    }
};

const ContentsCardList = ({ variant, items }: ContentsCardListProps) => <List>{properCard({ variant, items })}</List>;

export default ContentsCardList;
