import React from 'react';
import Image from '@components/atoms/Image/Image';
import { ButtonContainer, SvgContainer } from './TrackPlayButton.styles';

const TrackPlayButton = ({ src }: { src: string }) => (
    <ButtonContainer>
        <Image variant="trackRowCard" src={src} />
        <SvgContainer>
            {
                // TODO : svg 파일 분리
            }
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                x="0px"
                y="0px"
                viewBox="0 0 32 40"
                width="30px"
                height="30px"
            >
                <path
                    fill="#ffffff"
                    d="M26.005,16.006c0,1.105-2.001,2-2.001,2L8.301,25.859C7.333,26.328,6,25.484,6,24.379V7.598  c0-1.106,0.775-1.989,2.338-1.426l15.666,7.834C24.004,14.005,26.005,14.9,26.005,16.006L26.005,16.006z"
                ></path>
            </svg>
        </SvgContainer>
    </ButtonContainer>
);

export default TrackPlayButton;
