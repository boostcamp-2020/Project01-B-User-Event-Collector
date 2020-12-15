import React, { ReactNode, MouseEvent, ComponentType } from 'react';

export enum MagazineSort {
    main = 'todayMagazine',
    normal = 'todayMagazine',
}

export interface StationCardProps {
    src: string;
}

export interface TrackInfoProps {
    data;
    track: boolean;
}

export interface InputProps {
    name: string;
    variant?: string;   
    value: string | undefined;
    onChange : (e : React.ChangeEvent<HTMLElement> ) => void | undefined
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
    contentId?: number | undefined
}

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
    };
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
    id: number;
    title: string;
    artistId: number;
    albumId: number;
    lyrics: string;
    artist: { id: number; name: string };
    album: { id: number; title: string; imageUrl: string };
}

export interface PlayerTrackCardProp {
    data?;
}

export interface DropdownMenuProps {
    id: string;
    control?: any;
    menuItems: {
        content: string;
        handleClick?: (e: MouseEvent<HTMLElement>) => void;
    }[];
    children?: ReactNode;
    state?: any
}

export interface CheckBoxProps {
    id: number;
    data?: TrackRowCardProps;
    checked?: boolean;
    onChange?: (e: any) => void;
}

export interface HeaderButtonGroupProps {
    sort?: 'track';
    onAddUpNextHandler?: any;
    liked: boolean
}

export interface LyricModalProps {
    src: string;
    title: string;
    artist: string;
    lyrics: string;
    visibility: boolean;
    onClickFunc?: any;
}

export interface PlayControllerProps {
    track;
    displayHeader: boolean;
    displayHeaderHandler?;
}


export interface UserProps {
    id: number;
    name: string;
    isLoggedIn: boolean;
    profileUrl: string;
}

