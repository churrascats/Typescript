import IIterator from "./IIterator";

export default interface IAggregator {
    // Retrieve an external iterator.
    getIterator(): IIterator<string>;
}