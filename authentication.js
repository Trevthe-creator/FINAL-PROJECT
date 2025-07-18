// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBllVP6mC8iPq9f7MMSpuPPr5RelBSCfXo",
  authDomain: "kenyan-pride-86ecc.firebaseapp.com",
  projectId: "kenyan-pride-86ecc",
  storageBucket: "kenyan-pride-86ecc.firebasestorage.app",
  messagingSenderId: "719876454761",
  appId: "1:719876454761:web:f5f54e82b6dcf1990b25f8",
  measurementId: "G-P7TE17F95D"
};

 // Normally you'd validate credentials here
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (email && password) {
        // Optional: save info to local storage or session
        localStorage.setItem("userEmail", email);

        // Redirect to the profilePage.html
        window.location.href = "profilePage.html";
      } else {
        alert("Please enter email and password.");
      }
    });
  }
});

