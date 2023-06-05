import { Memory } from "../../bot";

export interface FetchNewsMemory extends Memory {
    data: Date | null
}