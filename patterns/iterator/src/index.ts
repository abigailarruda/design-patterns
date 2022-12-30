import { DataStructure } from './DataStructure';
import { ReverseIterator } from './ReverseIterator';

const dataStructure = new DataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;

console.log('[*]', a, b);

const [c, d, ...rest] = dataStructure;

console.log('[*]', c, d, rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}

console.log();

dataStructure.changeIterator(new ReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}

console.log();

dataStructure.resetIterator();

for (const data of dataStructure) {
  console.log(data);
}

console.log();
