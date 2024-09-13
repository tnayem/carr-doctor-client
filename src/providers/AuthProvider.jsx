import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)
    // Create User With Email and Password 
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // Log in With Email and password 
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // Observer 
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log("Current User: ",currentUser);
            setLoading(false)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])
    const authInfo = {
        user,
        setUser,
        createUser,
        loading,
        setLoading,
        logIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;