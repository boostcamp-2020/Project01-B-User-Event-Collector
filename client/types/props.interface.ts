export interface MagazineCardProps {
    src: string,
    href: string,
    title: string,
    date: string,
    sort: 'mainMagazine' | 'normalMagazine'
};

export interface NewsCardProps {
    src: string,
    href: string,
    newsHref: string,
    title: string,
};
