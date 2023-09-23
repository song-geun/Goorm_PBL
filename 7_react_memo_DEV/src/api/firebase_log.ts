import { signOut, getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { app } from "./firebase";
import { AppDispatch } from "./store";
import { useDispatch } from "react-redux";
import { setUser } from "./user";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth(app);

export const login = () => {
    signInWithRedirect(auth, provider);
}
export const logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}