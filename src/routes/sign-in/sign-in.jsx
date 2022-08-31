import {
    auth,
    signInWithGooglePopup,
    userDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../utils/firebase"
import {useEffect} from 'react'
import {getRedirectResult} from 'firebase/auth'
import SignUpForm from "../../components/sign-up-form/sign-up-form"

const SignIn=()=>{
   
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
    
    const logGoogleUser= async ()=>{

        const {user}=await signInWithGooglePopup()
        userDocumentFromAuth(user)
    }

    return(
    <div>
 
    <button onClick={logGoogleUser}>Sign in with google</button>
    {/* <button onClick={signInWithGoogleRedirect}>Sign in with google redirect</button> */}
    <SignUpForm />
    </div>
    )


}

export default SignIn;