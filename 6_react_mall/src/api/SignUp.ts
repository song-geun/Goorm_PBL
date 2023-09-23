import React from 'react'
import { app } from './firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

const auth = getAuth(app);
const User : any = useSelector((state:RootState) => state.User);
createUserWithEmailAndPassword(auth, User.email, User.password)
    .then((userCredential : any) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

signInWithEmailAndPassword(auth, User.email, User.password)
    .then((userCredential : any) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });