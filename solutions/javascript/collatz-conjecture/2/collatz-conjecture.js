//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num, count=0) => {
  if(num<=0) throw new Error('Only positive numbers are allowed');
  if(num === 1) return count;
  return steps((num%2 === 0)? num/2:3*num+1, count+1);
  
};
