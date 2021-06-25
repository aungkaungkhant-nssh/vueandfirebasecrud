import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyB2AV2gD641k6ZWkrNUs7lz5lWF324pLFA",
    authDomain: "vuefirebasecrud-e67ff.firebaseapp.com",
    projectId: "vuefirebasecrud-e67ff",
    storageBucket: "vuefirebasecrud-e67ff.appspot.com",
    messagingSenderId: "570928984060",
    appId: "1:570928984060:web:eb6fb112e536e3dc460c79"
  };
firebase.initializeApp(firebaseConfig);
let db=firebase.firestore();
export{db};
  