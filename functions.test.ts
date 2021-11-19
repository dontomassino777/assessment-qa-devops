const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("shuffle the array", () => {
        expect(shuffleArray([1,2,3,4,5])).not.toEqual([1,2,3,4,5])
    })
    test("return array the same length as original array", () => {
        expect(shuffleArray([1,2,3,4,5])).toHaveLength(5)
    })
})