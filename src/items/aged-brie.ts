import { Item } from "./item";

export class AgedBrie extends Item {
  constructor(sellIn:number, quality:number) {
      super('Aged Brie', sellIn, quality);
  }
  updateItem() {
    this.sellIn -= 1;
    this.quality = this.sellIn > 0 ? this.quality + 1 : this.quality + 2;
    this.checkQuality();
  }
}
