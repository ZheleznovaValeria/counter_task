import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CounterButton = styled.button`
  height: 200px;
  width: 200px;
  background: #ffc0cd;
  text-align: center;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 40px;
  margin-right: 30px;
  margin-left: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const CounterStyle = styled.p`
  margin-right: 30px;
  margin-left: 30px;
  font-size: 40px;
  padding: 20px;
`;
const Container = styled.div`
  margin-top: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  height: 150px;
  width: 600px;
  background: linear-gradient(45deg, #eecfba, #c5dde8);
  text-align: center;
  outline: none;
  border: none;
  border-radius: 50px;
  font-size: 50px;
  margin-top: 50px;
  text-decoration: none;
  padding-top: 70px;

  :link {
    color: black;
  }

  :visited {
    color: black;
  }
`;

export { CounterButton, Wrapper, CounterStyle, Container, Button };
