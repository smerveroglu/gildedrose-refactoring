import { Item } from "./item";

export class Sulfuras extends Item {
  constructor(sellIn: number) {
    super("Sulfuras, Hand of Ragnaros", sellIn, 80);
  }
  updateItem() {}
}
