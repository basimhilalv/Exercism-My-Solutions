//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if(series) this.digits = series.split("").map(Number);
    else throw new Error("series cannot be empty");
  }

  slices(sliceLength) {
    if(sliceLength < 0) throw new Error("slice length cannot be negative");
    if(sliceLength == 0) throw new Error("slice length cannot be zero");
    
    var length = this.digits.length;
    var pattern = [];
    
    if(sliceLength > length) throw new Error("slice length cannot be greater than series length");
    else{
      for(let i=0; i<=length-sliceLength; i++){
        pattern.push(this.digits.slice(i, i+sliceLength));
      }
    }
    return pattern;
}
}