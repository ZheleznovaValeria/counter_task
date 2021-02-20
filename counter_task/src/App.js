
import {CounterButton, Positions, CounterStyle} from './App.styles.js'
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); 
  return (
    <Positions>
      <CounterButton onClick={() => setCount(count - 1)}>-</CounterButton>
      <CounterStyle>{count}</CounterStyle>
      <CounterButton onClick={() => setCount(count + 1)}>+</CounterButton>
    </Positions>
  );
}

export default App;
