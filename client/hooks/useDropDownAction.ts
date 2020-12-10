import { useContext } from 'react';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import dropDownMenu from '@constants/dropDownMenu';
import {likeRequest, unlikeRequest} from '@utils/apis'
import apiUrl from '@constants/apiUrl'
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
                console.log('like');
                likeRequest(`${apiUrl.like}${data.type}s`, {
                    data: {
                        id: data.id
                    }
                });
                state.setIsLiked(1);
                break;
            case dropDownMenu.unlike:
                state.setIsLiked(0);
                unlikeRequest(`${apiUrl.like}${data.type}/${data.id}`)
                break;
            case dropDownMenu.addToPlaylist:
                break;
            case dropDownMenu.addToLibrary:
                break;
            case dropDownMenu.addToUpNext:
                break;
            case dropDownMenu.showLyric:
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
