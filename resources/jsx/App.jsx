import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main.jsx';
import Header from './Components/Header.jsx';


ReactDOM.render((
    <BrowserRouter>
        <div>
            <Header />
            <Main />
        </div>
    </BrowserRouter>
  ), document.getElementById('dynamicContent'));
