import { Behaviour, Memory } from "./bot";
import { Zitti, custombehaviour } from "./zitti";
import { prompt } from "./cmdline";
import { readFileLineByLine } from "./file";
import fs from 'fs'

async function start() {
    const behaviour: Behaviour<Memory>[] = []
    const zitti = new Zitti(behaviour)
    zitti.pushBehaviour(...custombehaviour)

    const option = await prompt("Enter 1 for conversation mode or  2 for use a file for input: ") as number

    if (option === 1) {
        var instruction = ""
        console.log("Enter Q to exit:")
        while (instruction.toLowerCase() !== "q") {
            instruction = await prompt("Instruction: ") as string
            const decodedInstruction = zitti.decodeInstruction(instruction)
            const response = zitti.processInstruction(decodedInstruction)
            console.log("Zitti: " + response)
        }
    } else {
        const location = await prompt("Enter Full Path of file: ") as string

        readFileLineByLine(location, (fileExist: boolean, instruction: string) => {
            if (fileExist) {
                const decodedInstruction = zitti.decodeInstruction(instruction)
                const response = zitti.processInstruction(decodedInstruction)
                console.log("Instruction: " + instruction)
                console.log("Zitti: " + response)
            } else {
                console.log("file doesnot exist")
            }

        })


    }


}

start()