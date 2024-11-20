import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()


    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        return signOut(auth)
    }

    

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user=>{
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
      createUser,
      profileUpdate,
      login,
      logout,
    };
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;