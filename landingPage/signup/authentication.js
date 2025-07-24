
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import {getAuth,createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";


 
  const firebaseConfig = {
    apiKey: "AIzaSyBadGKdRxZCn-GIlGvdtG6X-5k8p4phYk8",
    authDomain: "kenyan-pride-a3fc5.firebaseapp.com",
    projectId: "kenyan-pride-a3fc5",
    storageBucket: "kenyan-pride-a3fc5.firebasestorage.app",
    messagingSenderId: "351097195915",
    appId: "1:351097195915:web:bca812582812584410738e",
    measurementId: "G-NF107Q91PP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics();
  const auth = getAuth();

//submit button
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  // Now get the values here, when button is clicked.
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

 createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account created!");
      window.location.href = "index.html";
    })
   .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
})

