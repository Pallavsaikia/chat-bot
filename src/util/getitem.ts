export function getItem(instruction: string): string {
    const splitstr = instruction.split(" ")
    return splitstr[1]
}