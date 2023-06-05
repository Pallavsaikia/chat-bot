import { ShoppingListMemory } from "../memory";
import { FetchNewsBehaviour } from "./fetchnews.behaviour";
import { GreetingsBehaviour } from "./greetings.behaviour";
import { ReadShoppingListBehaviour } from "./readingshoppinglist.behaviour";
import { RoomCleanBehaviour } from "./roomclean.behaviour";
import { ShoppingListBehaviour } from "./shoppinglist.behaviour";
import { WeatherBehaviour } from "./weather.behaviour";

const shoppingList: string[] = []
const shoppingListMemory: ShoppingListMemory = {
    data: shoppingList
}
export const custombehaviour = [
    new GreetingsBehaviour(),
    new WeatherBehaviour(),
    new RoomCleanBehaviour(),
    new FetchNewsBehaviour(),
    new ShoppingListBehaviour(shoppingListMemory),
    new ReadShoppingListBehaviour(shoppingListMemory)
]