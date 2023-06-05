import { capitalizeFirstLetter } from "../../util"

describe('capitalize First Letter', () => {
    describe('using small letters', () => {
        const text = "test"
        const capitalizedText = "Test"
        it("should be capitalized", () => {
            const capitalized = capitalizeFirstLetter(text)
            expect(capitalized).toBe(capitalizedText)
        })
    })
    describe('using numbers', () => {
        const text = "123"
        it("should not make any changes capitalized", () => {
            const capitalized = capitalizeFirstLetter(text)
            expect(capitalized).toBe(text)
        })
    })

})