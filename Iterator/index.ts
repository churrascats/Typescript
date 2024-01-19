import MyCollection from "./collection/MyCollection";

const collection = new MyCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

console.log('Straight traversal:');

while (iterator.hasNext()) {
    console.log(iterator.next());
    console.log(iterator.hasNext());
}