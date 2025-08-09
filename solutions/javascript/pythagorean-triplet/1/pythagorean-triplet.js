//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function triplets({ minFactor, maxFactor, sum }) {
  let result = []
  for(let i = minFactor || 1; i< (maxFactor || sum) ; i++){
    for(let j = i; j < (maxFactor || sum);j++){
      let k = Math.sqrt(i**2 + j**2);
      if(i+j+k == sum && ( minFactor ? k > minFactor:true) && (maxFactor ? k < maxFactor:true)) result.push(new Triplet(i,j,k));
    }
  }
  return result;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
