import { Behaviour, Memory } from "../../bot"
import { compareDay } from "../../util"
import { Zitti, custombehaviour } from "../../zitti"
import { BehaviourTestBehaviour } from "./behaviour/behaviortest"

function initalizeZitti() {
    const behaviour: Behaviour<Memory>[] = []
    const zitti = new Zitti(behaviour)
    zitti.pushBehaviour(...custombehaviour)

    return zitti
}


describe('zitti add behvaiour', () => {
    const zitti = initalizeZitti()
    const behaviourLengthBefore = zitti.behaviour.length
    it("zitti add custom behaviour", () => {
        zitti.pushBehaviour(new BehaviourTestBehaviour())
        expect(zitti.behaviour.length).toBe(behaviourLengthBefore + 1)
    })
    it("zitti should decode instruction into proper behaviour", () => {
        const decodedInstruction = zitti.decodeInstruction("nice to meet you")
        expect(decodedInstruction.behaviour instanceof BehaviourTestBehaviour).toBe(true)
    })
    it("zitti should process decoded instruction and give proper response", () => {
        const decodedInstruction = zitti.decodeInstruction("nice to meet you")
        const res = zitti.processInstruction(decodedInstruction)
        expect(res).toBe("Nice to meet you too.")
    })

    it("zitti should give a generic response if unable to decode", () => {
        const decodedInstruction = zitti.decodeInstruction("how much is +7")
        const res = zitti.processInstruction(decodedInstruction)
        expect(res).toBe("Hmm.. I don't know that")
    })
})

