import { useContext } from 'react';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';

import eventLogger from '@utils/eventLogger';

function useSearchEventLog({ userId }) {
    const componentInfo = useContext(ComponentInfoContext);

    const logSearchEvent = (text) => {
        eventLogger('Search', {
            userId,
            text,
            ...componentInfo,
        });
    };

    return logSearchEvent;
}

export default useSearchEventLog;
