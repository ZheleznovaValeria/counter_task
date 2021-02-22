import {
  CounterButton,
  Positions,
  CounterStyle,
  LoginButton,
  AllPositions,
} from "./counter.styles.js";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <AllPositions>
        <Positions>
          <CounterButton onClick={() => setCount(count - 1)}>-</CounterButton>
          <CounterStyle>{count}</CounterStyle>
          <CounterButton onClick={() => setCount(count + 1)}>+</CounterButton>
        </Positions>
        <LoginButton to="/login">Жмакни кнопку</LoginButton>
      </AllPositions>
    </div>
  );
}

export default Counter;
