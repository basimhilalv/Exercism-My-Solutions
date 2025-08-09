//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  let words = phrase.split(/[- _]+/);
  let acronym = ''
  for(let word of words){
    acronym += word[0].toUpperCase();
  }
  return acronym;
};
