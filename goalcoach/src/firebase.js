import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBztESqiYE6I2yiu9wVqkujMbeGnqZNLkA",
    authDomain: "goalcoach-70f5b.firebaseapp.com",
    databaseURL: "https://goalcoach-70f5b.firebaseio.com",
    projectId: "goalcoach-70f5b",
    storageBucket: "",
    messagingSenderId: "946134936449"

};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
