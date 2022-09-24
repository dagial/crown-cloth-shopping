import React from 'react'
import {useEffect} from 'react'
import {Routes,Route} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener ,signOutUser,userDocumentFromAuth} from './utils/firebase';
import { setCurrentUser } from './store/user/user.action';
import Home from './routes/home/home';
import Authenticate from './routes/authentication/authentication';
import Navigation from './routes/navigation/navigation';
import Shop from './routes/shop/shop';
import CheckOut from './routes/check-out/checkout';

const App=() => {
 const dispatch=useDispatch()


  useEffect(()=>{
    const unsubscribe=onAuthStateChangedListener((user)=>{
        if(user){
            userDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user))
 
    })
    return unsubscribe        
    },[])

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
