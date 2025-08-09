//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const proteinCodons = {
  "Methionine":["AUG"],
  "Phenylalanine":["UUU","UUC"],
  "Leucine":["UUA","UUG"],
  "Serine":["UCU","UCC","UCA","UCG"],
  "Tyrosine":["UAU","UAC"],
  "Cysteine":["UGU","UGC"],
  "Tryptophan":["UGG"],
  "STOP":["UAA","UAG","UGA"],
}

export const translate = (RNA = "") => {
  let output = [];
  for(let i = 0; i<RNA.length; i=i+3){
    let codon = RNA.substr(i, 3);
    let flag = false;
    for(const key in proteinCodons){
      if(proteinCodons[key].includes(codon)){
        flag = true;
        if(key === "STOP") return output;
        output.push(key);
      }
    }
    if(!flag) throw new Error('Invalid codon');
  }
  console.log(output)
  return output;
};
