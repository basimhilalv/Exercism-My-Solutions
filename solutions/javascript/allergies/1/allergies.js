//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALLERGIES = {
   '1' : 'eggs',
  '2':'peanuts',
  '4':'shellfish',
  '8':'strawberries',
  '16':'tomatoes',
  '32':'chocolate',
  '64':'pollen',
  '128':'cats',
}

export class Allergies {
  constructor(rate) {
    this.rate = rate.toString(2).split('').reverse();
    this.allergies = [];
    for(let i=0; i<this.rate.length; i++){
      if(this.rate[i] !== '0'){
        this.allergies.push(ALLERGIES[Math.pow(2,i)*this.rate[i]])
      }
    }
  }

  list() {
    return this.allergies;
  }

  allergicTo(name) {
    if(this.allergies.includes(name)) return true;
    else return false;
  }
}
