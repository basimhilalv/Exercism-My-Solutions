//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minute = '00') {
    this.hour = (24 + hour%24 + Math.floor(minute/60)%24)%24;
    this.minute = (60 + minute%60)%60;
  }

  toString() {
    return `${('0'+this.hour).slice(-2)}:${('0'+this.minute).slice(-2)}`;
  }

  plus(minute) {
    return new Clock(this.hour, this.minute+minute);
  }

  minus(minute) {
    return this.plus(-minute);
  }

  equals(newClock) {
    if(this.hour === newClock.hour && this.minute === newClock.minute)
      return true;
    else
      return false;
  }
}
