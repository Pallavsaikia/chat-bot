export function matchRegex(str: string, regex: RegExp): boolean {
    str = str.replace(/[\n\r\s\t]+/g, ' ')
    return !(str.match(regex) === null)
}