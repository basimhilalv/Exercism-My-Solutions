//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  let newstring="";
  for(let index = str.length-1; index>=0;index--)
    {
      newstring += str[index];
    }
  return newstring;
};

console.log('Debug message')
