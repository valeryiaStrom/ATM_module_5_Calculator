const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe(`add positive scenarios`, () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  it(`should return 0 when no arguments was passed`, () => {
    expect(calculator.add()).to.be.equal(0);
  });
  it(`should add numbers and return sum 2`, () => {
    expect(calculator.add(1, 1)).to.be.equal(2);
  });
  it(`should add numbers and return sum 15`, () => {
    expect(calculator.add(1, 14, 0)).to.be.equal(15);
  });
  it(`should add numbers and return sum 45`, () => {
    expect(calculator.add(1, 2, 3, 4, 5, 6, 7, 8, 9)).to.be.equal(45);
  });
  it(`should add numbers and return sum -3`, () => {
    expect(calculator.add(10, -70, 57)).to.be.equal(-3);
  });
  it(`should add numbers and return sum 5.5`, () => {
    expect(calculator.add(2, 3.5)).to.be.equal(5.5);
  });
});

describe(`add negative scenarios`, () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  it(`should throw an error if provided with not a number`, () => {
    // eslint-disable-next-line max-len
    expect(() => calculator.add('hello')).to.throw(`Argument(s) should be Number(s)`);
  });
  it(`should throw an error
   if any of the provided arguments is not a number`, () => {
    // eslint-disable-next-line max-len
    expect(() => calculator.add(1, 'hello')).to.throw(`Argument(s) should be Number(s)`);
  });
});
