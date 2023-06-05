import { Memory } from "../../bot";

export interface ShoppingListMemory extends Memory {
    data: string[]
}