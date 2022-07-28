import { Item } from "./item";

export class Backstage extends Item {
  constructor(sellIn: number, quality: number) {
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
  }
  updateQuality() {
    if (this.sellIn <= 10 && this.sellIn > 5) return this.quality + 2;
    else if (this.sellIn <= 5 && this.sellIn > 0) return this.quality + 3;
    else if (this.sellIn < 0) return 0;
    return this.quality + 1;
  }
  updateItem() {
    this.sellIn -= 1;
    this.quality = this.updateQuality();
    this.checkQuality();
  }
}
