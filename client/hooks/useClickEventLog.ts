import { useContext } from 'react';
import { useRouter } from 'next/router';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';

import eventLogger from '@utils/eventLogger';

function useClickEventLog({ userId, href }) {
    const componentInfo = useContext(ComponentInfoContext);
    const router = useRouter();

    const handleClick = () => {
        eventLogger('click', {
            userId: userId,
            page: router.pathname,
            targetPage: href,
            ...componentInfo,
        });
    };

    return handleClick;
}

export default useClickEventLog;
