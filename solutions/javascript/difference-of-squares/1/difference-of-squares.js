//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(value) {
    this.limit = value;
    
  }

  get sumOfSquares() {
    return (this.limit*(this.limit + 1)*(2*this.limit + 1))/6
  }

  get squareOfSum() {
    return Math.pow(this.limit*(this.limit+1)/2 , 2);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
