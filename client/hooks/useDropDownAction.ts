import { useContext } from 'react';
import ComponentInfoContext from 'utils/context/ComponentInfoContext';
import dropDownMenu from 'constants/dropDownMenu';
import { addToLibrary, deleteFromLibrary, requestPlaylists } from 'utils/apis';
import useLikeEventLog from 'hooks/useLikeEventLog';
import apiUrl from 'constants/apiUrl';

const useDropDownAction = ({ userId, setAnchorEl, state }) => {
    const componentInfo = useContext(ComponentInfoContext);
    const data = componentInfo.data;
    const logLikeEvent = useLikeEventLog({ userId });

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (e) => {
        const content = e.currentTarget.innerText;
        switch (content) {
            case dropDownMenu.like:
                addToLibrary(`${apiUrl.like}${data.type}s`, {
                    data: {
                        id: data.id
                    }
                });
                state.setIsLiked(1);
                logLikeEvent(true);
                break;
            case dropDownMenu.unlike:
                deleteFromLibrary(`${apiUrl.like}${data.type}s/${data.id}`);
                state.setIsLiked(0);
                logLikeEvent(false);
                break;
            case dropDownMenu.addToPlaylist:
                requestPlaylists(apiUrl.libraryPlaylist).then((data) => {
                    state.setPlaylistModal({
                        visibility: true,
                        data: data,
                    });
                });
                break;
            case dropDownMenu.addToLibrary:
                let type = undefined
                console.log('---------', data)
                if(data.type === 'magazine') type = 'playlist'
                else if(data.type === 'news') type = 'album'
                else type = data.type
                addToLibrary(`${apiUrl.like}${type}s`, {data: {
                    id: data.id
                }});
                if(state.setLikeStatus) state.setLikeStatus(true)
                logLikeEvent(true);
                break;
            case dropDownMenu.addToUpNext:
                break;
            case dropDownMenu.showLyric:
                state.setDisplayLyrics(true);
                break;
            case dropDownMenu.buyMP3:
                // TODO: mp3 구매 이벤트 로그 쏘기
                break;
            case dropDownMenu.share:
                // TODO: 공유 이벤트 로그 쏘기
                break;
            default:
                break;
        }
        setAnchorEl(null);
    };

    return [handleClick, handleClose];
};

export default useDropDownAction;
