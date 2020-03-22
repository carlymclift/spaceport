class Ship {
  constructor(variation, captain) {
      this.name = variation.name;
      this.type = variation.type;
      this.maxCrew = 2;
      this.odometer = variation.odometer || 0;
      this.fuelCapacity = variation.fuelCapacity || 10;
      this.fuel = 0;
  }
}



module.exports = Ship;
