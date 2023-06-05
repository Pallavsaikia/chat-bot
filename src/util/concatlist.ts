import { capitalizeFirstLetter } from "./capitalize"

export function concatList(list: string[]): string {
    let str: string = ""
    for (let i = 0; i < list.length; i++) {
        if (i == 0) {
            str = capitalizeFirstLetter(list[i])
        } else {
            str = str + ", " + capitalizeFirstLetter(list[i])
        }

    }
    return str
}