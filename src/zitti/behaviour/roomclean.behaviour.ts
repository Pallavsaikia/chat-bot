import { Behaviour } from "../../bot";
import { Config } from "../../config";
import { timeSince } from "../../util";
import { RoomCleaningMemory } from "../memory";



export class RoomCleanBehaviour implements Behaviour<RoomCleaningMemory> {
    memory: Date | null;
    regex: RegExp
    constructor() {
        this.memory = null
        this.regex = /Clean (?:my|the)? room/im
    }

    processInstruction(instruction: string): string {
        const currentdate = new Date()
        if (this.memory === null) {
            this.memory = currentdate
            return "Room is cleaned. It looks tidy now. Job completed at " + currentdate
        }
        const timesince = timeSince(this.memory, currentdate)
        if (timesince > Config.CLEANING_DELAY) {
            this.memory = currentdate
            return "Room is cleaned. It looks tidy now. Job completed at" + currentdate
        } else {
            return "The room was just cleaned " + Math.floor((timesince/60000)) + " minute(s)ago.I hope it's not dirty"
        }
    }
}

