import React from 'react';
import styled from 'styled-components';
import Image from '@components/atoms/Image/Image';
import Text from '@components/atoms/Text/Text';
const Card = styled.li`
    line-style: none;
`;
const Rank = styled.div``;
const SongInfo = styled.div``;
const ChartCard = ({ src, rank, singer, songTitle }) => (
    <Card>
        <Image variant="trackRowCard" src={src} />
        <Rank>
            <Text variant="k">{rank}</Text>
        </Rank>
        <SongInfo>
            <Text variant="">{songTitle}</Text>
            <Text variant="primary">{singer}</Text>
        </SongInfo>
    </Card>
);

export default ChartCard;
