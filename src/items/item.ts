export class Item {
  [x: string]: any;
  name: string;
  sellIn: number;
  quality: number;
  minimumQuality: number = 0;
  maximumQuality: number = 50;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  checkQuality() {
    this.quality =
      this.quality < this.minimumQuality ? this.minimumQuality : this.quality;
    this.quality =
      this.quality > this.maximumQuality ? this.maximumQuality : this.quality;
  }
}
