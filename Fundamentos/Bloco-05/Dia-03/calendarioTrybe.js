function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  createDaysOfTheWeek();

function createDays(){
  const daysContain = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let index in dezDaysList){
      let list = dezDaysList[index];
      let daysList = document.createElement('li');
    if(list === 24 || list === 31){
        daysList.className = 'day holiday';
        daysList.innerHTML = list;
        daysContain.appendChild(daysList);
    } else if(list === 4 || list === 11 || list === 18){
        daysList.className = 'day friday';
        daysList.innerHTML = list;
        daysContain.appendChild(daysList);
    } else if (list === 25){
        daysList.className = 'day holiday friday';
        daysList.innerHTML = list;
        daysContain.appendChild(daysList);
    } else {
        daysList.className = 'day';
        daysList.innerHTML = list;
        daysContain.appendChild(daysList);
    };
  };
};
createDays();

function holidays(name){
    const fon = document.querySelector('.buttons-container');
    let fonfon = document.createElement('button');
    fonfon.innerHTML = name;
    fonfon.id = 'btn-holiday';
    fon.appendChild(fonfon);

};
holidays('Feriados');

let feriados = document.querySelectorAll('.holiday');
let button = document.querySelector('#btn-holiday');

button.addEventListener('click', changeBackgroundColor);
function changeBackgroundColor(){ 
    for (let index in feriados){
        if(feriados[index].style.backgroundColor === 'red'){
            feriados[index].style.backgroundColor = 'rgb(238,238,238)'; 
        } else {
            feriados[index].style.backgroundColor = 'red';
        };
    };
};

function fridays(name){
    const contair = document.querySelector('.buttons-container');
    let typePrimary = document.createElement('button');
    typePrimary.innerHTML = name;
    typePrimary.id = 'btn-friday';
    contair.appendChild(typePrimary);

};
fridays('Sexta-Feira');

let sextas = document.querySelectorAll('.friday');
let buttonTwo = document.querySelector('#btn-friday');
let text = 'Its Friday';
let normal = [4, 11, 18, 25];

buttonTwo.addEventListener('click', changeText);
function changeText(){ 
    for (let index in sextas){
        if(sextas[index].innerHTML === text){
            sextas[index].innerHTML = normal[index]; 
        } else {
            sextas[index].innerHTML = text;
        };
    };
};

let daysOfWeek = document.querySelector('#days');

daysOfWeek.addEventListener('mouseover', zoom);
function zoom(event){
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = 'bold';

};

daysOfWeek.addEventListener('mouseout', removeZoom);
function removeZoom(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '150';
};


function tasks(event){
    const span = document.querySelector('.my-tasks');
    let element = document.createElement('span');
    element.innerHTML = event;
    span.appendChild(element);

};
tasks('Estudar');

function colorTasks(cor){
    const div = document.querySelector('.my-tasks');
    let elementTwo = document.createElement('div');
    elementTwo.className = 'task';
    elementTwo.style.backgroundColor = cor;
    div.appendChild(elementTwo);

};
colorTasks('green');

let selectTask = document.querySelector('.task');
let classN = document.getElementsByClassName('task selected');

selectTask.addEventListener('click', function(event){
    if(classN.length === 0){
        event.target.className = 'task selected';
    } else {
        event.target.className = 'task';
    }
});


let dayOfCalendary = document.querySelector('#days');
let newClass = document.getElementsByClassName('task selected');
let sey = document.querySelector('.task');
let taskColor = sey.style.backgroundColor;

dayOfCalendary.addEventListener('click', function(event){
    let eventColor = event.target.style.color;
    if(newClass.length > 0 && eventColor !== taskColor){
    let nsoq = newClass[0].style.backgroundColor;
        event.target.style.color = nsoq;
    } else if(eventColor === taskColor && newClass.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
    };
});


