//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let word = sentence.toLowerCase();
  let status = false;
  for(let i of alphabets)
    {
      if(word.includes(i))
        status = true;
      else
      {
        status = false;
        break;
      }
    }
  return status;
};
