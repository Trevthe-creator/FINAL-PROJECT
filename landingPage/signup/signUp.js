function switchToSignup() {
  document.getElementById("login-tab").classList.remove("active");
  document.getElementById("signup-tab").classList.add("active");
  document.getElementById("form-title").innerText = "Create Account";
  document.getElementById("form-subtitle").innerText = "Sign up to get started";
  document.getElementById("submit-text").innerText = "Sign Up";
  document.getElementById("footer-text").innerHTML =
    'Already have an account? <button type="button" onclick="switchForm()" id="footer-button">Log in</button>';
}

function switchToLogin() {
  document.getElementById("signup-tab").classList.remove("active");
  document.getElementById("login-tab").classList.add("active");
  document.getElementById("form-title").innerText = "Welcome Back";
  document.getElementById("form-subtitle").innerText = "Sign in to your account";
  document.getElementById("submit-text").innerText = "Sign In";
  document.getElementById("footer-text").innerHTML =
    "Don't have an account? <button type=\"button\" onclick=\"switchForm()\" id=\"footer-button\">Sign up</button>";
}

// Global state
        let isLogin = true;
        let isLoading = false;

        // DOM elements
        const formTitle = document.getElementById('form-title');
        const formSubtitle = document.getElementById('form-subtitle');
        const loginTab = document.getElementById('login-tab');
        const signupTab = document.getElementById('signup-tab');
        const passwordField = document.getElementById('password');
        const passwordRequirements = document.getElementById('password-requirements');
        const lengthRequirement = document.getElementById('length-requirement');
        const symbolRequirement = document.getElementById('symbol-requirement');
        const submitButton = document.getElementById('submit-button');
        const submitText = document.getElementById('submit-text');
        const footerText = document.getElementById('footer-text');
        const footerButton = document.getElementById('footer-button');

        // Password validation rules
        function validatePassword(password) {
            const errors = [];
            if (password.length < 8) {
                errors.push('Minimum 8 characters required');
            }
            if (!/(?=.*[0-9!@#$%^&*(),.?":{}|<>])/.test(password)) {
                errors.push('At least one number or symbol required');
            }
            return errors;
        }

        // Email validation
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Toggle password visibility
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const eyeIcon = document.getElementById('eye-icon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.innerHTML = `
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                    <line x1="2" x2="22" y1="2" y2="22"/>
                `;
            } else {
                passwordInput.type = 'password';
                eyeIcon.innerHTML = `
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                    <circle cx="12" cy="12" r="3"/>
                `;
            }
        }

        // Handle password input for real-time validation
        function handlePasswordInput() {
            const password = passwordField.value;
            clearError('password');

            if (!isLogin) {
                // Update password requirements visual feedback
                const hasMinLength = password.length >= 8;
                const hasSymbolOrNumber = /(?=.*[0-9!@#$%^&*(),.?":{}|<>])/.test(password);

                lengthRequirement.className = hasMinLength ? 'valid' : '';
                symbolRequirement.className = hasSymbolOrNumber ? 'valid' : '';
            }
        }

        // Clear error messages
        function clearError(field) {
            const errorElement = document.getElementById(`${field}-error`);
            if (errorElement) {
                errorElement.style.display = 'none';
                errorElement.textContent = '';
            }
        }

        // Show error messages
        function showError(field, message) {
            const errorElement = document.getElementById(`${field}-error`);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
        }

        // Form validation
        function validateForm() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            let isValid = true;

            // Clear previous errors
            clearError('email');
            clearError('password');

            // Email validation
            if (!email) {
                showError('email', 'Email is required');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }

            // Password validation
            if (!password) {
                showError('password', 'Password is required');
                isValid = false;
            } else {
                const passwordErrors = validatePassword(password);
                if (passwordErrors.length > 0) {
                    showError('password', passwordErrors[0]);
                    isValid = false;
                }
            }

            return isValid;
        }

        // Handle form submission
        function handleSubmit(event) {
  event.preventDefault();

  // Validate fields, etc.
  // Example:
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Do any validation you need...
  if (email && password) {
    // Redirect to another page:
    window.location.href = 'index.html'; 
  } else {
    alert('Please fill in all fields.');
  }
}


        // Switch to login form
        function switchToLogin() {
            if (isLogin) return;
            
            isLogin = true;
            updateFormState();
        }

        // Switch to signup form
        function switchToSignup() {
            if (!isLogin) return;
            
            isLogin = false;
            updateFormState();
        }

        // Switch form (from footer button)
        function switchForm() {
            isLogin = !isLogin;
            updateFormState();
        }

        // Update form state and UI
        function updateFormState() {
            // Clear form
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            clearError('email');
            clearError('password');
            
            // Reset password visibility
            document.getElementById('password').type = 'password';
            document.getElementById('eye-icon').innerHTML = `
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
            `;

            if (isLogin) {
                // Update to login state
                formTitle.textContent = 'Welcome Back';
                formSubtitle.textContent = 'Sign in to your account';
                passwordField.placeholder = 'Enter your password';
                submitText.textContent = 'Sign In';
                passwordRequirements.style.display = 'none';
                footerText.innerHTML = `
                    Don't have an account? 
                    <button type="button" onclick="switchForm()" id="footer-button">Sign up</button>
                `;
                
                // Update tabs
                loginTab.classList.add('active');
                signupTab.classList.remove('active');
            } else {
                // Update to signup state
                formTitle.textContent = 'Create Account';
                formSubtitle.textContent = 'Sign up to get started';
                passwordField.placeholder = 'Create a password';
                submitText.textContent = 'Create Account';
                passwordRequirements.style.display = 'block';
                footerText.innerHTML = `
                    Already have an account? 
                    <button type="button" onclick="switchForm()" id="footer-button">Sign in</button>
                `;
                
                // Update tabs
                loginTab.classList.remove('active');
                signupTab.classList.add('active');
            }
        }

        // Initialize the form
        document.addEventListener('DOMContentLoaded', function() {
            updateFormState();
        });
 