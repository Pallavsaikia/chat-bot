import { Memory } from "../../bot";

export interface GreetingsMemory extends Memory {
    data: string[]
}