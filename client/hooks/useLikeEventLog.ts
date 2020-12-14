import { useContext } from 'react';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';

import eventLogger from '@utils/eventLogger';

function useLikeEventLog({ userId }) {
    const componentInfo = useContext(ComponentInfoContext);

    const logLikeEvent = (isLike) => {
        eventLogger('Like', {
            userId,
            isLike,
            ...componentInfo,
        });
    };

    return logLikeEvent;
}

export default useLikeEventLog;
