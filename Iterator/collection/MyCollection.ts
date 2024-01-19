import IAggregator from "../iterator/IAggregator";
import IIterator from "../iterator/IIterator";
import MyIterator from "../iterator/MyIterator";

export default class MyCollection implements IAggregator {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): IIterator<string> {
    return new MyIterator(this);
  }
}
