import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, provider, db, storage };

//note:rules
//for making the user to perform cud operation only if he is signed in
// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//     		allow write, update, delete:if request.auth!=null && request.auth.uid==request.resource.data.userId;
//         allow read:if true;
//       // allow read, write: if true; //anyone can read or write
//     }
//   }
// }

// allow create :if request.auth!=null && request.auth.uid==request.resource.data.userId;
// allow update, delete :if request.auth!=null;
