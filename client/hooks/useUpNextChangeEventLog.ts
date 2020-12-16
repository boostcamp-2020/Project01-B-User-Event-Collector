import { useContext } from 'react';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import usePlayNowEventLog from './usePlayNowEventLog';

import eventLogger from '@utils/eventLogger';

function useUpNextChangeEvent({ userId }) {
    const componentInfo = useContext(ComponentInfoContext);
    const logPlayNowEvent = usePlayNowEventLog({ userId });

    const logAddToUpnextEvent = (trackId: number[], musicPlayer?) => {
        eventLogger('AddToUpnext', {
            userId,
            trackId,
            ...componentInfo,
        });
        // playNow event
        if (!musicPlayer) return;
        if (musicPlayer.nowPlaying) {
            const { nowPlaying, playTime } = musicPlayer;
            return logPlayNowEvent(trackId[0], nowPlaying.id, playTime, nowPlaying.playtime);
        }
        logPlayNowEvent(trackId[0]);
    };

    const logRemoveFromUpnextEvent = (trackId: number[]) => {
        eventLogger('RemoveFromUpnext', {
            userId,
            trackId,
            ...componentInfo,
        });
    };

    return { logAddToUpnextEvent, logRemoveFromUpnextEvent };
}

export default useUpNextChangeEvent;
