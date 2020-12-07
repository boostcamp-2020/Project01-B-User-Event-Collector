import React from 'react';
import Image from '@components/atoms/Image/Image';
import Text from '@components/atoms/Text';
import TrackPlayButton from '@components/molecules/TrackPlayButton';
import { Card, Rank, SongInfo } from './ChartCard.styles';
import { ChartCardProps } from 'interfaces/props';
import A from '@components/atoms/A/A';

const ChartCard = ( data : ChartCardProps) => {

    const { id, rank, title, album, artist } = data;
    const { id: albumId, imageUrl } = album;
    const { id: artistId, name: artistName } = artist;

    return (
        <Card>
            <TrackPlayButton src={imageUrl} imgVariant="trackRowCard" />
            <Rank>
                <Text>{rank.toString()}</Text>
            </Rank>
            <SongInfo>
                <A href="/track/[id]">
                    {title}
                </A>
                <A href="/artist/[id]" variant="tertiary">
                    {artistName}
                </A>
            </SongInfo>
        </Card>
    )
}

export default ChartCard;
