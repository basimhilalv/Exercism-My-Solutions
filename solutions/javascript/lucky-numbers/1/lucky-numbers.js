// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let string1 = "";
  let string2 = "";
  for(let i of array1) {
    string1 += String(i);
  }
  for(let i of array2){
    string2 += String(i);
  }
  return Number(string1) + Number(string2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let s = String(value);
  let a = s.split("");
  let b = a.reverse();
   a = b.join("");
  return a === s;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input )
  {
    if(Number(input))
      return "";
    else
      return 'Must be a number besides 0';
  }
  else
    return 'Required field';
}
