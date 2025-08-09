//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const BOOK_PRICE = 800;
const DISCOUNTS = {
  1 : 0,
  2 : 0.05,
  3 : 0.1,
  4 : 0.2,
  5 : 0.25,
}

export const cost = (books) => {
  let subsets = [];
  while(books.length > 0){
    let subset = []
    for(let i=0; i<books.length ; i++){
      if(!subset.includes(books[i]))
      {
        subset.push(books[i]);
        books.splice(i,1);
        i--;
      }
    }
    subsets.push(subset);
  }

  for(let i=0; i<subsets.length; i++){
    for(let j=i+1; j<subsets.length; j++){
      if(subsets[i].length === 5 && subsets[j].length === 3)
        subsets[j].push(subsets[i].pop())
    }
  }
  
  let cost = 0;
  for(let subset of subsets){
    let discount = subset.length*BOOK_PRICE*DISCOUNTS[subset.length];
    cost += (subset.length*BOOK_PRICE)-discount;
  }
  console.log(subsets, cost);
  return cost;
  
};
