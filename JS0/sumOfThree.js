/**
 * Write a function called solution that
 *   takes in 3 numbers and returns the sum of the 3 input parameters
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @returns {number}
 */

const solution = (num1, num2, num3) => {
  const solution1 = (num1, num2) =>{
    return num1 + num2
  }
  let result1 = solution1(num1, num2)
  return result1 + num3
}

module.exports = {
  solution
}
