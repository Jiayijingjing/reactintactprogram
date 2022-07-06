import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter,Route} from 'react-router-dom'
import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Route path='/register' component={Register}></Route>
      <Route path='/login' component={Login}></Route>
      <Route  component={Main}></Route>
    </HashRouter>
    <App />
    
  </React.StrictMode>
);


