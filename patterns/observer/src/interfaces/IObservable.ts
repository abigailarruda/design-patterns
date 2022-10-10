import IObserver from './IObserver';

export default interface IObservable {
  observers: IObserver[];
  subscribe: (observer: IObserver) => void;
  unsubscribe: (observer: IObserver) => void;
  publish: () => void;
}
