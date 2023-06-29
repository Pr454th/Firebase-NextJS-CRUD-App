"use client";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, provider } from "@/config/firebase";
import styles from "./auth.module.css";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = () => {
    console.log(auth?.currentUser?.email);
    console.log(auth?.currentUser?.photoURL);
  };

  const createUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
  };

  const SignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      console.log(error.email);
    }
    setEmail("");
    setPassword("");
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const SignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
    console.log(auth?.currentUser?.email);
  };

  return (
    <div className={styles.auth}>
      <div className={styles.create}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={createUser}>
          Create user
        </button>
      </div>
      <div className={styles.login}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={SignIn}>
          Sign In
        </button>
        <button type="submit" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        <button type="submit" onClick={SignOut}>
          Sign Out
        </button>
        <button type="submit" onClick={currentUser}>
          Current User
        </button>
      </div>
    </div>
  );
}
