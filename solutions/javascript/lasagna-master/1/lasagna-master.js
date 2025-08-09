/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(minutes){
  if(minutes === 0)
    return 'Lasagna is done.';
  else if(minutes > 0)
    return 'Not done, please wait.';
  else
    return 'You forgot to set the timer.'
}

export function preparationTime(layers, avgtime=2){
  return layers.length*avgtime;
}

export function quantities(layers){
  let noodles = 0;
  let sauce = 0;
  for (let i of layers){
    if(i === 'noodles')
      noodles += 50;
    else if(i === 'sauce')
      sauce += 0.2;
  }
  return { noodles , sauce };
}

export function addSecretIngredient(friend, mine){
  mine.push(friend[friend.length-1]);
}

export function scaleRecipe(recipe, portions){
  let factor = portions/2;
  let obj = {}
  for(const key in recipe)
    {
      obj[key] = recipe[key] * factor;
    }
  return obj;
}