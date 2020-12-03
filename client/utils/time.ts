export function convertToHHSS(secs: number): string {
    return new Date(secs * 1000).toISOString().substr(14, 5);
}
