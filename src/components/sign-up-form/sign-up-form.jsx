import {useState} from 'react'
import {createAuthUserWithEmailAndPassword,
        userDocumentFromAuth} from "../../utils/firebase"
import FormInput from '../Form/form'
import Button from "../button/button"

const deafultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmpassword:''
}


const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(deafultFormFields)
    const {displayName,email,password,confirmPassword}=formFields
    const onchangeHandler=(event)=>{
        const {name,value}=event.target
        setFormFields({...formFields,[name]:value})

    }
    const clearSignupForm=()=>{
        const form=document.getElementById("signup-form")
        form.reset()
    }
    const submitHandler=async (event)=>{
        event.preventDefault()
        const {displayName,email,password,confirmPassword}=formFields
        const display=displayName.value
        if(email && password.value == confirmPassword.value){
            try{
        const {user}=await createAuthUserWithEmailAndPassword(email,password)
        console.log(user)

        await userDocumentFromAuth(user,{displayName});
        
        clearSignupForm()
    }
    catch(error){
        console.log("error occored ", error.message)
    }

        }
        else{
            console.log("the passwords does not match")
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an Account?</h2>
            <span>Sign up with email and password</span>
        <form onSubmit={submitHandler} id="signup-form">
        <FormInput label="DisplayName" onChange={onchangeHandler} type="text" name="displayName" value={displayName} required/>
        {/* <label htmlFor="DisplayName" >DisplayName</label>
        <input type="text" required name='displayName'/> */}
         <FormInput label="Email" type="email" onChange={onchangeHandler} name="email" value={email} required/>
        {/* <label htmlFor="Email" >Email</label>
        <input type="email" required name='email'/> */}
         <FormInput label="Password" type="password" onChange={onchangeHandler} name="password" value={password} required/>
        {/* <label htmlFor="password" >Password</label>
        <input type="password" required name="password" /> */}
         <FormInput label="Confirm Password" type="password" onChange={onchangeHandler} name="confirmPassword" value={confirmPassword} required/>
        {/* <label htmlFor="confirm Passowrd">Confirm Password</label>
        <input type="password" required name="confirmPassword" /> */}
        <Button buttonType="" type='submit'>Sign In</Button>
        </form>


        </div>
    
    )


}

export default SignUpForm