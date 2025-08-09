//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = sides;
  }

  get isEquilateral() {
    if(this.a <= 0 || this.b <= 0 || this.c <= 0) return false;
    return (this.a === this.b && this.b === this.c) ? true:false;
  }

  get isIsosceles() {
    if(this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b){
      return false;
    }
    else 
      return (this.a === this.b || this.b === this.c || this.a === this.c) ? true:false;
  }

  get isScalene() {
    if(this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b){
      return false;
    }
    else{
      return(!this.isIsosceles && !this.isEquilateral)? true:false;
    }
  }
}
