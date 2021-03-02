import React from 'react';
import { Button, Container } from './login.styles';
import Form from './Form';

function LoginPage() {
  return (
    <Container>
      <Form />
      <Button to="/counter">Жмакни кнопку</Button>
    </Container>
  );
}

export default LoginPage;
