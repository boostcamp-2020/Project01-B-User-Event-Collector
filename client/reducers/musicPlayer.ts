import { TrackRowCardProps } from 'interfaces/props';

interface MusicPlayer {
    nowPlaying: TrackRowCardProps;
    playTime: number;
    upNextTracks: TrackRowCardProps[];
}

const initialState = {
    upNextTracks: [
    {
        "id": 8,
        "title": "Not Over U",
        "lyrics": "Take me away 손목에 채워진 시계를 봐\r\n여느 때와 다름없이 긴 침묵은 또 날 찾아와\r\n저기 오는 기차가 내 앞을 지나가고\r\n지금이 또 지나면 다음이 올 거란 믿음에 난 살아\r\n \r\n하루의 절반 눈을 뜨면 어제처럼 혼자 걷는 길\r\n그건 별거 아냐 단지 혼자 기억을\r\n걷다 널 만나는 일 난 두려워\r\n \r\nOh (Oh) 이렇게 나만큼 아픈 거니\r\n먼저 날 돌아보면 안 되니\r\n너와는 반대로 서 있지만 I'm not over you\r\n \r\n앞서 걷는 그림자가 내게 손짓하며\r\n저 좁은 길모퉁이 그곳으로 날 데려가고 (난 따라나서)\r\n눈에 선한 두 사람이 아직 저기 보여\r\n누구보다 아름다운 모습은 꽤 행복해 보여\r\n \r\n하루의 절반 눈을 뜨면 어제처럼 혼자 걷는 길 \r\n그건 별거 아냐 단지 혼자 기억을 \r\n걷다 널 만나는 일 난 두려워\r\n \r\nOh (Oh) 이렇게 나만큼 아픈 거니\r\n먼저 날 돌아보면 안 되니\r\n너와는 반대로 서 있지만 I'm not over you\r\n \r\nOh (Oh) 이 시간을 돌릴 수 있다면\r\n너와 난 기억을 나누지도\r\n반대로 걷지도 않았겠지 I'm not over you \r\n \r\nOh Oh Oh Oh Oh 내 곁에 넌 없지만\r\nOh Oh Oh Oh Oh 여전히 넌 내 안에 있어\r\nOh Oh Oh Oh Oh 오늘도 하늘은 맑은데\r\nOh Oh Oh Oh Oh 내 눈에 비가 내려 Oh\r\n\r\n기억은 참 슬퍼 이젠 지금이 아닌\r\n지난 시간이라고 날 알게 해\r\n \r\nOh (Oh) 이렇게 나만큼 아픈 거니\r\n먼저 날 돌아보면 안 되니\r\n너와는 반대로 서 있지만 I'm not over you\r\n \r\nOh (Oh) 이 시간을 돌릴 수 있다면\r\n너와 난 기억을 나누지도\r\n반대로 걷지도 않았겠지 I'm not over you ",
        "playtime": 180,
        "albumId": 13,
        "album": {
            "id": 13,
            "title": "Only One",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/000/326/326356.jpg?type=r480Fll&v=20201113025511"
        },
        "artist": {
            "id": 7,
            "name": "보아"
        },
        "liked": 1
    }],
    nowPlaying:     {
        "id": 8,
        "title": "Not Over U",
        "lyrics": "Take me away 손목에 채워진 시계를 봐\r\n여느 때와 다름없이 긴 침묵은 또 날 찾아와\r\n저기 오는 기차가 내 앞을 지나가고\r\n지금이 또 지나면 다음이 올 거란 믿음에 난 살아\r\n \r\n하루의 절반 눈을 뜨면 어제처럼 혼자 걷는 길\r\n그건 별거 아냐 단지 혼자 기억을\r\n걷다 널 만나는 일 난 두려워\r\n \r\nOh (Oh) 이렇게 나만큼 아픈 거니\r\n먼저 날 돌아보면 안 되니\r\n너와는 반대로 서 있지만 I'm not over you\r\n \r\n앞서 걷는 그림자가 내게 손짓하며\r\n저 좁은 길모퉁이 그곳으로 날 데려가고 (난 따라나서)\r\n눈에 선한 두 사람이 아직 저기 보여\r\n누구보다 아름다운 모습은 꽤 행복해 보여\r\n \r\n하루의 절반 눈을 뜨면 어제처럼 혼자 걷는 길 \r\n그건 별거 아냐 단지 혼자 기억을 \r\n걷다 널 만나는 일 난 두려워\r\n \r\nOh (Oh) 이렇게 나만큼 아픈 거니\r\n먼저 날 돌아보면 안 되니\r\n너와는 반대로 서 있지만 I'm not over you\r\n \r\nOh (Oh) 이 시간을 돌릴 수 있다면\r\n너와 난 기억을 나누지도\r\n반대로 걷지도 않았겠지 I'm not over you \r\n \r\nOh Oh Oh Oh Oh 내 곁에 넌 없지만\r\nOh Oh Oh Oh Oh 여전히 넌 내 안에 있어\r\nOh Oh Oh Oh Oh 오늘도 하늘은 맑은데\r\nOh Oh Oh Oh Oh 내 눈에 비가 내려 Oh\r\n\r\n기억은 참 슬퍼 이젠 지금이 아닌\r\n지난 시간이라고 날 알게 해\r\n \r\nOh (Oh) 이렇게 나만큼 아픈 거니\r\n먼저 날 돌아보면 안 되니\r\n너와는 반대로 서 있지만 I'm not over you\r\n \r\nOh (Oh) 이 시간을 돌릴 수 있다면\r\n너와 난 기억을 나누지도\r\n반대로 걷지도 않았겠지 I'm not over you ",
        "playtime": 180,
        "albumId": 13,
        "album": {
            "id": 13,
            "title": "Only One",
            "imageUrl": "https://musicmeta-phinf.pstatic.net/album/000/326/326356.jpg?type=r480Fll&v=20201113025511"
        },
        "artist": {
            "id": 7,
            "name": "보아"
        },
        "liked": 1
    },
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