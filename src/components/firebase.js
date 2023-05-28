import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDu8ructemTmPG3kN5qhpBPVwcwLUd1Gl4",
  authDomain: "webtech-part-a.firebaseapp.com",
  projectId: "webtech-part-a",
  storageBucket: "webtech-part-a.appspot.com",
  messagingSenderId: "154774657389",
  appId: "1:154774657389:web:5852d9f143212c676f6264",
});

export const auth = app.auth();
export default app;
