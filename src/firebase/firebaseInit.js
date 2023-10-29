import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKFDKlAIn1Wo_b0lUFJyrh1G3i9hpKa3U",
    authDomain: "mywayblog-b5e07.firebaseapp.com",
    projectId: "mywayblog-b5e07",
    storageBucket: "mywayblog-b5e07.appspot.com",
    messagingSenderId: "942219139256",
    appId: "1:942219139256:web:95bf9d7e6132476e96fc4d"
};


const firebaseApp = firebase.initializeApp(firebaseConfig); 
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();