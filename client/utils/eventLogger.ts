import { sendEvent, sendPlayEvent } from './apis';
import { Event, PlayEvent } from '@constants/events';
import { getCurrentDate } from './time';

function eventLogger(event, param) {
    const eventData = {
        event,
        ...param,
        platform: 'Web',
        timestamp: getCurrentDate(),
    };
    if (Object.values(Event).indexOf(event) !== -1) sendEvent(eventData);
    else if (Object.values(PlayEvent).indexOf(event) !== -1) sendPlayEvent(eventData);
}

export default eventLogger;
