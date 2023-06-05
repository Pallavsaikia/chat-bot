import { Behaviour, Bot, Memory } from "../bot";

export class Zitti extends Bot {
    behaviour: Behaviour<Memory>[];
    constructor(behaviour: Behaviour<Memory>[]) {
        super()
        this.behaviour = behaviour
    }

}