//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (problems) => {
  let regex = /-*\d+|plus|minus|multiplied|divided|cubed/g;
  let keyWords = problems.match(regex);
  if(/States\?|cubed\?/.test(problems)) throw new Error("Unknown operation");
  if(!/\d+/.test(problems)) throw new Error("Syntax error");
  if(keyWords == null) throw new Error("Unknown operation");
  let result = Number(keyWords[0]);
  for(let i=1; i<keyWords.length; i+=2){
    switch(keyWords[i]){
      case 'plus':
        if(keyWords[i+1] == null) throw new Error("Syntax error");
        result += Number(keyWords[i+1]);
        break;
      case 'minus':
        if(keyWords[i+1] == null) throw new Error("Syntax error");
        result -= Number(keyWords[i+1]);
        break;
      case 'divided':
        if(keyWords[i+1] == null) throw new Error("Syntax error");
        result /= Number(keyWords[i+1]);
        break;
      case 'multiplied':
        if(keyWords[i+1] == null) throw new Error("Syntax error");
        result *= Number(keyWords[i+1]);
        break;
      default:
        throw new Error("Syntax error");
    }
  }
  return result;
};
