import {initializeApp} from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword} from "firebase/auth"

  import {
getFirestore,
doc,
getDoc,
setDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDbvMGc05CYBonJ1RyLaeixGRM2DOtDOVE",
    authDomain: "crown-clothing-db-9694d.firebaseapp.com",
    projectId: "crown-clothing-db-9694d",
    storageBucket: "crown-clothing-db-9694d.appspot.com",
    messagingSenderId: "823301784544",
    appId: "1:823301784544:web:a90f0cf63043881065a185"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider()
  
  provider.setCustomParameters({
    prompt:"select_account"
  })
  
  export const auth=getAuth();
  export const signInWithGooglePopup= ()=> signInWithPopup(auth,provider);

  export const signInWithGoogleRedirect= ()=> signInWithRedirect(auth,provider)

  export const db=getFirestore();
  export const userDocumentFromAuth=async (userAuth,additionalInfo)=>{

    const userDocRef= doc(db,'user',userAuth.uid)
    const userSnapshot= await getDoc(userDocRef);
    console.log("userDocRef")
    console.log({userDocRef})
    
    if(!userSnapshot.exists()){
        const {displayName, email}=userAuth
        const createdAt= new Date()
    try{
        
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInfo

        })

    }
    catch(error){

        console.log("error occored",error.message)
    }

    }
    return userDocRef
  }
 
  export const createAuthUserWithEmailAndPassword=async (email,password)=>{
    if(!email || !password)return;
    return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const SignInUserWithEmailAndPassword=async (email,password)=>{
    if(!email || !password)return;
    return await signInWithEmailAndPassword(auth,email,password)
  }