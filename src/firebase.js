import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: `${process.env.API_KEY}`,
    authDomain: "todoist-f0676.firebaseapp.com",
    databaseURL: "https://todoist-f0676.firebaseio.com",
    projectId: "todoist-f0676",
    storageBucket: "todoist-f0676.appspot.com",
    messagingSenderId: "965290499113",
    appId: `${process.env.APP_ID}`,
    measurementId: "G-E0DJZJK0VW"
});

export { firebaseConfig as firebase }; 