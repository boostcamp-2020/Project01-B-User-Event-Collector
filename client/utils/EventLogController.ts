import { sendLossedEvents } from '@utils/apis';
import Timer from '@utils/Timer';

class EventLogController {
    private _timer: Timer;
    constructor() {
        this._timer = new Timer(this._timerEvent.bind(this), parseInt(process.env.DELAY_TIME) || 10000);
    }
    _timerEvent() {
        this._timer.stop();
        if (process.browser) {
            const eventLogs = this.getLogs('eventLogs');
            const playEventLogs = this.getLogs('playEventLogs');

            if (eventLogs.length === 0 && playEventLogs.length === 0) return;

            const allLogs = eventLogs.concat(playEventLogs);

            sendLossedEvents(allLogs)
                .then((res) => {
                    this.resetLogs();
                })
                .catch((err) => {})
                .finally(() => {
                    this._timer.start();
                });
        }
    }
    saveLogs(eventType, logData) {
        const storageLogs = this.getLogs(eventType);
        storageLogs.push(logData);
        localStorage.setItem(eventType, JSON.stringify(storageLogs));
    }

    getLogs(eventType) {
        const storageLogs = localStorage.getItem(eventType);
        if (!storageLogs) {
            this.resetLogs();
            return [];
        }
        return JSON.parse(storageLogs);
    }

    resetLogs() {
        const emptyArray = JSON.stringify([]);
        localStorage.setItem('eventLogs', emptyArray);
        localStorage.setItem('playEventLogs', emptyArray);
    }
}
const eventLogController = new EventLogController();
export default eventLogController;
