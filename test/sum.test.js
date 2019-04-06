const expect = require('chai').expect;
const Cal = require('../src/sum');

describe('Test Cal', () => {
    let cal;
    beforeEach(() => {
        cal = new Cal();
    })//BeforEach begin test
    it('should success when val1 = 1 and val2 = 1 , expected = 2' , () => {
        //arrange
        const value1 = 1;
        const value2 = 1;

        //act
        const total = cal.sum(value1,value2);

        //assert
        expect(2).to.be.equal(total);

    })//it description of test case
})