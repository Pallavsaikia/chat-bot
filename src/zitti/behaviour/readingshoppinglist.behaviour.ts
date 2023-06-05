import { Behaviour } from "../../bot";
import { concatList, getItem } from "../../util";
import { ShoppingListMemory } from "../memory";



export class ReadShoppingListBehaviour implements Behaviour<ShoppingListMemory> {
    memory: string[];
    regex: RegExp
    constructor(shoppingListMemory: ShoppingListMemory) {
        this.memory = shoppingListMemory.data
        this.regex = /Read my (?:cart|shopping list)?/im
    }



    processInstruction(instruction: string): string {
        if (this.memory.length > 0) {
            return "Here is your shopping list. " + concatList(this.memory) + "."
        }
        return "You have no items in your shopping list"
    }
}

