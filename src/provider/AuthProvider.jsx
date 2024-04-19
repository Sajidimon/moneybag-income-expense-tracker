import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.init";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();
     

 

    //create user with email & pass;
    const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        user,
        loading,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;