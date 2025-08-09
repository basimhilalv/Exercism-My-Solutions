//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (plainText) => {
  let cipherText = '';
  let count = 1;
  for(let i=0; i<plainText.length; i++){
    if(plainText[i] === plainText[i+1]) count++;
    else if(count > 1){
      cipherText += count+plainText[i];
      count = 1;
    }
    else cipherText += plainText[i];
  }
  return cipherText;
};

export const decode = (cipherText) => {
  let plainText = '';
  let count = 0;
  for(let i of cipherText){
    if(!isNaN(i) && i !== " "){
      console.log(i)
      count = count*10 + Number(i);
    }else if(count > 0){
      plainText += i.repeat(count);
      count = 0;
    }else plainText += i;
  }
  return plainText;
};
