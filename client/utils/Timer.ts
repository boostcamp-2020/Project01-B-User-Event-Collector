class Timer {
    timer: number;
    func: Function;
    delay: number;

    constructor(func, time) {
        this.func = func;
        this.delay = time;
        this.timer = setInterval(func, time);
    }

    start() {
        if (this.timer) return;
        this.timer = setInterval(this.func, this.delay);
    }
    stop() {
        if (!this.timer) return;
        clearInterval(this.timer);
        this.timer = null;
    }

    restart(time = this.delay) {
        this.delay = time;
        this.stop();
        this.start();
    }
}

export default Timer;
