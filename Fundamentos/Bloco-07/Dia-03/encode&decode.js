function encode(phrase) {
    let code = phrase.split('');
    for (let index in code){
      if (code[index] === 'a'){
        code[index] = 1;
      } else if (code[index] === 'e'){
        code[index] = 2;
      } else if (code[index] === 'i'){
        code[index] = 3;
      } else if (code[index] === 'o'){
        code[index] = 4;
      } else if (code[index] === 'u'){
        code[index] = 5;
      };
    };
    return code.join('');
  };
  
  function decode(phraseTwo) {
      let codeTwo = phraseTwo.split('');
      for (let indexTwo in codeTwo){
        if (codeTwo[indexTwo] === '1'){
          codeTwo[indexTwo] = 'a';
        } else if (codeTwo[indexTwo] === '2'){
          codeTwo[indexTwo] = 'e';
        } else if (codeTwo[indexTwo] === '3'){
          codeTwo[indexTwo] = 'i';
        } else if (codeTwo[indexTwo] === '4'){
          codeTwo[indexTwo] = 'o';
        } else if (codeTwo[indexTwo] === '5'){
          codeTwo[indexTwo] = 'u';
        };
      };
      return codeTwo.join('');
    };

const functions = {encode, decode};
module.exports = functions;