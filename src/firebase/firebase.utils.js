import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCjRS_gilCRsqertuMYcOqW4gn6Qzpm2j0",
  authDomain: "crwn-db-b6326.firebaseapp.com",
  databaseURL: "https://crwn-db-b6326.firebaseio.com",
  projectId: "crwn-db-b6326",
  storageBucket: "crwn-db-b6326.appspot.com",
  messagingSenderId: "38634800274",
  appId: "1:38634800274:web:9565eb5b3b326a2a4dd24b",
  measurementId: "G-6286GNH92T"
};

export const createUserProfileDocument= async (userAuth, additionalData)=>{
if(!userAuth) return;

const userRef= firestore.doc(`users/${userAuth.uid}`);
const snapShot=await userRef.get();
if(!snapShot.exists){
  const {displayName, email}=userAuth;
  const createdAt=new Date();

  try{
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })

  }catch(error){
      console.log('error creating message', error.message);
  }
}
return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;