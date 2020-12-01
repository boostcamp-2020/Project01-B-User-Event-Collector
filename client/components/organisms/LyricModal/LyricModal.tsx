import styled from 'styled-components';
import Text from '@components/atoms/Text/Text';
import Image from '@components/atoms/Image/Image';
import IconButton from '@components/atoms/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const LyricsModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
`;

const LyricsDisplayModal = styled.div`
    width: 540px;
    height: 500px;
    background-color: white;
    border: 1px black solid;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row-reverse;
    width: 540px;
`;

const TrackInfoContainer = styled.div`
    display: flex;  
    width: 450px;
`;

const TrackImageContainer = styled.div`
    display: flex;  
    margin-right: 20px;
`;

const TrackDescriptionContainer = styled.div`
    display: flex;  
    flex-flow: column;
    justify-content: center;
`;

const LyricsContainer = styled.div`
    width: 450px;
    overflow: scroll;
    margin: 20px 0;
`;

interface LyricModalProps {
    src: string,
    title: string,
    artist: string,
    lyrics: string;
}

const LyricModal = ({ lyrics, title, artist, src } : LyricModalProps) => (
    <LyricsModalContainer>
        <LyricsDisplayModal>
            <ButtonContainer>
                <IconButton icon = {CloseIcon} variant = "plainBlackRegular" />
            </ButtonContainer>
            <TrackInfoContainer>
                <TrackImageContainer>
                    <Image src = {src} variant = "lyricTrackInfo"/>
                </TrackImageContainer>
                <TrackDescriptionContainer>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </TrackDescriptionContainer>
            </TrackInfoContainer>
            <LyricsContainer>
                {
                lyrics.split('\n').map( line => {
                    return (<Text variant='primary'>{line}<br/></Text>)
                })
                }
            </LyricsContainer>
        </LyricsDisplayModal>
    </LyricsModalContainer>
)

export default LyricModal;