//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num) => {
  let array = num ? [[1]] : [];
  for(let row = 1; row < num; row++){
    let currentRow = [1];
    for(let col = 1; col < row; col++){
      currentRow.push(array[row - 1][col - 1] + array[row - 1][col]);
    }
    currentRow.push(1);
    array.push(currentRow);    
  }
  return array;
};
