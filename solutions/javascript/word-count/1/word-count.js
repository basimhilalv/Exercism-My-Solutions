//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (sentence) => {
  const regex = /[a-z]+['{1}]*[a-z]+|\d+|a/gi;
  const words = sentence.match(regex);
  let wordCount = {}
  for(let word of words){
    let count = 0;
    words.forEach((value) => {
      if(word.toLowerCase() === value.toLowerCase()) count++;
      return count;
    })
    wordCount[word.toLowerCase()] = count;
  }
  return wordCount;
};
