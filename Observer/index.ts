import { ConcreteObserverB } from "./observers/ObserverB";
import { ConcreteObserverA } from "./observers/ObserversA";
import ISubject from "./subject/ISubject";
import Subject from "./subject/Subject";

const subject: ISubject = new Subject();

const observer1 = new ConcreteObserverA();
subject.subscribe(observer1)

const observer2 = new ConcreteObserverB();
subject.subscribe(observer2)

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.unsubscribe(observer2);

subject.someBusinessLogic();