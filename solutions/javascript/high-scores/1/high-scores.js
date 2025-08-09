//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this.scoreSheet = input;
  }

  get scores() {
    return this.scoreSheet;
  }

  get latest() {
    this.n = this.scoreSheet.length
    return this.scoreSheet[this.n-1];
  }

  get personalBest() {
    this.sorted = this.scoreSheet.sort((a,b)=> b - a)
    console.log(this.sorted);
    return this.sorted[0]
  }

  get personalTopThree() {
    return [this.scoreSheet.sort((a,b)=> b -a)[0], this.scoreSheet.sort((a,b)=> b -a)[1], this.scoreSheet.sort((a,b)=> b -a)[2]]
  }
}
