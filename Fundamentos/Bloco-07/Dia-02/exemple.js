// const sum = (value1, value2) => {
//     if(typeof value1 !== 'number' || typeof value2 !== 'number'){
//         return 'Os valores devem ser numeŕicos';
//     } else {
//         return value1 + value2;
//     };
// };

// console.log(sum(40, 50));

// console.log(sum(2, '3'));
//-----------------------------------------------THROW------------------------------------------------
// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));
//--------------------------------------------TRY/CATCH------------------------------------------------
  const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, '3'));

  //-----------------------------------------------------OBJECTS---------------------------------------
//   const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
//-----------------------------------------------------------------------------------------------------
//   const customer = {
//     firstName: 'Roberto',
//     lastName: 'Faria', // Propriedade adicionada.
//     age: 22,
//     job: 'Teacher',
//   };

//   console.log(customer);
//------------------------------------------------------------------------------------------------------
  const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.lastName = 'Faria';
  console.log(customer1);
  //----------------------------------------------------------------------------------------------------
  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);
  customer2['lastName'] = 'Silva';
  console.log(customer2);
  //----------------------------------------------------------------------------------------------------
  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);
//--------------------------------------------Function---------------------------------------------
  const newFunction = (exemple1, exemple2, exemple3) => {
      exemple1[exemple2] = exemple3;
      return exemple1;
  }
  console.log(newFunction({fisrtName: 'Roberto', age: 22, job: 'Teacher'}, 'lastName', 'Silva'));
//--------------------------------------------Object.keys------------------------------------------
  const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  for (const property in coolestTvShow) {
    console.log(property);
  }
//-----------------------------------------------------------------------------------------------------
  console.log(Object.keys(coolestTvShow));
//   console.log(Object.values(coolestTvShow));
//-----------------------------------------------------------------------------------------------------
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  //---------------------------------------------Object.values----------------------------------------
  const coolestTvShow2 = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  for (const property in coolestTvShow2) {
    console.log(coolestTvShow2[property]);
  }

  console.log(Object.values(coolestTvShow2));
  //---------------------------------------------------------------------------------------------------
  const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student));
  
  //---------------------------------------------Object.entries----------------------------------------
  const coolestTvShow3 = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow3));
  //---------------------------------------------------------------------------------------------------
  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };

 //---------------------------------------------Object.assign-----------------------------------------
 // A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

 Object.assign(destino, objeto1);
 Object.assign(destino, objeto1, objeto2);
 Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
 //----------------------------------------------------------------------------------------------------
 const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  //---------------------------------------------------------------------------------------------------
  const person2 = {
    name: 'Roberto',
  };
  
  const lastName2 = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person2, lastName2);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person2); // { name: 'Roberto', lastName: 'Silva' }
  
  clone.name = 'Maria';

  console.log('Mudando a propriedade name através do objeto clone')
  console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
  console.log(person2); // Output: { name: 'Maria', lastName: 'Silva' }
  console.log('--------------');

  person2.lastName2 = 'Ferreira';

  console.log('Mudando a propriedade lastName através do objeto person');
  console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
  console.log(person2); // Output: { name: 'Maria', lastName: 'Ferreira' }
  //---------------------------------------------------------------------------------------------------
  const obj = { value1: 10, value2: 11 };
  const cloneObj = obj;
  console.log(cloneObj);


const person3 = {
    name:'Roberto',
  };
  
  const lastName3 = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person3,lastName3);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person3);
  