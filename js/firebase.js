import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD4g-I8s92o1aPrIeJczBTMSji3GLQM7fg",
    authDomain: "shinhwabiz.firebaseapp.com",
    projectId: "shinhwabiz",
    storageBucket: "shinhwabiz.firebasestorage.app",
    messagingSenderId: "950799528847",
    appId: "1:950799528847:web:6d778b091876759140d1fa",
    measurementId: "G-XV40SBSRZY"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
