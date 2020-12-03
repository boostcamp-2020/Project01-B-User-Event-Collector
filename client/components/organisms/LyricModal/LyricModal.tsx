import styled from 'styled-components';
import Text from '@components/atoms/Text/Text';
import Image from '@components/atoms/Image/Image';
import IconButton from '@components/atoms/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const LyricsModalContainer = styled.div`
    visibility : ${props => props.visible === true ? 'visible;' : 'hidden;'}
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30000;
    background-color: rgba(0,0,0,.6);
    outline: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    margin-right: 10px;
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

const TitleContainer = styled.div`
    margin-bottom: 10px;
    font-size: 15px;
    line-height: 19px;
    font-weight: 700;
    color: #232323;
    word-break: break-word;
`;

const ArtistContainer = styled.div`
    font-size: 13px;
    font-weight: 400;
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
    lyrics: string,
    visibility: boolean,
    onClickFunc: any
}

const LyricModal = ({ lyrics, title, artist, src, visibility, onClickFunc } : LyricModalProps) => {
    return (
    <LyricsModalContainer visible = {visibility}>
        <LyricsDisplayModal>
            <ButtonContainer>
                <IconButton icon = {CloseIcon} variant = "plainBlackRegular" onClick = { onClickFunc }/>
            </ButtonContainer>
            <TrackInfoContainer>
                <TrackImageContainer>
                    <Image src = {src} variant = "lyricTrackInfo"/>
                </TrackImageContainer>
                <TrackDescriptionContainer>
                    <TitleContainer>{title}</TitleContainer>
                    <ArtistContainer>{artist}</ArtistContainer>
                </TrackDescriptionContainer>
            </TrackInfoContainer>
            <LyricsContainer>
                {
                lyrics?.split('\n').map( line => {
                    return (<Text variant='primary'>{line}<br/></Text>)
                })
                }
            </LyricsContainer>
        </LyricsDisplayModal>
    </LyricsModalContainer>
)};

export default LyricModal;