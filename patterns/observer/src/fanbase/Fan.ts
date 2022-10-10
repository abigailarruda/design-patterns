import IObservable from '../interfaces/IObservable';
import IObserver from '../interfaces/IObserver';
import Idol from './Idol';

export default class Fan implements IObserver {
  id: number;
  name: string;
  fanSince: Date;

  constructor(id: number, name: string, fanSince: Date) {
    this.id = id;
    this.name = name;
    this.fanSince = fanSince;

    this.introduce();
  }

  introduce(): void {
    console.log(`👤 | Hi, I'm ${this.name}! I'm a fan since ${new Intl.DateTimeFormat('pt-BR').format(this.fanSince)}!`);
  }

  update(observable: IObservable): void {
    const idol = observable as Idol;

    console.log(`👤 | OMG! ${idol.name} is releasing a new album!`);
  }
}
