import MyCollection from "../collection/MyCollection";
import IIterator from "./IIterator";

export default class MyIterator implements IIterator<string> {
  private position: number = 0;
  private collection: MyCollection;

  constructor(collection: MyCollection) {
    this.collection = collection;
  }

  public next(): string {
    const item = this.collection.getItems()[this.position];
    this.position++;
    return item;
  }

  public hasNext(): boolean {
    return this.position < this.collection.getItems().length;
  }
}
