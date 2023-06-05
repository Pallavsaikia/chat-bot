import { Behaviour } from "./behaviour";
import { Memory } from "./memory";
import { DefaultBehaviour } from "./default";
import { matchRegex } from "./clean_match_regex";

interface BotDecodedInstruction {
    behaviour: Behaviour<Memory>
    instruction: string
}
export abstract class Bot {
    abstract behaviour: Behaviour<Memory>[]
    decodeInstruction(instruction: string): BotDecodedInstruction {
        for (let i = 0; i < this.behaviour.length; i++) {
            if (matchRegex(instruction, this.behaviour[i].regex)) {
                return { behaviour: this.behaviour[i], instruction: instruction }
            }

        }
        return { behaviour: new DefaultBehaviour(), instruction: instruction }
    }
    pushBehaviour(...args: Behaviour<Memory>[]) {
        this.behaviour.push(...args)
    }

    processInstruction({ behaviour, instruction }: BotDecodedInstruction): string {
        return behaviour.processInstruction(instruction)
    }
}

