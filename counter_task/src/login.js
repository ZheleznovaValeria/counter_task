import React from 'react';
import { Button, Container, Hello } from './login.styles';

function LoginPage() {
  return (
    <Container>
      <Hello>
        Heyo wassup, Yarik? I'm fine too, spasibo cho sprosil:) I hope, that I've done this correctly, inache ya
        sovershu suicide:)
      </Hello>
      <Button to="/counter">Жмакни кнопку</Button>
    </Container>
  );
}

export default LoginPage;
