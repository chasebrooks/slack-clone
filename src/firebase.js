import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAaEz8fIVuWEuKEA-WtiYnDCmQOz0UAKjI",
    authDomain: "slack-clone-9a14f.firebaseapp.com",
    databaseURL: "https://slack-clone-9a14f.firebaseio.com",
    projectId: "slack-clone-9a14f",
    storageBucket: "slack-clone-9a14f.appspot.com",
    messagingSenderId: "374297536966",
    appId: "1:374297536966:web:5ec34a0877efeb9414eac7",
    measurementId: "G-7532DY7KJF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }; //implicit... import {db, auth} from './firebase
  export default db; //allows import db from './firebase'