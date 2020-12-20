import { useContext } from 'react';
import ComponentInfoContext from 'utils/context/ComponentInfoContext';
import dropDownMenu from 'constants/dropDownMenu';
import { addToLibrary, deleteFromLibrary, requestPlaylists } from '../utils/apis';
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
                        id: data.id,
                    },
                })
                    .then((data) => {
                        state.setIsLiked(1);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                logLikeEvent(true);
                break;
            case dropDownMenu.unlike:
                deleteFromLibrary(`${apiUrl.like}${data.type}s/${data.id}`)
                    .then((data) => {
                        state.setIsLiked(0);
                    })
                    .catch((err) => {
                        console.log(err);
                    });

                logLikeEvent(false);
                break;
            case dropDownMenu.addToPlaylist:
                requestPlaylists(apiUrl.libraryPlaylist)
                    .then((data) => {
                        state.setPlaylistModal({
                            visibility: true,
                            data: data,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                break;
            case dropDownMenu.addToLibrary:
                let type = data.type;
                let id = data.id;
                if (type === 'magazine' || type === 'news') {
                    id = state.contentId;
                    if (type === 'magazine') type = 'playlist';
                    else if (type === 'news') type = 'album';
                }
                addToLibrary(`${apiUrl.like}${type}s`, { data: { id } })
                    .then((data) => {
                        if (state.setLikeStatus) state.setLikeStatus(true);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
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
