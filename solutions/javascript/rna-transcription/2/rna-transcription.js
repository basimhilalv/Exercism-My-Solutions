//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) => DNA.split('').map((i)=> SEQUENCE[i]).join('');

const SEQUENCE = {
  "G" : "C",
  "C" : "G",
  "T" : "A",
  "A" : "U",
}