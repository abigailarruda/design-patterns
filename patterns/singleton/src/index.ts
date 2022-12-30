import { MyDatabase } from './database/MyDatabase';

const myDatabase = MyDatabase.getInstance();

myDatabase.add({ name: 'Julinho da Van', age: 41 });
myDatabase.add({ name: 'Maurílio dos Anjos', age: 38 });
myDatabase.add({ name: 'Renan da Silva', age: 42 });
myDatabase.add({ name: 'Rogerinho do Ingá', age: 45 });

myDatabase.show();
 