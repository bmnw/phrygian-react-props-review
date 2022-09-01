import { useState, useEffect } from 'react';
// import React from 'react';
// const useState = React.useState;
// const useEffect = React.useEffect;
import Header from '../Header/Header.jsx';

function App () {
  const [headerColor, setHeaderColor] = useState('red');
  return (
    <div>
      <Header 
        color={headerColor}
      />
      <input 
        value={headerColor} 
        onChange={(event) => setHeaderColor(event.target.value)} 
      />
    </div>
  );

}

export default App
