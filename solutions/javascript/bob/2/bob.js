//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//




export const hey = (message) => {

  const msg = message.trimEnd()
  if(msg==="")
    return "Fine. Be that way!"

  const isQuestion = msg.endsWith('?')
  const isShouting = /[A-Z]+/.test(msg) && msg === msg.toUpperCase();

  
  if(isShouting)
    return (isQuestion) ? "Calm down, I know what I'm doing!" : "Whoa, chill out!" ;
  if(isQuestion)
    return "Sure."
  else
    return "Whatever."
 
};
