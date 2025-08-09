//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = "abcdefghijklmnopqrstuvwxyz") {
    this.akey = key;
  }

  encode(plainText) {
    return [...plainText].map((char, index) => {
      let plainCode = char.charCodeAt(0) - 97;
      let keyCode = this.akey[index%this.akey.length].charCodeAt(0) - 97;
      let cipherCode = (plainCode + keyCode)%26;
      return String.fromCharCode(cipherCode + 97);
    }).join('');
  }

  decode(cipherText) {
    return [...cipherText].map((char, index) => {
      let cipherCode = char.charCodeAt(0) - 97;
      let keyCode = this.akey[index%this.akey.length].charCodeAt(0) - 97;
      let plainCode = (cipherCode - keyCode)%26;
      if(plainCode < 0) plainCode += 26;
      return String.fromCharCode(plainCode + 97);
    }).join('');
  }

  get key() {
    return this.akey;
  }
}
