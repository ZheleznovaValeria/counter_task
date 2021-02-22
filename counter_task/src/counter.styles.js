import {Link} from "react-router-dom"
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
const AllPositions = styled.div`
    margin-top: 350px; 
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
`

const LoginButton = styled(Link)`
    height: 150px; 
    width: 600px; 
    background: linear-gradient(45deg, #EECFBA, #C5DDE8); 
    text-align: center; 
    outline: none; 
    border: none; 
    border-radius: 50px; 
    font-size: 50px; 
    margin-top: 50px;
    text-decoration: none; 
    padding-top: 70px;

    :link{
        color: black; 
    }

    :visited{
        color: black; 
    }
`


export {CounterButton, Positions, CounterStyle, AllPositions, LoginButton}