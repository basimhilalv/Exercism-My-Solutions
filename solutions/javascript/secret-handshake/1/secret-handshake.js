//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COMMAND = [
  'wink',
  'double blink',
  'close your eyes',
  'jump',
  'Reverse the order'
]

export const commands = (number) => {
  var output = []
  if(number > 0 && number < 32){
    
    let binaryNum = number.toString(2).split('').reverse();
    for(let i = 0 ; i < binaryNum.length; i++){
      if(i === 4){
        output.reverse();
        break;
      }
      if(binaryNum[i] === "1") {
        output.push(COMMAND[i]);
      }
    }
  }
    return output;
  
  
};
