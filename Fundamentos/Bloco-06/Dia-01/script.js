//task 3 --------------------------------------------------------------------------------------------
// const buttonSubmit = document.querySelector('#butto-submit');

// buttonSubmit.addEventListener('click', function(event){
//     event.preventDefault();
// });
//task 1 bonus ---------------------------------------------------------------------------------------
const buttonSubmit = document.querySelector('#butto-submit');
const foto = document.querySelector('#option2');

foto.addEventListener('change', function(){
    buttonSubmit.disabled = !foto.checked;
});