import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext()

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading,setLoading] = useState(true)
    


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = async() =>{
       const {data} = await axios.get("http://localhost:5000/logOut", {withCredentials:true})
       console.log(data)

        setLoading(true)
        return signOut(auth)
    }
    const loginWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user=>{
            setLoading(false)
            setUser(user)
        })

        return ()=>{
            unSubscribe()
        }
    },[])

    const profileUpdate = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };

    const info = {
      user,
      setUser,
      createUser,
      profileUpdate,
      login,
      logout,
      loginWithGoogle,
      loading,
    };
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;