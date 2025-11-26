"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/app/firebase/firebase.config";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    Cookies.remove("authToken"); //remove cookie
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const token = await currentUser.getIdToken();
        Cookies.set("authToken", token, { expires: 7 });
      } else {
        Cookies.remove("authToken");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    registerUser,
    signInWithGoogle,
    signInUser,
    signOutUser,
    user,
    loading,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
