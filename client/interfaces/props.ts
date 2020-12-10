import React, { ReactNode, MouseEvent, ComponentType } from 'react';

export enum MagazineSort {
    main = 'todayMagazine',
    normal = 'todayMagazine',
}

export interface StationCardProps {

}

export interface TrackInfoProps {
    data,
    track: boolean;
}

export interface InputProps {
    variant?: string;
}

export interface MagazineCardProps {
    id: number;
    title: string;
    imageUrl: string;
    date: string;
    category: string;
}

export interface NewsCardProps {
    id: number;
    title: string;
    imageUrl: string;
    date: string;
    link: string;
    albumId: number;
}

export interface ContentsThumbnailProps {
    src: string;
    href: string;
    sort?: 'news' | 'mainMagazine' | 'normalMagazine' | 'recommendPlaylist' | 'normalPlaylist' | 'todayMagazine';
};

export interface MixtapeCardProps {
    id?: number;
    title?: string;
    subTitle?: string;
    description?: string;
    imageUrl?: string;
    customized?: boolean;
}

export interface AlbumCardProps {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    imageUrl: string;
    artist: {
        id: number;
        name: string;
    };
}

export interface PlaylistCardProps {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    imageUrl: string;
    customized: boolean;
}

 export interface LibraryArtistThumbnailProps {
    id: number;
    name: string;
    imageUrl: string;
    genre: {
        id: number;
        name: string;
    }
}

export interface NormalArtistThumbnailProps {
    id: number;
    name: string;
    imageUrl: string;
    genre: {
        id: number;
        name: string;
    };
}

export interface ChartCardProps {
    id: number;
    rank: number;
    title: string;
    album: {
        id: number;
        imageUrl: string;
    };
    artist: {
        id: number;
        name: string;
    };
}

export interface TrackRowCardProps {
    id: number;
    title: string;
    lyrics: string;
    playtime: number;
    albumId: number;
    album: {
        id: number;
        title: string;
        imageUrl: string;
    };
    artist: {
        id: number;
        name: string;
    };
    liked: number;
}

export interface TrackCardProps {
    data;
    imgVariant: 'trackRowCard' | 'trackInfo';
    isDefault: boolean;
    isTrack: boolean;
}

export interface PlayerTrackCardProps {
    id : number;
    title : string;
    artistId: number;
    albumId: number;
    lyrics: string;
    artist: { id: number; name: string; },
    album: { id: number; title: string; imageUrl: string; }
}

export interface DropdownMenuProps {
    id: string;
    control?: any;
    menuItems: {
        content: string;
        handleClick?: (e: MouseEvent<HTMLElement>) => void;
    }[];
    children?: ReactNode;
    handleClick?: (e: MouseEvent<HTMLElement>) => void;
    handleClose?: (e: MouseEvent<HTMLElement>) => void;
    anchorEl?: Element | ((element: Element) => Element);
}
