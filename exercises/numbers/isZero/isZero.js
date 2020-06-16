/**
 * Returns true if the given number is 0 and false otherwise
 *
 * @param {number} num - The input number
 * @returns {boolean} True if num is 0 and false otherwise
 */

 num = []

function isZero(num) {
  return num === 0;
}

if (isZero(num) === 0) {
  console.log('Running sanity checks for isZero:');
  console.log(isZero(num) === true);
  return true; // not sure why this 'return' is appearing purple but others appear blue.
  
 // console.log(isZero(1) === false);
 // console.log(isZero(-1) === false);
 // console.log(isZero(-100.201) === false);
} else {
  console.log(isZero(num) === false);
  return false; // not sure why this 'return' is appearing purple but others appear blue.
}

module.exports = isZero;
