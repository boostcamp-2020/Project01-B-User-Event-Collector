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
    singer: string;
    songTitle: string;
}