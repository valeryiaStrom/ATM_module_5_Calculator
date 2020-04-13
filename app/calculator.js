/**
 *
 *class Calculator for adding and multiplying numbers
 * @class Calculator
 */
class Calculator {
  /**
   *Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {
  }

  /**
   *
   *
   * @param {...Number} numbers number(s) to sum
   * @return {Number} if all arguments are of type 'number'
   * @memberof Calculator
   */
  add(...numbers) {
    if (numbers.some((number) => (typeof number !== 'number'))) {
      throw new Error(`Argument(s) should be Number(s)`);
    }
    return numbers.reduce( (previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
  }

  /**
   *
   *
   * @param {...Number} numbers number(s) to multiply
   * @return {Number} if all arguments are of type 'number'
   * @memberof Calculator
   */
  multiply(...numbers) {
    if (numbers.length === 0) return 0;
    if (numbers.some((number) => (typeof number !== 'number'))) {
      throw new Error(`Argument(s) should be Number(s)`);
    }
    return numbers.reduce( (previousValue, currentValue) => {
      return previousValue * currentValue;
    }, 1);
  }
}

module.exports = Calculator;
