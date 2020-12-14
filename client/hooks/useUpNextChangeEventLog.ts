import { useContext } from 'react';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';

import eventLogger from '@utils/eventLogger';

function useUpNextChangeEvent({ userId }) {
    const componentInfo = useContext(ComponentInfoContext);

    const logAddToUpnextEvent = (trackId: number[]) => {
        eventLogger('AddToUpnext', {
            userId,
            trackId,
            ...componentInfo,
        });
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
