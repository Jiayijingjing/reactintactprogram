import React from 'react'

import {createRoot} from 'react-dom/client' 

import {HashRouter,Route,Routes} from 'react-router-dom'

import Register from './containers/register/register'

import Login from './containers/login/login'

import Main from './containers/main/main'


const container=document.getElementById('root');
const root=createRoot(container);
root.render( <HashRouter>
    <Routes>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         {/* 此处Main的path不能省略 */}
         <Route path='/' element={<Main/>}></Route>
     </Routes>
 </HashRouter>);