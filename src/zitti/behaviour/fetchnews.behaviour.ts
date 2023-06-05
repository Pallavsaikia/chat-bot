import { Behaviour } from "../../bot";
import { Config } from "../../config";
import { compareDay, timeSince } from "../../util";
import { FetchNewsMemory } from "../memory";



export class FetchNewsBehaviour implements Behaviour<FetchNewsMemory> {
    memory: Date | null;
    regex: RegExp
    constructor() {
        this.memory = null
        this.regex = /Fetch (\w+){1,} (?:newspaper|news)?/im
    }

    processInstruction(instruction: string): string {
        const currentdate = new Date()
        if (this.memory === null) {
            this.memory = currentdate
            return "Here is your newspaper."
        }

        if (compareDay(currentdate, this.memory)) {
            this.memory = currentdate
            return "I think you don't get another newspaper the same day"
        } else {
            return "Here is your newspaper."
        }
    }
}

