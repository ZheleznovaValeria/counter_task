import {Link} from "react-router-dom"
import styled from "styled-components"

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

const Hello = styled.p`
    font-size: 30px; 
    
`

export {AllPositions, LoginButton, Hello}