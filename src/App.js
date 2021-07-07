import './App.css';

// Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';

// Initialize firebase with variables config
firebase.initializeApp({
  apiKey: "AIzaSyAPEamteO34YBLKVqvs9Yefw5dXJE4Lfbs",
  authDomain: "chatmagic-e9230.firebaseapp.com",
  projectId: "chatmagic-e9230",
  storageBucket: "chatmagic-e9230.appspot.com",
  messagingSenderId: "692862028402",
  appId: "1:692862028402:web:73a92227e09cd9b0e350eb",
  measurementId: "G-E2KB99D24S"
})

// Initialize Authentication
const auth = firebase.auth();
// Initialize Firestore
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>MAGIC CHAT 💫✨🌟🍀</h1>
        <SignOut auth={auth}/>
      </header>
      <section>
        {user ? <ChatRoom auth={auth} firestore={firestore} firebase={firebase}/> : <SignIn auth={auth} firebase={firebase}/> }
      </section>
    </div>
  );
}

export default App;
