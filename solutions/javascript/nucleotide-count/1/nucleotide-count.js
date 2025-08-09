//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  let regex = /^[ACGT]*$/;
  if(regex.test(strand)){
    let nucleotides = [0,0,0,0]
    for(let i of strand){
      if(i === "A")
        nucleotides[0]++;
      if(i === "C")
        nucleotides[1]++;
      if(i === "G")
        nucleotides[2]++;
      if(i === "T")
        nucleotides[3]++;
    }
    return nucleotides.join(' ');
  }
  else{
    throw new Error('Invalid nucleotide in strand');
  }
}
