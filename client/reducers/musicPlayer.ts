import { TrackRowCardProps } from 'interfaces/props';

interface MusicPlayer {
    nowPlaying: TrackRowCardProps;
    playTime: number;
    upNextTracks: TrackRowCardProps[];
}

const initialState = {
    upNextTracks: [],
    nowPlaying: null,
    playTime: 0
}

export const playNextTrack = () => {
    return {
        type: 'PLAY_NEXT_TRACK',
    }
}

export const playPrevTrack = () => {
    return {
        type: 'PLAY_PREV_TRACK',
    }
}

export const addToUpNext = (data) => {
    return {
        type: 'ADD_TO_UPNEXT',
        data
    }
}

export const addToUpNextAndPlay = (data) => {
    return {
        type: 'ADD_TO_UPNEXT_AND_PLAY',
        data
    }
}

export const deleteTrackFromUpnext = (data) => {
    return {
        type: 'DELETE_TRACK_FROM_UPNEXT',
        data    //track id
    }
}

const getNextTrack = (state) => {
    const nowPlayingIdx = state.upNextTracks.findIndex(t => t.id === state.nowPlaying.id);
    const nextTrackIdx = nowPlayingIdx === state.upNextTracks.length - 1 ? nowPlayingIdx : nowPlayingIdx + 1;
    return state.upNextTracks[nextTrackIdx];
}

const getPrevTrack = (state) => {
    const nowPlayingIdx = state.upNextTracks.findIndex(t => t.id === state.nowPlaying.id);
    const prevTrackIdx = nowPlayingIdx == 0 ? nowPlayingIdx : nowPlayingIdx - 1;
    return state.upNextTracks[prevTrackIdx];
}

const reducer = (state: MusicPlayer = initialState, action) => {
    let newTrackList;
    switch (action.type) {
        case 'DELETE_TRACK_FROM_UPNEXT':
            newTrackList = state.upNextTracks.filter(t => t.id != action.data);
            return {
                upNextTracks: [...newTrackList],
                playTime: 0,
                nowPlaying: newTrackList[0]
            }
        case 'PLAY_NEXT_TRACK':
            const nextTrack = getNextTrack(state);
            return {
                ...state,
                playTime: 0,
                nowPlaying: nextTrack
            }
        case 'PLAY_PREV_TRACK':
            const prevTrack = getPrevTrack(state);
            return {
                ...state,
                playTime: 0,
                nowPlaying: prevTrack
            }
        case 'ADD_TO_UPNEXT':
           newTrackList = state.upNextTracks.filter(
               (track) => 
                   action.data.map(
                       e => e.id
                   ).includes(track.id) !== true
               
           )
            return {
                ...state,
                upNextTracks: [...newTrackList, ...action.data],
            }
        case 'ADD_TO_UPNEXT_AND_PLAY':
        if(action.data.length !== 1) {
           newTrackList = state.upNextTracks.filter(
               (track) => 
                   action.data.map(
                       e => e.id
                   ).includes(track.id) !== true
           )
            return {
                upNextTracks: [...newTrackList, ...action.data],
                playTime: 0,
                nowPlaying: action.data[0]
            }
        } else {
            if(state.upNextTracks.map(e => e.id).includes(action.data[0].id)){
                return {
                    ...state,
                    playTime: 0,
                    nowPlaying: action.data[0]
                }
            } else {
                return {
                    upNextTracks: [...state.upNextTracks, ...action.data],
                    playTime: 0,
                    nowPlaying: action.data[0]
                }
            }
        }
        default: 
            return state;
    }
}

export default reducer;