import IObservable from '../interfaces/IObservable';
import IObserver from '../interfaces/IObserver';
import Fan from './Fan';

export default class Idol implements IObservable {
  name: string;
  observers: Fan[];

  constructor(name: string) {
    this.name = name;
    this.observers = [];
  }

  subscribe(observer: IObserver): void {
    const fan = observer as Fan;

    console.log(`🎤 | ${fan.name} has been added to ${this.name}'s fan club!`);

    this.observers.push(observer as Fan);
  };

  unsubscribe(observer: IObserver): void {
    const fan = observer as Fan;

    console.log(`🎤 | ${fan.name} has been removed from ${this.name}'s fan club!`);
    
    this.observers = this.observers.filter(({ id }) => id === fan.id);
  };

  publish(): void {
    this.observers.forEach(fan => {
      console.log(`🎤 | ${fan.name}, ${this.name} has notified the release of a new album!`);

      fan.update(this);
    });
  };
}
