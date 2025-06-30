import Add from './add';

describe('add function', () => {
    test('add two numbers', () => {
        expect(Add(2,3)).toBe(5)
    })
})