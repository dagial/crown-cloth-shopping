import {initializeApp} from "firebase/app";
import {getAuth,signInWithRedirect,GoogleAuthProvider, signInWithPopup} from "firebase/auth"
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

  export const db=getFirestore();
  export const userDocumentFormAuth=async (userAuth)=>{
    const userDocRef= doc(db,'user',userAuth.uid)
    console.log(userDocRef)
    const userSnapshot= await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
    
    if(!userSnapshot.exists()){
        const {displayName, email}=userAuth
        const createdAt= new Date()
    try{
        
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
        })

    }
    catch(error){

        console.log("error occored")
    }

    }
    return userDocRef
  }
 