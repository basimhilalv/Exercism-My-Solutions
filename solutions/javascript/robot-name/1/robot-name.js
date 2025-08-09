// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  static nameArray = new Map();
  constructor(){
    this.newName = this.generateName();
  }
  releaseNames(){

  }
  randomName(){
    let Alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    let Number = [...'1234567890'];
    return Alphabet[Math.floor(Math.random()*26)]+
          Alphabet[Math.floor(Math.random()*26)]+
          Number[Math.floor(Math.random()*10)]+
          Number[Math.floor(Math.random()*10)]+
          Number[Math.floor(Math.random()*10)];
  }
  generateName(){
    let name;
    do{
      name = this.randomName();
    }
    while(Robot.nameArray.has(name))
    Robot.nameArray.set(name);
    return name;
    
  }
  reset(){
    this.newName = this.generateName();
  }

  get name(){
    return this.newName;
  }
}

Robot.releaseNames = (name) => {
  
};


