import { useContext } from 'react';
import ComponentInfoContext from 'utils/context/ComponentInfoContext';
import dropDownMenu from 'constants/dropDownMenu';
import { addToLibrary, deleteFromLibrary, request } from 'utils/apis';
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
                addToLibrary(data);
                state.setIsLiked(1);
                logLikeEvent(true);
                break;
            case dropDownMenu.unlike:
                deleteFromLibrary(data);
                state.setIsLiked(0);
                logLikeEvent(false);
                break;
            case dropDownMenu.addToPlaylist:
                request(apiUrl.libraryPlaylist).then((data) => {
                    state.setPlaylistModal({
                        visibility: true,
                        data: data,
                    });
                });
                break;
            case dropDownMenu.addToLibrary:
                addToLibrary(data);
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
