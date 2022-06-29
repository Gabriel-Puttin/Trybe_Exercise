const sum = (...numbers) => numbers.reduce((acumulador, number) => {
  if(typeof number !== 'number') {
    return 'Os valores devem ser numéricos';
  } else {
    return acumulador += number;
  }
});

console.log(sum(1, 2, 3, 4, 5, 6, 7));