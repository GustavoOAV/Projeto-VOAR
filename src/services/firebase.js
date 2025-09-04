
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAc7HVX0adtnxliyZSpUpPKtFPPwaFPHQ",
  authDomain: "voar-comentarios.firebaseapp.com",
  projectId: "voar-comentarios",
  storageBucket: "voar-comentarios.firebasestorage.app",
  messagingSenderId: "235691324191",
  appId: "1:235691324191:web:14b25c3f01a5abfb29f62a",
  measurementId: "G-Y8JTSZE6KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 

export { analytics, db };
export default app;