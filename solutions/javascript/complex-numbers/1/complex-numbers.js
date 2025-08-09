//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag) {
    this.realNum = real;
    this.imagNum = imag;
  }

  get real() {
    return this.realNum;
  }

  get imag() {
    return this.imagNum;
  }

  add(comp2) {
    this.realNum += comp2.realNum;
    this.imagNum += comp2.imagNum;
    return this;
  }

  sub(comp2) {
    this.realNum -= comp2.realNum;
    this.imagNum -= comp2.imagNum;
    return this;
  }

  div(comp2) {
    let sumsq = (comp2.realNum*comp2.realNum)+(comp2.imagNum*comp2.imagNum)
    let realNum = ((this.realNum*comp2.realNum)+(this.imagNum*comp2.imagNum))/sumsq;
    let imagNum = ((this.imagNum*comp2.realNum)-(this.realNum*comp2.imagNum))/sumsq;
    this.realNum = realNum;
    this.imagNum = imagNum;
    
    return this;
  }

  mul(comp2) {
    let realNum = (this.realNum*comp2.realNum)-(this.imagNum*comp2.imagNum);
    let imagNum = (this.imagNum*comp2.realNum)+(this.realNum*comp2.imagNum);
    this.realNum = realNum;
    this.imagNum = imagNum;
    
    return this;
  }

  get abs() {
    return Math.sqrt(this.imagNum*this.imagNum+this.realNum*this.realNum);
  }

  get conj() {
    this.imagNum = 0-this.imagNum;
    return this;
  }

  get exp() {
    let realNum = Math.exp(this.realNum)*Math.cos(this.imagNum);
    let imagNum = Math.exp(this.realNum)*Math.sin(this.imagNum);
    this.realNum = realNum;
    this.imagNum = imagNum;
    return this;
  }
}
