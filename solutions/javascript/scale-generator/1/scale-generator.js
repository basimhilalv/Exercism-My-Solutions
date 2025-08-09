const SHACHROMA = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const FLACHROMA = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
const SHATONICS = ["C", "G", "D", "A", "E", "B", "F#", "a", "e", "b", "f#", "c#", "g#", "d#"];
const FLATONICS = ["F", "Bb", "Eb", "Ab", "Db", "Gb", "d", "g", "c", "f", "bb", "eb"];


export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }

  chromatic() {
    const notes = this.selectChromatic(this.tonic);
    const position = notes.findIndex((t) => t.toLowerCase() === this.tonic.toLowerCase());
    return [...notes.slice(position), ...notes.slice(0, position)];
  }

  interval(pattern) {
    const notes = this.selectChromatic(this.tonic);
    let position = notes.findIndex((t) => t.toLowerCase() === this.tonic.toLowerCase());
    const result = [notes.find((t) => t.toLowerCase() === this.tonic.toLowerCase())];

    for (const sign of pattern) {
      switch (sign) {
        case "A":
          position += 3;
          break;
        case "M":
          position += 2;
          break;
        case "m":
          position += 1;
          break;
        default:
          break;
      }

      position %= 12;
      result.push(notes[position]);
    }
    return result;
  }
  selectChromatic() {
    if (FLATONICS.includes(this.tonic)) return FLACHROMA;
    if (SHATONICS.includes(this.tonic)) return SHACHROMA;
    else throw new Error("Invalid tonic: ", this.tonic);
  }
}