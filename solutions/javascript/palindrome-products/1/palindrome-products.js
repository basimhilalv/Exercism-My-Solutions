

export class Palindromes {
  static generate({maxFactor, minFactor}) {
    if(maxFactor < minFactor) throw new Error("min must be <= max");
    return new Palindromes(maxFactor, minFactor);
  }
  constructor(maxFactor, minFactor){
    this.max = maxFactor;
    this.min = minFactor;
  }
  get smallest(){
    let small = {value:null, factors:[]};
    for(let i = this.min; i<=this.max; i++){
      for(let j = i; j<=this.max;j++){
        const product = i*j;
        if(!((small.value === null || product <= small.value) && isPalindrome(product))) continue;
        if(small.value == null || product < small.value ){
          small.value = product;
          small.factors = [[i,j]];
        }
        else if(product == small.value) small.factors.push([i,j]);
      }
    }
    return small;
  }
  get largest(){
    let large = {value:null, factors:[]};
    for(let i = this.max; i>=this.min; i--){
      for(let j = i; j>=this.min;j--){
        const product = i*j;
        if(!((large.value === null || product >= large.value) && isPalindrome(product))) continue;
        if(large.value == null || product > large.value ){
          large.value = product;
          large.factors = [[i,j]];
        }
        else if(product == large.value) large.factors.push([i,j]);
      }
    }
    return large;
  }
}

function isPalindrome(num){
  return String(num) === [...String(num)].reverse().join('');
}
