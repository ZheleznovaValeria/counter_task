import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./login.js";
import Counter from "./counter"; 

function App() {
  return (
    <BrowserRouter>
        <Route path='/login' component={LoginPage} />
        <Route path='/counter' component={Counter} />
    </BrowserRouter>
  );
}

export default App;
