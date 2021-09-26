import React from 'react';
import Guessing from './components/Guessing';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function App() {
  return (
    <div className="App">
      <Guessing />
    </div>
  );
}

export default App;
