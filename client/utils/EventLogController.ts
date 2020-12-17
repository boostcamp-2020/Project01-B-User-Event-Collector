import { sendLossedEvents } from '@utils/apis';
import Timer from '@utils/Timer';

class EventLogController {
    private _timer: Timer;
    constructor() {
        this._timer = new Timer(this._timerEvent.bind(this), parseInt(process.env.DELAY_TIME) || 10000);
    }
    _timerEvent() {}
    saveLogs(eventLog) {
        const eventLogs = this.getLogs();
        eventLogs.push(eventLog);
        localStorage.setItem('eventLogs', JSON.stringify(eventLogs));
    }

    getLogs() {
        const eventsLog = localStorage.getItem('eventLogs');
        if (!eventsLog) {
            this.resetLogs();
            return [];
        }
        return JSON.parse(eventsLog);
    }

    resetLogs() {
        localStorage.setItem('eventLogs', JSON.stringify([]));
    }
}
const eventLogController = new EventLogController();
export default eventLogController;
