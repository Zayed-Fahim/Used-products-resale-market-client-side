import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    };
    
    const logOut = () => {
        return signOut(auth);
    }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createUser) => {
      console.log("user observing");
      setUser(createUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    user,
    signIn,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
