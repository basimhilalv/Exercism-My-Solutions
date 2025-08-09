//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const silent = (message) => /^\s*$/.test(message)
const question = (message) => /[A-Za-z]*\?$/.test(message.trim())
const shouting = (message) => /^[^a-z]*([A-Z]+|!)$/.test(message)


export const hey = (message) => {
  if(silent(message))
    return "Fine. Be that way!"
  else if(question(message) && message === message.toUpperCase() && /[A-Z]/.test(message))
    return "Calm down, I know what I'm doing!"
  else if(shouting(message))
    return "Whoa, chill out!"
  else if(question(message))
    return "Sure."
  else
    return "Whatever."
};
