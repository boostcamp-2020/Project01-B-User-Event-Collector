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
export interface MagazineCardProps {
    src: string,
    href: string,
    title: string,
    date: string,
    sort: 'todayMagazine' | 'normalMagazine'
};