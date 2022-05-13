//primeiro exercício
const valorA = 30;
const valorB = 90;

console.log(valorA + valorB);

console.log(valorA - valorB);

console.log(valorA * valorB);

console.log(valorB / valorA);

console.log(valorA % valorB);

// segundo exercício
const valueA = 40;
const valueB = 60;

if (valueA > valueB){
    console.log(valueA);
} else {
    console.log(valueB);
}

// terceiro exercício
const valueC = 100;
const valueD = 60;
const valueE = 40;

if (valueC < valueD && valueC < valueE){
    console.log(valueC);
} 
else if(valueD < valueC && valueD < valueE){
    console.log(valueD);
}
else if (valueE < valueC && valueE < valueD){
    console.log(valueE);
}

// quarto exercício
const valueF = 0;

if(valueF > 0){
    console.log("positive");
}
else if(valueF < 0){
    console.log("negative");
} else {
    console.log("zero");
}

// quinto exercício
const valueAlpha = 90;
const valueBeta = 30;
const valueTheta = 60;

if(valueAlpha + valueBeta + valueTheta === 180){
    console.log("true");
} 
else if (valueAlpha < 0 || valueBeta < 0 || valueTheta < 0){
    console.log("erro");
} else {
    console.log("false");
}

//sexto exercício
let pecaDeXadrez = "peão";

switch (pecaDeXadrez.toLowerCase()) {
    case "cavalo":
        console.log("Anda em formato de L");
        break;

    case "bispo":
        console.log("Anda em formato de diagonais");
        break;

    case "rei":
        console.log("Anda em um quadrado");
        break;
    
    case "rainha":
        console.log("Anda para frente, para os lados e para as diagonais quantas casas for necessárias");
        break;

    case "torre":
        console.log("Anda para frente e para os lados quantas casas for necessárias");
        break;
    
    case "torre":
        console.log("Anda para frente e para os lados quantas casas for necessárias");
        break;

    case "peão":
        console.log("No primeiro motimento, anda 2 casa para frente. Após o segundo movimento, apenas 1 casa para frente");
        break;

    default:
        console.log("Erro!");
}

// sétimo exercício
const nota = 80;

if(nota >= 90){
    console.log("A");
} 
else if (nota >= 80){
    console.log("B");
} 
else if (nota >= 70){
    console.log("C");
}
else if (nota >= 60){
    console.log("D");
}
else if (nota >= 50){
    console.log("E");
}
else if (nota < 50){
    console.log("7");
}
else {
    console.log("Erro, nota incorreta!");
}

// oitavo exercício
const value1 = 37;
const value2 = 07;
const value3 = 10;

if (value1 % 2 === 0 || value2 % 2 === 0 || value3 % 2 === 0){
    console.log(true);
} else {
    console.log(false);
}

// nono exercício
const value4 = 32;
const value5 = 09;
const value6 = 17;

if (value4 % 2 === 1 || value5 % 2 === 1 || value6 % 2 === 1){
    console.log(true);
} else {
    console.log(false);
}

// décimo exercício
const custoDoProduto = 600 * 1.2;
const valorDeVenda = 1000;

let lucro = valorDeVenda - custoDoProduto;
let resultado = lucro * 1000;

if(lucro >=0){
    console.log(resultado);
} else {
    console.log("Erro, os valores não podem ser negativos!")
}

// décimo primeiro exercício
let aliquotaINSS;
let aliquotaIR;
const salarioBruto = 4000;

if(salarioBruto < 1556.94){
    aliquotaINSS = salarioBruto * 0.08;
}
else if(salarioBruto >= 1556.94 && salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09;
} 
else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11;
} else {
    aliquotaINSS = 570.88;
}

const salarioBase = salarioBruto - aliquotaINSS;

if(salarioBase <= 1903.98){
    aliquotaIR = 0;
}
else if(salarioBase > 1903.98 && salarioBase <= 2826.65){
    aliquotaIR = (salarioBase * 0.075) - 142.80; 
} 
else if(salarioBase > 2826.65 && salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 0.15) - 354.80;
}
else if(salarioBase > 3751.05 && salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 0.225) - 636.13;
}
else if (salarioBase > 4664.68){
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - aliquotaIR;
console.log(salarioLiquido);
