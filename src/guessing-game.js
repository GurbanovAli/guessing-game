  
class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.avr = (this.min + this.max) / 2;
    this.avr = this.avr > parseInt(this.avr) ? this.avr + 0.5 : this.avr;
    return parseInt(this.avr);
  }

  lower() {
    this.max = this.avr;
  }

  greater() {
    this.min = this.avr;
  }
}

module.exports = GuessingGame;
