//! REPASO
//! VAR(XXX) - LET - CONST

let age = 20;
let name = 'Moises';
const person = {
  //person ==> objeto
  name: 'Moises', //attribute
  age: 20, //attribute
  run() {
    console.log('runing...');
  },
};

age = 40; // MODIFYING VALUE
person.size = 24; // MODIFYING ATRIBUTO (SAME VALUE)
// person = {  // MODIFYING VALUE (X)
//   name: 'Aldo',
//   age: 20,
// };
// console.log(person);

//*************INMUTABILITY*********** */

const friend = {
  name: 'Moises',
  age: 20,
  home: {
    street: 'asdasd',
    number: 123,
  },
};

// const friend2 = friend; ==> ASIGNACIÓN POR REFERENCIA
//spread operator

// const friend2 = { ...friend, gender: 'Male' };.

// const friend2 = JSON.parse(JSON.stringify(friend));

// friend2.name = 'Carlos';

// console.log(friend);
// console.log(friend2);

array1 = [1, 12, 3, 44, 5];

// array2 = array1.sort((el1, el2) => el1 - el2);

// console.log(array2);

array2 = array1.map((element) => element * 2);
console.log(array2);
