import { Item } from "./item";

export class Conjured extends Item {
  constructor(sellIn: number, quality: number) {
    super("Conjured Mana Cake", sellIn, quality);
  }
  updateItem() {
    this.sellIn -= 1;
    this.quality = this.sellIn > 0 ? this.quality -2 : this.quality -4;
    this.checkQuality();
  }
}
