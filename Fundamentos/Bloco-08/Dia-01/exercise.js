//-----------------------------------------------------------------------------------------------------
const newObject = (name) => {
  const fullName = name.toLowerCase().split(' ').join('_');
  const object = {
    nomeCompleto: name,
    email: `${fullName}@trybe.com`
  }
  return object;
};


const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// console.log(newEmployees(newObject));
//------------------------------------------------------------------------------------------------------

const check = (number, numberGenerator) => {
  if(number === numberGenerator) {
    return 'Parabéns você ganhou!';
  } else {
    return 'Tente novamente! :)';
  }
};

const generateNumber = (number, callback) => {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  const numberGenerator = Math.floor(Math.random() * (max - min + 1)) + min;
 
  return callback(number, numberGenerator);
};
console.log(generateNumber(2, check));
//--------------------------------------------------------------------------------------------------------
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (par1, par2) => {
  let result = 0;
  for(let index in par1){
    if(par2[index] === 'N.A'){
      result += 0;
    } else if (par1[index] !== par2[index]){
      result -= 0.5;
    } else if (par1[index] === par2[index]){
      result += 1;
    }
  }
  return result;
};
// console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS));

const calculator = (par1, par2, callback) => result = callback(par1, par2);

console.log(calculator(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
//-------------------------------------------------BONÛS------------------------------------------------
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => {
  const numberGenerator = Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
  return numberGenerator;
};

const damageWarrior = () => {
  const numberGenerator = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength;
  return numberGenerator;
};

const damageMage = () => {
  const mageAttributes = {
    mana: 125,
  }
  if(mageAttributes.mana < 15) {
    mageAttributes.damage = 'Não possui mana suficiente';
  };
  mageAttributes.damage = Math.floor(Math.random() * ((2 * mage.intelligence) - mage.intelligence + 1)) + mage.intelligence;
  mageAttributes.mana -= 15;

  return mageAttributes;
}

const gameActions = {
   turnWarrior: (damageWarrior) => {
    const warriorD = damageWarrior(); 
    warrior.damage = warriorD;
    dragon.healthPoints -= warriorD;
  },
  turnMage: (damageMage) => { 
    const mageD = damageMage();
    mage.damage = mageD.damage;
    mage.mana -= mageD.mana;
    dragon.healthPoints -= mageD.damage;
  },
  turnDragon: (damageDragon) => {
    const dragonD = damageDragon(); 
    mage.healthPoints -= dragonD;
    warrior.healthPoints -= dragonD;
    dragon.damage = dragonD;
  },
  turnResults: () => battleMembers,
};
gameActions.turnWarrior(damageWarrior);
gameActions.turnMage(damageMage);
gameActions.turnDragon(damageDragon);
console.log(gameActions.turnResults());