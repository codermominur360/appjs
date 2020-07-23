import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyByM7WyL8xwDCvCydUv1YXJTsvbkkygJRE",
    authDomain: "apps-fdac5.firebaseapp.com",
    databaseURL: "https://apps-fdac5.firebaseio.com",
    projectId: "apps-fdac5",
    storageBucket: "apps-fdac5.appspot.com",
    messagingSenderId: "485948700836",
    appId: "1:485948700836:web:f6b25c7764449f421dce31",
    measurementId: "G-46GE2EC888"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase