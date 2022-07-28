import { GildedRose } from "@/gilded-rose";
import { Item } from "@/items/item";

describe("Gilded Rose", () => {
  it("should update other item", () => {
    const gildedRose = new GildedRose([new Item("foo", 10, 10)]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe("foo");
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[0].quality).toBe(9);
  });

  it("should not decrease quality below 0", () => {
    const gildedRose = new GildedRose([new Item("foo", 10, -10)]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe("foo");
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[0].quality).toBe(0);
  });

  it("should be quality not higher than 50", () => {
    const gildedRose = new GildedRose([new Item("foo", 10, 100)]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe("foo");
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[0].quality).toBe(50);
  });

  it("should be reduced quality twice as fast once the sell-by date has passed", () => {
    const gildedRose = new GildedRose([new Item("foo", -10, 10)]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe("foo");
    expect(gildedRose.items[0].sellIn).toBe(-11);
    expect(gildedRose.items[0].quality).toBe(8);
  });

  it("should update aged-brie item", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 10)]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe("Aged Brie");
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[0].quality).toBe(11);
  });

  it("should update sulfuras item", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
    ]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(gildedRose.items[0].sellIn).toBe(10);
    expect(gildedRose.items[0].quality).toBe(80);
  });

  it("should update conjured item", () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 10, 10)]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe("Conjured Mana Cake");
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[0].quality).toBe(8);
  });

  // backstage items
  it("should update backstage item", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 12, 10),
    ]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(gildedRose.items[0].sellIn).toBe(11);
    expect(gildedRose.items[0].quality).toBe(11);
  });

  it("should be droped quality to 0 after the concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(gildedRose.items[0].sellIn).toBe(-1);
    expect(gildedRose.items[0].quality).toBe(0);
  });

  it("should be increased quality by 3 when there are 5 days", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10),
    ]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(gildedRose.items[0].sellIn).toBe(4);
    expect(gildedRose.items[0].quality).toBe(13);
  });
  
  it("should be increased quality by 2 when there are 10 days", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
    ]);
    gildedRose.updateItems();
    expect(gildedRose.items[0].name).toBe(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[0].quality).toBe(12);
  });
});
