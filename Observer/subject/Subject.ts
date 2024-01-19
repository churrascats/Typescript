import IObserver from "../observers/IObserver";
import ISubject from "./ISubject";

export default class Subject implements ISubject {

    private _state: number = 0;
    private _observers: IObserver[] = [];

    public subscribe(observer: IObserver): void {
        const isExist = this._observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this._observers.push(observer);
    }

    public unsubscribe(observer: IObserver): void {
        const observerIndex = this._observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this._observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
    
    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this._observers) {
            observer.update(this._state);
        }
    }

    public get state() {
        return this._state;
    }

    public set state(value: number) {
        this._state = value;
    }

}