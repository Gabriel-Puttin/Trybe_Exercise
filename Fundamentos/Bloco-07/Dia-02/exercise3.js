const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


//-------------------------------------------Exercício 1------------------------------------------------
  const createShift = (par1, par2, par3) => {
    par1[par2] = par3; 
  };

  createShift(lesson2, 'turno', 'noite');
//-------------------------------------------Exercício 2------------------------------------------------
  const listKeys = (obj) => Object.keys(obj);
  
//-------------------------------------------Exercício 3------------------------------------------------
  const lengthObj = (object) => Object.keys(object).length;

//-------------------------------------------Exercício 4------------------------------------------------
  const listValues = (ob) => Object.values(ob);
  
//-------------------------------------------Exercício 5------------------------------------------------
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// console.log(allLessons);
//-------------------------------------------Exercício 6------------------------------------------------
  const allStudents = () =>  Object.entries(allLessons)[0][1].numeroEstudantes + Object.entries(allLessons)[1][1].numeroEstudantes + Object.entries(allLessons)[2][1].numeroEstudantes;

// console.log(allStudents());
//-------------------------------------------Exercício 7------------------------------------------------
  const position = (object, number) => Object.values(object)[number];

// console.log(position(lesson2, 3));
//-------------------------------------------Exercício 8------------------------------------------------
  const verifyPair = (object, key, value) => {
    let objects = Object.entries(object);
    for(let index in objects){
      if(objects[index][0] === key && objects[index][1] === value){
        return true;
      }
    };
    return false;
  };
  console.log(verifyPair(lesson3, 'turno', 'noite'));
  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));