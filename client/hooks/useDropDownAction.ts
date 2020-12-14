import { useContext } from 'react';
import ComponentInfoContext from 'utils/context/ComponentInfoContext';
import dropDownMenu from 'constants/dropDownMenu';
import { addToLibrary, deleteFromLibrary, request } from 'utils/apis';
import apiUrl from 'constants/apiUrl';
import { useState } from 'react';

const useDropDownAction = ({ anchorEl, setAnchorEl, state }) => {
    const componentInfo = useContext(ComponentInfoContext);
    const data = componentInfo.data;
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
                });
                state.setIsLiked(1);
                break;
            case dropDownMenu.unlike:
                state.setIsLiked(0);
                deleteFromLibrary(`${apiUrl.like}${data.type}s/${data.id}`);
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
                addToLibrary(`${apiUrl.like}${data.type}s`, {
                    data: {
                        id: data.id,
                    },
                });
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
