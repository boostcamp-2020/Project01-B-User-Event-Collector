export enum MagazineSort {
    main = 'mainMagazine',
    normal = 'normalMagazine'
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
