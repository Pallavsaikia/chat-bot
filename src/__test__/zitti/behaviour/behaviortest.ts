import { Behaviour, Memory } from "../../../bot";


export interface BehaviourTestMemory extends Memory {
    data: string
}

export class BehaviourTestBehaviour implements Behaviour<BehaviourTestMemory> {
    memory: string;
    regex: RegExp
    constructor() {
        this.memory = ""
        this.regex = /nice to meet you/i
    }

    processInstruction(instruction: string): string {
        return "Nice to meet you too."
    }
}
