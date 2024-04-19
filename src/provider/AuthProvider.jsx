import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.init";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
     

    //create user with email & pass;
    const createUser = (email, password) => {
        setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
    }

    //get current user;
    const currentUser = () => {
        return onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser)
        })
    }

    //login with email and password;
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        currentUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;