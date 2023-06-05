export function timeSince(lastime: Date, currenttime: Date) {
    return  currenttime.getTime() - lastime.getTime()
}