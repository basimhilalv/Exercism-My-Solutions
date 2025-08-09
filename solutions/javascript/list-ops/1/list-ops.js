//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    this.values = [...this.values, ...list.values]
    return this;
  }

  concat(lists) {
    for(let i of lists.values){
      this.values = [...this.values, ...i.values];
    }
    return this
  }

  filter(func) {
    let newArray = [];
    for(let i of this.values){
      if(func(i)){
        console.log(i);
        newArray.push(i);
      }
    }
    return new List(newArray);
  }

  map(func) {
    let newArray = [];
    for(let i of this.values){
      if(func(i)){
        newArray.push(func(i));
      }
    }
    return new List(newArray);
  }

  length() {
    return this.values.length;
  }

  foldl(func, acc) {
    for(let i of this.values){
      acc = func(acc,i);
    }
    return acc;
  }

  foldr(func, acc) {
    for(let i=this.values.length-1 ; i>=0 ; i--)
      {
        acc = func(acc, this.values[i])
      }
    return acc;
  }

  reverse() {
    let newArray = [];
    for(let i=this.values.length-1 ; i>=0 ; i--){
        newArray.push(this.values[i]);
    }
    return new List(newArray);
  }
}