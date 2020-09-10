import firebase from "firebase";

const firbaseApp = firebase.initializeApp({

 apiKey: "AIzaSyBZqGSWG-wI4otj1_3oqBixE7ixdmwgCCQ",
   authDomain: "shopoholic-a43c0.firebaseapp.com",
   databaseURL: "https://shopoholic-a43c0.firebaseio.com",
   projectId: "shopoholic-a43c0",
   storageBucket: "shopoholic-a43c0.appspot.com",
   messagingSenderId: "588255440093",
   appId: "1:588255440093:web:9483cff10b4a7c05c0bf34",
   measurementId: "G-FKKPJDKESH"
});


const db = firebase.firestore();
const auth = firebase.auth();

export {auth,firbaseApp,db};