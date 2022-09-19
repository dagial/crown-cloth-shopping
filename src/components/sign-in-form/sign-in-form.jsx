import {useState,} from 'react'
import {
        userDocumentFromAuth,signInWithGooglePopup,
        SignInUserWithEmailAndPassword} from "../../utils/firebase"
import FormInput from '../Form/form'
import Button,{BUTTON_TYPES} from "../button/button"
import "./sign-in-form.scss"
import {UserContext} from "../../context/user.context"

const defaultFormFields={
    email:'',
    password:'',
  
}


const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields)
    const {email,password}=formFields 
    
    const logGoogleUser= async ()=>{
        const {user}=await signInWithGooglePopup()
        userDocumentFromAuth(user)
    }
    const onchangeHandler=(event)=>{
        const {name,value}=event.target
        setFormFields({...formFields,[name]:value})

    }
    const clearSignupForm=()=>{
        setFormFields(defaultFormFields)
    }
    const submitHandler=async (event)=>{
        event.preventDefault()
        const {email,password}=formFields
       
            try{
            const {user}= await SignInUserWithEmailAndPassword(email,password)
        clearSignupForm()
    }
    catch(error){
        if(error.code === "auth/wrong-password"){
            alert("User Credential Does Not Match")
        }
        else if(error.code==="auth/user-not-found"){
            alert("There is No Account with the given Email")
        }
        console.log("error occored", error.message)
    }

        
       
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an Account?</h2>
            <span>Sign In with email and password</span>
        <form onSubmit={submitHandler} id="signin-form">
    
         <FormInput label="Email" type="email" onChange={onchangeHandler} name="email" value={email} required/>

         <FormInput label="Password" type="password" onChange={onchangeHandler} name="password" value={password} required/>
      <div className="buttons-container">
        <Button buttonType={BUTTON_TYPES.base} type='submit'>Sign In</Button>
        <Button type='button' buttonType={BUTTON_TYPES.google} onClick={logGoogleUser}>Google Sign In</Button>
        </div>
        </form>

        
        </div>
    
    )


}

export default SignInForm