import { Behaviour } from "../../bot";
import { WeatherMemory } from "../memory";


export class WeatherBehaviour implements Behaviour<WeatherMemory> {
    memory: string[];
    regex: RegExp
    constructor() {
        this.memory = []
        this.regex = /How\'s|is\ the weather/im
    }

    processInstruction(instruction: string): string {
        return "It's pleasant outside. You should take a walk."
    }
}

