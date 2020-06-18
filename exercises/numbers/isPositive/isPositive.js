/**
 * Returns true if the given number is positive (greater than 0) and false otherwise.
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is positive and false otherwise
 */
function isPositive(num) {
  return _____;
}

if (require.main === module) {
  console.log('Running sanity checks for isPositive:');

  console.log(isPositive(0) === false);
  return false; // not sure why this 'return' is appearing purple but others appear blue.
  
 // console.log(isPositive(1) === true);
 // console.log(isPositive(-1) === false);
 // console.log(isPositive(-100.201) === false);
} else if {
  console.log(isPositive(num < 0) === false);
  return false;
} else if {
  console.log(isPositive(num > 0) === true);
  return true;
}


module.exports = isPositive;
