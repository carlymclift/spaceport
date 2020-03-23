


class Shop {
  constructor(shopInfo, inventory) {
    this.name = shopInfo.name;
    this.inventory = {};
  }
  addInventory (inventory) {
    this.inventory += inventory;
  }
}



module.exports = Shop;
