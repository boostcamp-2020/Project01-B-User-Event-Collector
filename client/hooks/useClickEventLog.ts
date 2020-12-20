import { useContext } from 'react';
import { useRouter } from 'next/router';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';

import eventLogger from '@utils/eventLogger';

function useClickEventLog({ userId, href }) {
    const componentInfo = useContext(ComponentInfoContext);
    const router = useRouter();

    const logClickEvent = () => {
        eventLogger('Click', {
            userId,
            page: router.asPath,
            targetPage: href,
            ...componentInfo,
        });
    };

    return logClickEvent;
}

export default useClickEventLog;
