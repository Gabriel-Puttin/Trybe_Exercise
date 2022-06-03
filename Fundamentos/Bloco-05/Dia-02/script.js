console.log(document.querySelector('#elementoOndeVoceEsta'));

let color = document.querySelector('#elementoOndeVoceEsta').parentNode;
color.style.color = 'red';

document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerHTML = 'Olá';

console.log(document.querySelector('#pai').firstElementChild);

console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);

//------------------------------------------------------------------------------------------------------
let father = document.querySelector('#pai');
let brother = document.createElement('section');
brother.id = 'irmaoElementoOndeVoceEsta';
father.appendChild(brother);

let fatherTwo = document.querySelector('#elementoOndeVoceEsta');
let sun = document.createElement ('span');
sun.id = 'filhoElementoOndeVoceEsta';
fatherTwo.appendChild(sun);

let fatherTree = document.querySelector('#primeiroFilhoDoFilho');
let sunTwo = document.createElement ('div');
sunTwo.id = 'filhoPrimeiroFilhoDoFilho';
fatherTree.appendChild(sunTwo);

console.log(document.querySelector('#filhoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling);

//----------------------------------------------------------------------------------------------------
