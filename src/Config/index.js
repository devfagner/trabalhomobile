import firebase from 'firebase/app';
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyB4ImhxWUUk3iG-KS5UNALmnIrK99GWDwE",
    authDomain: "trabalhomobile-68c5e.firebaseapp.com",
    projectId: "trabalhomobile-68c5e",
    storageBucket: "trabalhomobile-68c5e.appspot.com",
    messagingSenderId: "57813391751",
    appId: "1:57813391751:web:60e84e8d942249569ddb22"
  };
  // Initialize Firebase
if(firebase.apps.length  === 0){
  Firebase =  firebase.initializeApp(firebaseConfig);
}
export default Firebase;