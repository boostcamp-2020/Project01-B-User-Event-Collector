import { useEffect } from 'react';
import { useRouter } from 'next/router';

import eventLogger from '@utils/eventLogger';

function useClickEventLog({ userId }) {
    const router = useRouter();

    const handleRouteChange = (url) => {
        eventLogger('Transition', {
            userId,
            page: url,
        });
    };

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);
}

export default useClickEventLog;
