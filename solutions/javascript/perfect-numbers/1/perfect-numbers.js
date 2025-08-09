//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  let sumOfFactors = 0;
  if(num < 1) throw new Error ('Classification is only possible for natural numbers.')
  for(let i = 1 ; i<num ;i++)
    {
      if(num%i === 0)
        sumOfFactors += i
    }
  if(sumOfFactors === num) return 'perfect';
  if(sumOfFactors < num) return 'deficient';
  if(sumOfFactors > num) return 'abundant';
};
