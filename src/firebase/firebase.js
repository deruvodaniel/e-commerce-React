import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB1MNAMtvpcEReLO5i9unywNgCPgOhMoyE",
  authDomain: "music-store-react-ecommerce.firebaseapp.com",
  projectId: "music-store-react-ecommerce",
  storageBucket: "music-store-react-ecommerce.appspot.com",
  messagingSenderId: "722060879264",
  appId: "1:722060879264:web:8d1b0b501a86c9da1a30c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);