import { sendEvent, sendPlayEvent } from '@utils/apis';
import { Event, PlayEvent } from '@constants/events';

function eventLogger(event, param) {
    const eventData = {
        event,
        ...param,
        platform: 'Web',
        timestamp: new Date(),
    };
    if (Object.values(Event).indexOf(event) !== -1) sendEvent(eventData);
    else if (Object.values(PlayEvent).indexOf(event) !== -1) sendPlayEvent(eventData);
}

export default eventLogger;
