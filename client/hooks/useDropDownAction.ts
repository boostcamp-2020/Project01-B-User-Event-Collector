import { useContext } from 'react';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import dropDownMenu from '@constants/dropDownMenu';
import { likeRequest, unlikeRequest, request } from '@utils/apis';
import apiUrl from '@constants/apiUrl';
import { useState } from 'react';

const useDropDownAction = ({ anchorEl, setAnchorEl, state }) => {
    const componentInfo = useContext(ComponentInfoContext);
    const data = componentInfo.data;
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = (e) => {
        const content = e.currentTarget.innerText;
        console.log('....?');
        console.log(content);
        switch (content) {
            case dropDownMenu.like:
                likeRequest(`${apiUrl.like}${data.type}s`, {
                    data: {
                        id: data.id,
                    },
                });
                state.setIsLiked(1);
                break;
            case dropDownMenu.unlike:
                state.setIsLiked(0);
                unlikeRequest(`${apiUrl.like}${data.type}/${data.id}`);
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
                break;
            case dropDownMenu.addToUpNext:
                break;
            case dropDownMenu.showLyric:
                state.setDisplayLyrics(true);
                break;
            case dropDownMenu.buyMP3:
                break;
            case dropDownMenu.share:
                break;
            default:
                break;
        }
        setAnchorEl(null);
    };

    return [handleClick, handleClose];
};

export default useDropDownAction;
