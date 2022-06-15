function hydrate(string) {
    let result = string.split('');
    let quantidade = 0;
    for(let index in result){
        if(parseInt(result[index])){
            quantidade += parseInt(result[index]);
        };
    };
    let copo = 'copo'
    if(quantidade > 1){
        copo = 'copos';
    }
    result = `${quantidade} ${copo} de água`;
    return result;
};
hydrate('1 cerveja, 2 shots e 1 catuaba');
console.log(hydrate('1 cerveja'));
module.exports = hydrate;