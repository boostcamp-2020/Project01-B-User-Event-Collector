export function convertToHHSS(secs: number): string {
    return new Date(secs * 1000).toISOString().substr(14, 5);
}

export function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    return new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
}
