import React from 'react';
import {Button} from './login.styles';
import {Wrapper} from './counter.styles';

function Home() {
  return (
    <Wrapper>
      <Button to="/counter">Жмакни кнопку на Counter</Button>
      <Button to="/login">Жмакни кнопку на Login</Button>
    </Wrapper>
  );
}

export default Home;
