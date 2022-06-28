const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce((acc, curr) =>
  acc + curr.split('').reduce((sum, letra) => {
    if (letra === 'a' || letra === 'A') return sum + 1;
    return sum;
  }, 0), 0)

console.log(containsA());