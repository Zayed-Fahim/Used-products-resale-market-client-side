import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.config';

const AuthContexts = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUser
    }
    return (
        <div>
            <AuthContexts.Provider value={authInfo}>
                {children}
            </AuthContexts.Provider>
        </div>
    );
};

export default AuthProvider;