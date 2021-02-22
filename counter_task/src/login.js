import React from 'react';
import {LoginButton, AllPositions, Hello} from './login.styles'; 

function LoginPage() {
    return(
        <AllPositions>
            <Hello>Heyo wassup, Yarik? I'm fine too, spasibo cho sprosil:) I hope, that I've done this correctly, inache ya sovershu suicide:)</Hello>
            <LoginButton to="/counter">Жмакни кнопку</LoginButton>
        </AllPositions>
        
    )
}

export default LoginPage;