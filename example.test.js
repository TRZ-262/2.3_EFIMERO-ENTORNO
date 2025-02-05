const getSum = require('./example');

test('adds 2 + 2 to equeal 4', ()=>{
    expect(getSum(2,2)).toBe(4)
})