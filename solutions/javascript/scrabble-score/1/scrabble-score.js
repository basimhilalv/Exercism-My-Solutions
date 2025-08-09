//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// const SCRABBLE = {
//   1:['A','E','I','O','U','L','N','R','S','T'],
//   2:['D','G'],
//   3:['B','C','M','P'],
//   4:['F','H','V','W','Y'],
//   5:['K'],
//   8:['J','X'],
//   10:['Q','Z'],
// }

const Scrabble = {
  "AEIOULNRST" : 1,
  "DG":2,
  "BCMP":3,
  "FHVWY":4,
  "K":5,
  "JX":8,
  "QZ":10,
}
export const score = (word) => {
  let score = 0;
  for(let char of word.toUpperCase()){
    for(const key of Object.keys(Scrabble)){
      if(key.split('').includes(char)) score += Scrabble[key];
    }
  }
  return score;
};
