//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (string) => {
  string = string.replace(/[^\{\}\[\]\(\)]/g,'')
  console.log(string)
  for(let len = -1; string.length !== len;){
    len = string.length;
    string = string.replace(/\{\}|\[\]|\(\)/g, '')
  }
  return string.length === 0;
};
