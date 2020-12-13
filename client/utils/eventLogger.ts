import { request } from '@utils/apis';

function eventLogger(event, param) {
    const eventData = {
        event,
        ...param,
        platform: 'Web',
        timestamp: new Date(),
    };
    request(eventData);
}

export default eventLogger;
