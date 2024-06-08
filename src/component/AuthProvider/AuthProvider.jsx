import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";


export const AuthContext = createContext(null);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    // console.log(children);
    // const [homeContext, setHomeContext] = useState('user kew nai')

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
    }
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
    }

    const authInfo = {
        registerUser,
        signIn
    }



    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;