

export const clean = (phoneNumber) => {
  if(/[a-z]/.test(phoneNumber)) throw new Error('Letters not permitted');
  if(/[@:!]/.test(phoneNumber)) throw new Error('Punctuations not permitted');
  let cleanNumber = phoneNumber.split(/[^0-9]/).join('');
  if(cleanNumber.length === 11){
    if(cleanNumber[0] !== '1') throw new Error("11 digits must start with 1");
    cleanNumber = cleanNumber.slice(1);
  }
  if(cleanNumber.length > 11) throw new Error('More than 11 digits');
  if(cleanNumber.length !== 10) throw new Error('Incorrect number of digits');
  if(cleanNumber[0] == 0) throw new Error('Area code cannot start with zero');
  if(cleanNumber[0] == 1) throw new Error('Area code cannot start with one');
  if(cleanNumber[3] == 0) throw new Error('Exchange code cannot start with zero');
  if(cleanNumber[3] == 1) throw new Error('Exchange code cannot start with one');
  return cleanNumber;
};
