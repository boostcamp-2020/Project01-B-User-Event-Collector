import { useContext } from 'react';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';

import eventLogger from '@utils/eventLogger';

function usePlayNowEventLog({ userId }) {
    const componentInfo = useContext(ComponentInfoContext);

    const logPlayNowEvent = (targetTrackId, trackId?, playingProgress?) => {
        eventLogger('PlayNow', {
            userId,
            targetTrackId,
            trackId,
            playingProgress,
            ...componentInfo,
        });
    };

    return logPlayNowEvent;
}

export default usePlayNowEventLog;
