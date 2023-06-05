import { Behaviour } from "../../bot";
import { GreetingsMemory } from "../memory";

export class GreetingsBehaviour implements Behaviour<GreetingsMemory> {
    memory: string[];
    regex: RegExp
    constructor() {
        this.memory = []
        this.regex = /Hey.*? How are you/i
    }

    processInstruction(instruction: string): string {
        return "Hello, I am doing great."
    }
}
