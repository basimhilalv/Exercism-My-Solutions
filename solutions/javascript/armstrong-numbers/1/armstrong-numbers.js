//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  let array = String(num).split("");
  let exp = array.length;
  let sum = 0;
  
  for (let i of array){
    sum += Math.pow(i,exp);
  }
  return sum === num;
};
