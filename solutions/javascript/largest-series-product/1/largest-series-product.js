//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input,span) => {
  //let series = [];
  if(span < 1) throw new Error("Span must be greater than zero");
  if(span > input.length) throw new Error("Span must be smaller than string length");
  if(!(/^\d+$/g.test(input))) throw new Error("Digits input must only contain digits");
  let largestProduct = 0;
  for(let i =0; i+span <= input.length; i++){
    let series = input.slice(i,i+span);
    let product = 1;
    for(let digit of series){
      product = product*Number(digit);
    }
    if(product > largestProduct) largestProduct = product;
  }
  return largestProduct;
};
