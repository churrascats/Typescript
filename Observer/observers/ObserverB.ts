import IObserver from "./IObserver";

export class ConcreteObserverB implements IObserver {
    public update(state: number): void {
            console.log(`ConcreteObserverB: Received number: ${state}`);
    }
}