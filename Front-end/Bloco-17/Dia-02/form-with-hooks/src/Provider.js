import MyContext from './MyContext';
import React, { useState } from 'react';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const addData = (info) => setData(data.concat(info));
  
  const state = {
    data,
    setData,
    addData,
  }

  return(
    <MyContext.Provider value={ state }>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;
