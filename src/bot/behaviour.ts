import { Memory } from "./memory"

export abstract class Behaviour<T extends Memory> {
    abstract processInstruction: (instruction: string) => string
    abstract memory: T["data"]
    abstract regex: RegExp
}