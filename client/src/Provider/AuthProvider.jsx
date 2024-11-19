import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()


    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const info = {
      user,
      createUser,
    };
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;