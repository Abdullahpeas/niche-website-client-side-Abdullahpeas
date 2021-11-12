import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    // const provider = new GoogleAuthProvider();


    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false)



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                const uid = user.uid;
            }
            else {

            }
            setIsLoading(false)
        });
    }, []);

    const handleLogout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false))
    };

    const handleUserRegister = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
            })
            .catch((error) => {
                console.log(error.message)
            });
        history.replace('/');

    };





    const handleUserLogin = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message)
            });
    };



    useEffect(() => {
        fetch(`https://desolate-chamber-46728.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])



    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://desolate-chamber-46728.herokuapp.com/users', {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        admin,
        handleLogout,
        handleUserRegister,
        handleUserLogin,
        isLoading,
        setIsLoading,

    }
};

export default useFirebase;