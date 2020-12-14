import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import selectedTrack from './selectedTrack';
import musicPlayer from './musicPlayer';

const rootReducer = (state, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return action.payload;
      default: {
        const combinedReducer = combineReducers({
            user,
            selectedTrack,
            musicPlayer
        });
        return combinedReducer(state, action);
      }
    }
  };

export default rootReducer;
