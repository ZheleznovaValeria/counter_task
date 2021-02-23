import { CounterButton, Wrapper, CounterStyle, Button, Container } from './counter.styles.js';
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Wrapper>
        <CounterButton onClick={() => setCount(count - 1)}>-</CounterButton>
        <CounterStyle>{count}</CounterStyle>
        <CounterButton onClick={() => setCount(count + 1)}>+</CounterButton>
      </Wrapper>
      <Button to="/login">Жмакни кнопку</Button>
    </Container>
  );
}

export default Counter;
