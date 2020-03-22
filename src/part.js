var validTypes = [
      'shell',
      'hyperdrive',
      'computer',
      'life support',
      'landing gear',
      undefined
    ]

class Part {
  constructor(partInfo) {
    this.name = partInfo.name;
    this.type = partInfo.type;
    this.value = partInfo.value;
    this.broken = false;

    if(validTypes.includes(this.type) === false) {
      this.type = undefined;
    }
  }

  isValid() {
    if (this.name && this.type && this.value != undefined) {
      return true;
   }else{
      return false;
    }
  }
}

module.exports = Part;
