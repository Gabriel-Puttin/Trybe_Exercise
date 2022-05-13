const myName = "Gabriel";
const birthCity = "Nova Venécia";
let birthYear = 2002;
birthYear = 2030


console.log (myName)
console.log (birthCity)
console.log (birthYear)

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';


console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

patientId = "50";

console.log(typeof patientId);

const width = 5;
let height = 8;

const area = width * height;
const perimeter = (2*width) + (2*height);

console.log(area);
console.log(perimeter);


let score = 80;
score = 60;
score = 30;

if (score >= 80){
    console.log("Parabéns você foi aprovada");
} 
else if (score < 80 && score >= 60 ){
    console.log("Você está na nossa lista de espera");
} 
else{
    console.log("Você foi reprovada(o)");
};


let comida = 'pão na chapa';
let bebida = 'cafezinho';


if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = false;
const conditionTwo = true;

console.log(conditionOne || conditionTwo);


const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
console.log(listaDeCompras);

const currentHour = 15;
let message = "";

if(currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
} 
else if(currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
} 
else if(currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?"; 
} 
else if(currentHour >= 11 && currentHour < 14){
    message = "Hora do almoço!!!"; 
} 
else if(currentHour >= 4 && currentHour < 11){
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);


const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

let weekDay = "quarta-feira";

weekDay = "sábado";

if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
    console.log("FINALMENTE, descanso merecido UwU");
}

console.log((2 + 2) === 4);

console.log(!(2 + 2) === 4);

let status = "aprovada";

switch (status) {
    case "aprovada":
        console.log("aprovada");
        break; 

    case "lista":
        console.log("na fila");
        break;

    case "reprovada":
        console.log("reprovada");
        break;

    default: 
    console.log("não indentificada");
}