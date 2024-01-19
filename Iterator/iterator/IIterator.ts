export default interface IIterator<T> {
  // Return the current element and move forward to next element.
  next(): T;

  // Checks if next position is valid.
  hasNext(): boolean;
}
