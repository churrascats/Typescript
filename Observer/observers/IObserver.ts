export default interface IObserver {
    // Receive update from subject.
    update(state: number): void;
}