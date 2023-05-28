import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";

const auth_exe = React.createContext();

export function useAuth() {
  return useContext(auth_exe);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
  };

  return (
    <auth_exe.Provider value={value}>{!loading && children}</auth_exe.Provider>
  );
}
