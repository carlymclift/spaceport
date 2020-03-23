var validDesignation = [
  'military',
  'cargo',
  'passenger',
]

class Ship {
  constructor(shipInfo, captain, crew) {
      this.name = shipInfo.name;
      this.type = shipInfo.type;
      this.maxCrew = 2;
      this.odometer = shipInfo.odometer || 0;
      this.fuelCapacity = shipInfo.fuelCapacity || 10;
      this.fuel = 0;
      this.crew = [];
      this.captain = shipInfo.captain;

      if(validDesignation.includes(this.type) === false) {
        this.type = undefined;
      }


    }
}

module.exports = Ship;
