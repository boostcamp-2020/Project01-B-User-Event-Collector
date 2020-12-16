import { useContext } from 'react';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';

import eventLogger from '@utils/eventLogger';

interface PlayParams {
    trackId?: number;
    targetTrackId: number;
    playingProgress?: number;
}

function usePlayNowEventLog({ userId }) {
    const componentInfo = useContext(ComponentInfoContext);

    const logPlayNowEvent = (trackId, targetTrackId, playingProgress: PlayParams) => {
        eventLogger('PlayNow', {
            userId,
            trackId,
            targetTrackId,
            playingProgress,
            ...componentInfo,
        });
    };

    return logPlayNowEvent;
}

export default usePlayNowEventLog;
