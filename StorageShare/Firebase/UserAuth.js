import React from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyC3SMAXhMvf4jaDn1b4Txdagz0C2-iRNtQ",
    authDomain: "storageshare-d45aa.firebaseapp.com",
    databaseURL: "https://storageshare-d45aa.firebaseio.com",
    projectId: "storageshare-d45aa",
    storageBucket: "storageshare-d45aa.appspot.com",
}

firebase.initializeApp(firebaseConfig);

export default class UserAuth extends React.Component {

    constructor(props) {
        super(props)

        this.state = ({
            email: '',
            password: ''
        })
    }
    
    signUpUser = (email, password) => {

        try {
            if (this.state.password.length < 6) {
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
}