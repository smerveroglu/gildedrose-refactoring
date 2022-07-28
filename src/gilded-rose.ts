import { AgedBrie } from "./items/aged-brie";
import { Backstage } from "./items/backstage";
import { Conjured } from "./items/conjured";
import { Item } from "./items/item";
import { OtherItem } from "./items/other-item";
import { Sulfuras } from "./items/sulfuras";

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item>) {
    this.items = items.map((item) => {
      if (item.name === "Aged Brie")
        return new AgedBrie(item.sellIn, item.quality);
      if (item.name === "Backstage passes to a TAFKAL80ETC concert")
        return new Backstage(item.sellIn, item.quality);
      if (item.name === "Conjured Mana Cake")
        return new Conjured(item.sellIn, item.quality);
      if (item.name === "Sulfuras, Hand of Ragnaros")
        return new Sulfuras(item.sellIn);
      else {
        return new OtherItem(item.name, item.sellIn, item.quality);
      }
    });
  }
  updateItems() {
    this.items.map((element) => element.updateItem());
  }
}
