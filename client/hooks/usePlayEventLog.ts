import { useContext } from 'react';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';

import eventLogger from '@utils/eventLogger';

function usePlayEventLog({ userId }) {
    const componentInfo = useContext(ComponentInfoContext);

    const logPlayEvent = (trackId, isPlay) => {
        eventLogger('Play', {
            userId,
            trackId,
            isPlay,
            ...componentInfo,
        });
    };

    return logPlayEvent;
}

export default usePlayEventLog;
