import IObserver from "./IObserver";

export class ConcreteObserverA implements IObserver {
    public update(state: number): void {
            console.log(`ConcreteObserverA: Received number: ${state}`);
    }
}

