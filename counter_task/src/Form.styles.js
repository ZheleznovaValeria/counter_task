import styled from 'styled-components';
// import { Alert } from 'react-alert';

const Forms = styled.form`
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  height: 20px;
  width: 300px;
  border-radius: 10px;
  border: 2px solid #bd94ca;
  padding: 20px 20px;
  margin-top: 30px;
  outline: none;
`;

const Head = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const Button = styled.button`
  margin-top: 30px;
  height: 100px;
  width: 350px;
  background: #bd94ca;
  color: white;
  outline: none;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  /* padding-top: 30px;
  padding-left: 100px; */
`;

const Error = styled.div`
  color: red;
  font-size: 15px;
  width: 300px;
  text-align: left;
`;

// const Allert = styled.div`
//   width: 300px;
//   height: 100p;
//   font-size: 20px;
//   background: linear-gradient(0deg, #92f1d5, #abf6bd);
// `;
export { Forms, Input, Head, Button, Error };
