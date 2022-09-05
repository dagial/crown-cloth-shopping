import {
    auth,
    signInWithGooglePopup,
    userDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../utils/firebase"
import {useEffect} from 'react'
import {getRedirectResult} from 'firebase/auth'
import SignUpForm from "../../components/sign-up-form/sign-up-form"
import SignInForm from "../../components/sign-in-form/sign-in-form"
import "./authentication.style.scss"

const Authenticate=()=>{
   
    useEffect( ()=>{
       const response= async()=>{
        const res = await getRedirectResult(auth);
        console.log(res)
        if (res){
            const {user}=res;
            
            userDocumentFromAuth(user)
        }
        }
       response()
},[])
    
    

    return(
    <div className="authentication-container">
 
    {/* <button onClick={signInWithGoogleRedirect}>Sign in with google redirect</button> */}
    <SignInForm/>
    <SignUpForm />
    
    </div>
    )


}

export default Authenticate;