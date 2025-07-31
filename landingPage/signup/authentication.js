import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase config
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
const auth = getAuth(app);

// Track form mode
let isLogin = true;

// Handle form submission
window.handleSubmit = async function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  clearError("email");
  clearError("password");

  if (!validateForm(email, password)) return;

  try {
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Welcome Back👋!");
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("🌟Congratulations Acc created!🌟");
    }
    window.location.href = "https://preview--kenyan-pride.lovable.app/";
  } catch (error) {
    const field = error.code.includes("email") ? "email" : "password";
    showError(field, error.message);
  }
};

// Validate form based on mode
function validateForm(email, password) {
  let isValid = true;

  if (!email) {
    showError("email", "Email is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError("email", "Enter a valid email address");
    isValid = false;
  }

  if (!password) {
    showError("password", "Password is required");
    isValid = false;
  } else if (!isLogin) {
    // Additional rules for signup
    if (password.length < 8) {
      showError("password", "Password must be at least 8 characters");
      isValid = false;
    }
    if (!/[0-9!@#$%^&*]/.test(password)) {
      showError("password", "Password must include a number or symbol");
      isValid = false;
    }
  }

  return isValid;
}

// Email regex
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Error display helpers
function clearError(field) {
  const el = document.getElementById(`${field}-error`);
  if (el) {
    el.textContent = "";
    el.style.display = "none";
  }
}

function showError(field, message) {
  const el = document.getElementById(`${field}-error`);
  if (el) {
    el.textContent = message;
    el.style.display = "block";
  }
}

// Toggle visibility of password
window.togglePassword = function () {
  const input = document.getElementById("password");
  const icon = document.getElementById("eye-icon");

  if (input.type === "password") {
    input.type = "text";
    icon.innerHTML = `<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                      <line x1="2" x2="22" y1="2" y2="22"/>`;
  } else {
    input.type = "password";
    icon.innerHTML = `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                      <circle cx="12" cy="12" r="3"/>`;
  }
};

// Handle tab switch
window.switchForm = function () {
  isLogin = !isLogin;
  updateFormUI();
};

window.switchToLogin = function () {
  isLogin = true;
  updateFormUI();
};

window.switchToSignup = function () {
  isLogin = false;
  updateFormUI();
};

// Update UI on toggle
function updateFormUI() {
  const title = document.getElementById("form-title");
  const subtitle = document.getElementById("form-subtitle");
  const submitText = document.getElementById("submit-text");
  const loginTab = document.getElementById("login-tab");
  const signupTab = document.getElementById("signup-tab");
  const passwordRequirements = document.getElementById("password-requirements");
  const footerText = document.getElementById("footer-text");

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  clearError("email");
  clearError("password");

  if (isLogin) {
    title.innerText = "Welcome Back";
    subtitle.innerText = "Sign in to your account";
    submitText.innerText = "Sign In";
    passwordRequirements.style.display = "none";
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    footerText.innerHTML = `Don't have an account? <button onclick="switchForm()">Sign up</button>`;
  } else {
    title.innerText = "Create Account";
    subtitle.innerText = "Sign up to get started";
    submitText.innerText = "Create Account";
    passwordRequirements.style.display = "block";
    loginTab.classList.remove("active");
    signupTab.classList.add("active");
    footerText.innerHTML = `Already have an account? <button onclick="switchForm()">Sign in</button>`;
  }
}

// Handle real-time password rules during signup
window.handlePasswordInput = function () {
  if (isLogin) return;

  const password = document.getElementById("password").value;
  const lengthRequirement = document.getElementById("length-requirement");
  const symbolRequirement = document.getElementById("symbol-requirement");

  lengthRequirement.className = password.length >= 8 ? "valid" : "";
  symbolRequirement.className = /[0-9!@#$%^&*]/.test(password) ? "valid" : "";
};
