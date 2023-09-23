import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AppDispatch, RootState} from '../api/store'
import {setinputPassword, setinputid, setUser, user_info} from "../api/user"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../api/firebase'
import { useNavigate } from 'react-router-dom'



const Sign = (e: any) => {
    useSelector((state : RootState) => state.User.inputid);
    const dispatch = useDispatch<AppDispatch>();
    const dis = useDispatch();
    const inputid = useSelector((state : RootState) => state.User.inputid);
    const inputpassword = useSelector((state : RootState) => state.User.inputpassword);
    let navigate = useNavigate();


    const auth = getAuth(app);
    const User: user_info = useSelector((state: RootState) => state.User);
    const signup : any = (auth : any, email : any, password : any) =>createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential: any) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    const login : any = (auth : any, email : any, password : any) => signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: any) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });





    const handleChange = (e : any) =>{
        if(e.target.id === 'id')
            dispatch(setinputid(e.target.value));
        else
            dispatch(setinputPassword(e.target.value));
    }
    const handleLog = (e : any) =>{
        const user : user_info = {id : inputid, password: inputpassword, inputid : "", inputpassword : ""};
        try{
            login(auth, user.id, user.password);
        }
        catch{
            console.log("영원한걸...");
        } 
        finally{ 
            dispatch(setUser(user));
            navigate("/");
        }
        
    }
    
    const handleSumit = (e : any) =>{
        const user : user_info = {id : inputid, password: inputpassword, inputid : "", inputpassword : ""};
        try{
            signup(auth, user.id, user.password);
        }
        catch{
            
        } 
        finally{ 
            
        }
    }

    return (
        <div>
            <input className="border-red-400 border-2" id="id" value={inputid} onChange={handleChange} />
            <input className="border-red-400 border-2" type="password" id="password" value={inputpassword} onChange={handleChange} />
            <button className="border-red-400 border-2" onClick={handleLog}>Log in</button>
            <button className="border-red-400 border-2" onClick={handleSumit}>Sign up</button> 
        </div>
    )
}

export default Sign;