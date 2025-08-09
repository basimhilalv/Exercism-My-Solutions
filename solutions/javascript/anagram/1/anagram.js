//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, wordSet) => {
  let match = [];
  let check = (word) =>{
    return word.toLowerCase().split('').sort().join('');
  }

  for(let i of wordSet){
    if(check(word) === check(i) && i.toLowerCase() != word.toLowerCase()){
      match.push(i);
    }
  }
  return match;
};
