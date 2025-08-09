//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (numberString) => {
  let sum = 0;
  let number = numberString.replace(/\s+/g,'');
  if(number.length<=1) return false;
  
  for(let i = number.length-1;i>=0;i-=2){
    sum += Number(number[i]);
  }
  for(let i = number.length-2;i>=0;i-=2){
    if(number[i] === '9') sum += 9;
    else sum += Number((number[i]*2)%9);
  }
  
  console.log(sum);
  if(sum%10 === 0) return true;
  else return false;
};
