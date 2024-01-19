import IObserver from "../observers/IObserver";

export default interface Subject {
    subscribe(observer: IObserver): void;
    unsubscribe(observer: IObserver): void;
    someBusinessLogic(): void
    notify(): void;
}