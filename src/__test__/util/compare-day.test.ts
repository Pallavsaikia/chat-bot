import { compareDay } from "../../util"

describe('compare date', () => {
    describe('same date', () => {
        const d1 = new Date()
        const d2 = new Date()
        it("should be True", () => {
            const compareDate = compareDay(d1, d2)
            expect(compareDate).toBe(true)
        })
    })
    describe('different date', () => {
        const d1 = new Date()
        const d2 = new Date(new Date().setDate(d1.getDate() + 1))
        it("should be False", () => {
            const compareDate = compareDay(d1, d2)
            expect(compareDate).toBe(false)
        })
    })

})

