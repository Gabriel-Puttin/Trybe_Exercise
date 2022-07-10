const greet = (par1, par2 = 'Hi') => `${par2} ${par1}`

console.log(greet('John')) 
console.log(greet('John', 'Good morning'))
console.log(greet('Isabela', 'Oi'))