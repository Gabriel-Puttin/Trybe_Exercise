// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function(event){
    event.preventDefault();
    console.log(HREF_LINK);
});

INPUT_CHECKBOX.addEventListener('click', function(event){
    event.preventDefault();
    console.log(INPUT_CHECKBOX);
});

INPUT_TEXT.addEventListener('keypress', function(event){
    if(event.key !== 'a'){
        event.preventDefault();
    };
});