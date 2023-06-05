import { Behaviour } from "..";
import { DefaultMemory } from "./default.memory";

export class DefaultBehaviour implements Behaviour<DefaultMemory> {
    memory: string[];
    regex: RegExp
    constructor() {
        this.memory = []
        this.regex = /^/
    }

    processInstruction(instruction: string): string {
        return "Hmm.. I don't know that"
    }
}

