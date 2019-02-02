import React from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyC3SMAXhMvf4jaDn1b4Txdagz0C2-iRNtQ",
    authDomain: "storageshare-d45aa.firebaseapp.com",
    databaseURL: "https://storageshare-d45aa.firebaseio.com",
    projectId: "storageshare-d45aa",
    storageBucket: "storageshare-d45aa.appspot.com",
}

import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

signUpUser = (email, password) => {
    try {
        if (password.length < 6) {
            alert("Please enter atleast 6 characters")
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
        console.log(error.toString())
    }
}

loginUser = (email, password) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) { console.log(user) })
    } catch (error) {
        console.log(error.toString())
    }
}
