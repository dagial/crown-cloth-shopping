import React from 'react'
import Home from './routes/home/home';
import Authenticate from './routes/authentication/authentication';
import Navigation from './routes/navigation/navigation';
import {Routes,Route} from "react-router-dom";
import Shop from './routes/shop/shop';
import CheckOut from './routes/check-out/checkout';



const App=() => {
 

  return (
    <Routes>
      
    <Route path='/' element={<Navigation/>}>
    
      <Route index={true} element={<Home/>} />
      <Route path="shop/*" element={<Shop/>}/>
      <Route path="checkout" element={<CheckOut/>}/> 
      
      <Route path="auth" element={<Authenticate/>}/>

    </Route>

    </Routes>
    
    )

  }

export default App;
