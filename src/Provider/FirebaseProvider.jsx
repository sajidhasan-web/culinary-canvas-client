import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider,  GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";




export const AuthContext = createContext(null);
const auth = getAuth(app)

// social login auth

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    


    // create user with email and password
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign in with email and password
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const updateProfileInfo =(displayName, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser ,{displayName, photoURL})
    }

    // observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
             if (currentUser) {
                setLoading(false)
                 setUser(currentUser);
             }
           });
           return () => {
             unSubscribe();
           };
     },[])

    const logOut =()=>{
        setUser(null);
        return signOut(auth)
    }
    
    
    const  userInfo = {
        user,
        createUser,
        logOut,
        loginUser,
        logInWithGoogle,
        logInWithGithub,
        updateProfileInfo,
        loading
    }




    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default FirebaseProvider;