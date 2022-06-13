function fatorial (num) {
    let result = 1;
    for(let index = 2; index <= num; index += 1){
        result *= index; 
    };
    return result;
};
fatorial ();

console.log(fatorial(5));

//----------------------------------------------------------------------------------------------------
