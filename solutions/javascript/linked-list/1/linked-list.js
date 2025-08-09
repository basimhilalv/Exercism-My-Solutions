//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class LinkedList {

  constructor(){
    this.list = [];
  }
  push(value) {
    this.list.push(value);
  }
  pop() {
    return this.list.pop();
  }
  shift() {
    return this.list.shift();
  }
  unshift(value) {
    this.list.unshift(value);
  }
  delete(value) {
    let index = this.list.indexOf(value);
    if(index > -1)
      this.list.splice(index, 1)
  }

  count() {
    return this.list.length;
  }
}
