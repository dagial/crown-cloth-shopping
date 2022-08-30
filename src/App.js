import React from 'react'
import Home from './components/routes/home/home';
import SignIn from './components/routes/sign-in/sign-in';
import Navigation from './components/routes/navigation/navigation';
import {Routes,Route} from "react-router-dom";


const App=() => {
 

  return (
    <Routes>
    <Route path='/' element={<Navigation/>}>
    
      <Route index={true} element={<Home/>} />
      <Route path="sign-in" element={<SignIn/>}/>




    </Route>


    </Routes>
    
    )

  }

export default App;
