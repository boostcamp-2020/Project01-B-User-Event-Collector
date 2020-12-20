import { sendLossedEvents, sendLossedPlayEvents } from '@utils/apis';
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

            sendLossedEvents(eventLogs)
                .then((res) => {
                    this.resetLogs('eventLogs');
                })
                .catch((err) => {
                    console.error(err);
                    if (err.status === 500) this.resetLogs('eventLogs');
                })
                .finally(() => {
                    this._timer.start();
                });

            sendLossedPlayEvents(playEventLogs)
                .then((res) => {
                    this.resetLogs('playEventLogs');
                })
                .catch((err) => {
                    console.error(err);
                    if (err.status === 500) this.resetLogs('playEventLogs');
                })
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
            this.resetLogs(eventType);
            return [];
        }
        return JSON.parse(storageLogs);
    }

    resetLogs(eventType) {
        localStorage.setItem(eventType, JSON.stringify([]));
    }
}
const eventLogController = new EventLogController();
export default eventLogController;
