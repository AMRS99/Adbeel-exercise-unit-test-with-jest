const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () =>{
    let total = sum(14,9);
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function(){
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 148.72 japan yens", function(){
    const {fromDollarToYen} = require('./app.js');
    const japanYen = fromDollarToYen(4);
    const expected = 4 * 148.72;
    expect(fromDollarToYen(4)).toBe(594.88);
})

test("One Yen should be 0.0051 british pound", function(){
    const{fromYenToPound} = require('./app.js');
    const pound = fromYenToPound(2);
    const expected = 2 * 0.0051;
    expect(fromYenToPound(2)).toBe(0.0102);
})