import { Item } from "./item";

export class OtherItem extends Item {
  updateItem() {
    this.sellIn -= 1;
    this.quality = this.sellIn > 0 ? this.quality - 1 : this.quality - 2;
    this.checkQuality();
  }
}
