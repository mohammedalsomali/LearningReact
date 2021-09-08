import react from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  //your config
  apiKey: "AIzaSyBPfec-2EUFl1F6uHNsq6c7gd_js8Mgw7I",
  authDomain: "chatapp-deee3.firebaseapp.com",
  projectId: "chatapp-deee3",
  storageBucket: "chatapp-deee3.appspot.com",
  messagingSenderId: "749671813134",
  appId: "1:749671813134:web:678ab0c09ea152b68a2c5f",
  measurementId: "G-5EYGJLLGY3"
})

const [user] = useAuthState(auth);


import ToDoList from "./ToDoList";

function App() {
  return (
    <div className='App'>
      <header>


      </header>

    <section> 
      {user ? <ChatRoom /> : <SingIn/> }
    </section>
    </div>
  )
}


function SingIn() {
  const singInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick= {singInWithGoogle }> sing in with Google </button>
  )
}


function SignOut() {
  return auth.currentUser && (
    <button onClick= { () => auth.signOut() }> Sign out</button>
  )
}
export default App;
