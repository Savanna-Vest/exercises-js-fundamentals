// Written by Ben Santiago & Savanna Vest

/**
 * Given an input string and a character replacement dictionary, replaces every
 * character found as a key in the dictionary with the corresponding value.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 * // key : value
 * @param {string} string - The string to replace a character in
 * @param {object} replacementDict - The replacement dictionary
 * @returns {string} A copy of the input string with the appropriate
 *   letters replaced according to replacementDict
 */

function replaceCharacters(string, replacementDict) {
  // This is your job. :)
 // for (let i=0; i < string.length; i++) {
 //   if (string(i, i+1) in replacementDict) {
 //     string(i, i+1) = replacementDict[string(i, i+1)]; // calling key here outputs value
 //   }

 // }
  let newString = "";
  for (let item of string) {
    if (item in replacementDict) {
      newString = newString + replacementDict[item];
    } else {
      newString = newString + item;
    }
  }
  return newString;
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');
  console.log(replaceCharacters('hello', { 'h': 'y', 'l': '8' }));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = replaceCharacters;
