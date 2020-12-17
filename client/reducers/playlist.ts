import { SHOW_PLAYLIST_MODAL, HIDE_PLAYLIST_MODAL } from '@constants/actions';

interface PlayList {
    showModal: boolean;
}

const initialState = {
    showModal: false
}

export const showPlaylistAddModal = () => {
    return {
        type: SHOW_PLAYLIST_MODAL
    }
}

export const hidePlaylistAddModal = () => {
    return {
        type: HIDE_PLAYLIST_MODAL
    }
}

const reducer = (state: PlayList = initialState, action) => {
    switch (action.type) {
        case SHOW_PLAYLIST_MODAL:
            return {
                showModal: true
            }
        case HIDE_PLAYLIST_MODAL:
            return {
                showModal: false
            }
        default: 
            return state;
    }
}

export default reducer;