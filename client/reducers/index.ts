import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import selectedTrack from './selectedTrack';
import musicPlayer from './musicPlayer';

// (아전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    index: (state: object = {}, action) => {
        //HYDRATE를 위한 index reducer (HYDRATE는 redux의 서버사이드 렌더링을 위해 필요함)
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return {
                    ...state,
                    ...action.payload,
                };
            default:
                return state;
        }
    },
    user,
    selectedTrack,
    musicPlayer
});

export default rootReducer;
