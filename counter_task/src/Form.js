import React, { useState, useEffect } from 'react';
import { Forms, Input, Head, Button, Error } from './Form.styles';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFilled, setEmailFilled] = useState(false);
  const [passwordFilled, setPasswordFilled] = useState(false);
  const [emailError, setEmailError] = useState('Email cannot be empty');
  const [passwordError, setPasswordError] = useState('Password cannot be empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email should contain "@"');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!e.target.value.match(re)) {
      setPasswordError(
        'Password must be between 8 and 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
      );
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailFilled(true);
        break;
      case 'password':
        setPasswordFilled(true);
        break;
      default:
    }
  };

  const alertHandler = () => {
    alert('Email: ' + email + ' Password: ' + password);
  };

  return (
    <div>
      <Forms>
        <Head>Sign Up</Head>
        <Input
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => emailHandler(e)}
          type="email"
          name="email"
          placeholder="Enter your Email"
          required
          value={email}
        />
        {emailFilled && emailError && <Error>{emailError}</Error>}
        <Input
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => passwordHandler(e)}
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          value={password}
        />
        {passwordFilled && passwordError && <Error>{passwordError}</Error>}
        <Button disabled={!formValid} type="submit" onClick={alertHandler}>
          Sign Up!
        </Button>
      </Forms>
    </div>
  );
}

export default Form;
