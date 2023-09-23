const friend = {
  name: 'Moises',
  age: 20,
  home: {
    street: 'asdasd',
    number: 123,
  },
};

//const friend2 = friend; //==> ASIGNACIÓN POR REFERENCIA
//spread operator ===> SHALLOW COPY
//const friend2 = { ...friend };

//Object assign
// const friend2 = {};

// Object.assign(friend2, friend);

// friend2.age = 40;
//document
// console.log(friend);
// console.log(friend2);
//END Object assign
//===> DEEP COPY
//JSON.stringify, JSON.parse

const friend3 = JSON.parse(JSON.stringify(friend));

friend3.home.number = 456;

console.log(friend);
console.log(friend3);
