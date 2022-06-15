  const techList = (array, name) => {
    if(array.length === 0) return 'Vazio!';
    const ordenada = array.sort();
    let result = [];
    for (let index in ordenada){
      result.push({
        tech: ordenada[index],
        name: name,
      });
    };
    return result;
  };
  techList(['CSS', 'HTML', 'JavaScript', 'React', 'SQL', 'Jest'], 'Lucas');
  
  module.exports = techList;