const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`multiply positive scenarios`, () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  it(`should return 0 when no arguments was passed`, () => {
    expect(calculator.multiply()).to.be.equal(0);
  });
  it(`should multiply 2 numbers and return product 1`, () => {
    expect(calculator.multiply(1, 1)).to.be.equal(1);
  });
  it(`should multiply numbers and return product 0`, () => {
    expect(calculator.multiply(2, 0, 9)).to.be.equal(0);
  });
  it(`should multiply numbers and return product 362880`, () => {
    expect(calculator.multiply(1, 2, 3, 4, 5, 6, 7, 8, 9)).to.be.equal(362880);
  });
  it(`should multiply numbers and return product -25`, () => {
    expect(calculator.multiply(-5, 5)).to.be.equal(-25);
  });
  it(`should multiply numbers and return product 7`, () => {
    expect(calculator.multiply(2, 3.5)).to.be.equal(7);
  });
});

describe(`multiply negative scenarios`, () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  it(`should throw an error if provided with not a number`, () => {
    // eslint-disable-next-line max-len
    expect(() => calculator.multiply('hello')).to.throw(`Argument(s) should be of type 'Number'`);
  });
  it(`should throw an error
   if any of the provided arguments is not a number`, () => {
    // eslint-disable-next-line max-len
    expect(() => calculator.multiply(1, 'hello')).to.throw(`Argument(s) should be of type 'Number'`);
  });
});
