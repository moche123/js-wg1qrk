//* VAR - LET - CONST
//`` => TEMPLATE STRING ==> CADENA INCORPORADA ES6 , ALFANUMERICOS y NUMEROS (INTERPOLACIÓN)

function process() {
  var count = 10;
  console.log(`El count por ahora vale ${count}`); // ''+asdasdasd

  for (var i = 0; i < 10; i++) {
    count = i;
    console.log(`El count dentro del bucle vale ${count}`);
  }

  console.log(`El count finalmente vale ${count}`);
}
process();
