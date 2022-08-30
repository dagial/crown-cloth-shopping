import {signInWithGooglePopup,userDocumentFormAuth} from "../../../utils/firebase"

const SignIn=()=>{
    const logGoogleUser= async ()=>{

        const {user}=await signInWithGooglePopup()
        userDocumentFormAuth(user)
    }
    return(
    <div>
    <h1>Sign IN</h1>
    <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
    )


}

export default SignIn;