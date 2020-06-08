import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyB41Bh4n5i4rwd0KI92oCuibe9j4OckMTU",
    authDomain: "tenedores-391ba.firebaseapp.com",
    databaseURL: "https://tenedores-391ba.firebaseio.com",
    projectId: "tenedores-391ba",
    storageBucket: "tenedores-391ba.appspot.com",
    messagingSenderId: "1030808585954",
    appId: "1:1030808585954:web:a3a70493d28cab498bc0bb",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);