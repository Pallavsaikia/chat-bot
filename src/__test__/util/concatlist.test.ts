import {  concatList } from "../../util"

describe('concat list to string', () => {
    describe('3 object list', () => {
        const list = ["egg", "butter", "bread"]
        const concatedResult = "Egg, Butter, Bread"
        it("should result a string with proper spaces and caps", () => {
            const concatresult = concatList(list)
            expect(concatresult).toBe(concatedResult)
        })
    })

    describe('1 object list', () => {
        const list = ["egg"]
        const concatedResult = "Egg"
        it("should result a string with no commas", () => {
            const concatresult = concatList(list)
            expect(concatresult).toBe(concatedResult)
        })
    })
})

