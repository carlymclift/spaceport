class Part {
  constructor(variations) {
    this.name = variations.name;
    this.type = variations.type;
    this.value = variations.value;
    this.broken = false;
  }

  isValid() {
    if (this.name && this.type && this.value != undefined) {
      return true;
   }else{
      return false;
    }
  }
  include(spoon, drill) {
      this.validTypes.push(spoon, drill);
    }
}
var validTypes = [
      'shell',
      'hyperdrive',
      'computer',
      'life support',
      'landing gear',
      undefined
    ]

validTypes.push('flatware');

module.exports = Part;
