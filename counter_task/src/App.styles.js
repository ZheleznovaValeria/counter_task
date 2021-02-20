import styled from "styled-components"

const CounterButton = styled.button`
    height: 200px; 
    width: 200px; 
    background: #ffC0CD; 
    text-align: center;
    outline: none;
    border: none;
    border-radius: 20px; 
    font-size: 40px; 
    margin-right: 30px; 
    margin-left: 30px; 
`
const Positions = styled.div`
    margin-top: 350px; 
    display: flex; 
    flex-direction: row; 
    justify-content: center;
    align-items: center; 
`
const CounterStyle = styled.p`
    margin-right: 30px; 
    margin-left: 30px; 
    font-size: 40px; 
    padding: 20px; 
`



export {CounterButton, Positions, CounterStyle}