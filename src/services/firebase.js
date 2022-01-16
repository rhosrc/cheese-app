import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBffnzRzLd08EUS4TTtmgoAV_577iGGV7A",
    authDomain: "cheese-app-project.firebaseapp.com",
    projectId: "cheese-app-project",
    storageBucket: "cheese-app-project.appspot.com",
    messagingSenderId: "8169499390",
    appId: "1:8169499390:web:59f9c7bc65647c4a5913af"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  function login () {
    auth.signInWithPopup(provider);
    // provider.setCustomParameters({
    //     prompt: "select_account",
    // });
     // proceed to send multiple service providers
    }

// w/r/t line 19, you can make provider an object with keys, and reference them in your various functions.

  function logout () {
      return auth.signOut();
  }

  export { auth, login, logout } // NAMED EXPORT importing specific items from a module.
