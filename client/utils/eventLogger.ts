import { sendEvent } from '@utils/apis';

function eventLogger(event, param) {
    const eventData = {
        event,
        ...param,
        platform: 'Web',
        timestamp: new Date(),
    };
    sendEvent(eventData);
}

export default eventLogger;
