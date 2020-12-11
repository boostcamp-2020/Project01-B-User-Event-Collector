import { TrackRowCardProps } from 'interfaces/props';

interface SelectedTrack {
    tracks: TrackRowCardProps[]
}

const initialState = {
    tracks: []
}

export const selectTrack = (data: TrackRowCardProps) => {
    return {
        type: 'SELECT_TRACK',
        data
    }
}

export const unselectTrack = (id: number) => {
    return {
        type: 'UNSELECT_TRACK',
         id
    }
}

export const clearAllTracks = () => {
    return {
        type: 'CLEAR_All_TRACKS'
    }
}

const reducer = (state: SelectedTrack = initialState, action) => {
    switch (action.type) {
        case 'SELECT_TRACK':
            return {
                tracks: [...state.tracks, action.data]
            }
        case 'UNSELECT_TRACK':
            const updatedTracks = state.tracks.filter(e => e.id !== action.id);
            return {
                tracks: updatedTracks
            }
        case 'CLEAR_All_TRACKS':
            return {
                tracks: []
            }
        default: 
            return state;
    }
}

export default reducer;