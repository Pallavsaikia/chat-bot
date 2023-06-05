import { readFileLineByLine } from "../../file"


describe('read File', () => {
    describe('file exist', () => {
        const file = "test"
        it("should show file exist and line exist", () => {
            readFileLineByLine(file, (fileExist: boolean, line: string) => {
                expect(fileExist).toBe(true)
            })

        })
    })
    describe('file doesnot exist', () => {
        const file = "tests"
        it("should show file doesnot exist", () => {
            readFileLineByLine(file, (fileExist: boolean, line: string) => {
                expect(fileExist).toBe(false)
            })

        })
    })
})