//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ALPHABET = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
export const rotate = (plainText, rot) => {
  let regex = /[a-zA-Z]/i;
  let cipherText = '';
  for(let char of plainText){
    if(regex.test(char)){
    let i = ALPHABET.indexOf(char.toLowerCase());
    let j = (i+rot)%26;
    if(char === ALPHABET[i].toUpperCase())
      cipherText += ALPHABET[j].toUpperCase();
    else
      cipherText += ALPHABET[j];
    }
    else{
      cipherText += char;
    }
  }
  return cipherText;
};
