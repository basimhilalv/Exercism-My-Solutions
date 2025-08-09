//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  let set = new Set();
  let result = word.replace(/[^\w]/gi, '');
  for(let i of result.toLowerCase()){
    set.add(i);
  }
  return set.size === result.length;
};
