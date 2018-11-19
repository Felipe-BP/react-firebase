import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDR50JgCp7gAWMwtYcNexbt244A-4zyhOY",
    authDomain: "portifolio-8d669.firebaseapp.com",
    databaseURL: "https://portifolio-8d669.firebaseio.com",
    projectId: "portifolio-8d669",
    storageBucket: "",
    messagingSenderId: "349264243693"
};

const fire = firebase.initializeApp(config);
export default fire;