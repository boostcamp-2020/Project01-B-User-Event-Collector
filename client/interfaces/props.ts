export enum MagazineSort {
    main = 'todayMagazine',
    normal = 'todayMagazine'
}

export interface MagazineCardProps {
    src: string,
    href: string,
    title: string,
    date: string,
    sort: MagazineSort
};

export interface NewsCardProps {
    src: string,
    href: string,
    newsHref: string,
    title: string,
};

export interface MixtapeCardProps {
    src: string,
    href: string,
    title: string,
    artist: string
};

export interface AlbumCardProps {
    src: string,
    href: string,
    title: string,
    artist: string
};

export interface PlaylistCardProps {
    src: string,
    href: string,
    title: string,
    description: string
};

 export interface LibraryArtistThumbnailProps {
    name: string;
    src: string;
    href: string;
}

export interface NormalArtistThumbnailProps {
    name: string;
    src: string;
    href: string;
}

export interface ChartCardProps {
    src: string;
    rank: number;
    artist: string;
    trackTitle: string;
}

export interface TrackRowCardProps {
    trackId: string, 
    albumImgSrc: string, 
    trackTitle: string, 
    artist : string, 
    albumTitle: string
}

export interface TrackCardProps {
    src: string;
    trackTitle: string;
    artist: string;
    imgVariant: 'trackRowCard' | 'trackInfo';
    isDefault: boolean;
    isTrack: boolean;
}