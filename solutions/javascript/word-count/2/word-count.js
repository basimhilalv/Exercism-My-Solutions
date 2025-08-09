//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (sentence) => {
  const words = sentence.toLowerCase().match(/\w+('\w+)?/g);
  let wordCount = {}
  for(let word of words){
    wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
  }
  return wordCount;
};
