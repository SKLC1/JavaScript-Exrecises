

const obj1 = {name: 'one'};
const obj2 = {name: 'two'};
const obj3 = {name: 'three'};

let final = new Map();

final[obj1] = '1';
final[obj2] = '2';
final[obj3] = '3';

console.log(final.get());

