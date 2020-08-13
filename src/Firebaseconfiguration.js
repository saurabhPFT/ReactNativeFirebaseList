
  // Your web app's Firebase configuration
import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyC4_eGQ1W6DzHoual2c0-QWP792IY9OQVE",
    authDomain: "fir-project-7eaf5.firebaseapp.com",
    databaseURL: "https://fir-project-7eaf5.firebaseio.com",
    projectId: "fir-project-7eaf5",
    storageBucket: "fir-project-7eaf5.appspot.com",
    messagingSenderId: "871513965036",
    appId: "1:871513965036:web:b6a443b6c711c2d385c0c9",
    measurementId: "G-S8BZ3Q5RD5"	
};
let app = Firebase.initializeApp(config);
export const db = app.database();
