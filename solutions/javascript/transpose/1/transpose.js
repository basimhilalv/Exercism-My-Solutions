//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (list) => {
  let output = [];
  for(let i=0; i<list.length; i++){
    for(let j=0; j<list[i].length; j++){
      if(i==0)
        output.push(list[i][j]);
      else{
        if(output[j] === undefined) output[j] = " ";
        while(output[j].length !== i) output[j] += " ";
        output[j] += list[i][j];
      }
    }
  }
  return output;
};
