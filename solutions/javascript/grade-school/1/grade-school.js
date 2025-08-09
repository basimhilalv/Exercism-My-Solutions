//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor(){
    this.students = {};
  }
  roster() {
    console.log(this.students);
    return JSON.parse(JSON.stringify(this.students));
  }

  add(name, grade) {
      for(let k of Object.keys(this.students)){
        if(this.students[k].includes(name)){
          let index = this.students[k].indexOf(name);
          this.students[k].splice(index,1)
        }
      }
          
      if(grade in this.students){
        this.students[grade].push(name);
        this.students[grade].sort();
      }
      else{
        this.students[grade] = [name];
      }
  }

  grade(grade) {
    if(this.students[grade]){
      return JSON.parse(JSON.stringify(this.students[grade].sort()));
    }
    else{
      return [];
    }
  }
}
