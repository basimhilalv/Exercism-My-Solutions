//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if(p < 2 || g < 2) throw new Error();
    if(this.checkPrime(p) && this.checkPrime(g)){
      this.p = p;
      this.g = g;
    }else{
      throw new Error();
    }
  }
  
  checkPrime(a){
    for(let i = 2; i<a;i++){
      if(a%i == 0){
        return false;
      }
    }
    return true;
  }
  getPublicKey(privateKey) {
    if(privateKey < 2 || privateKey >= this.p) throw new Error();
    let key = Math.pow(this.g,privateKey)%this.p
    return key;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    let secret = Math.pow(theirPublicKey, myPrivateKey)%this.p;
    return secret;
  }
}
