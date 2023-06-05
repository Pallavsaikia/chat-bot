import { Behaviour } from "../../bot";
import { getItem } from "../../util";
import { ShoppingListMemory } from "../memory";



export class ShoppingListBehaviour implements Behaviour<ShoppingListMemory> {
    memory: string[];
    regex: RegExp
    constructor(shoppingListMemory: ShoppingListMemory) {
        this.memory = shoppingListMemory.data
        this.regex = /Add (\w+){1,} to (\w+){1,} (?:cart|shopping list)?/im
    }


    processInstruction(instruction: string): string {
        const item = getItem(instruction)
        if (this.memory.indexOf(item) > -1) {
            return "You already have " + item + " in your shopping list"
        }
        this.memory.push(item)
        return item + " added to shopping list."
    }
}

