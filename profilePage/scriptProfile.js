const avatar = document.getElementById('avatar');
const avatarInput = document.getElementById('avatarInput');
const changePicBtn = document.getElementById('changePicBtn');
const profileForm = document.getElementById('profileForm');
const themeToggle = document.getElementById('themeToggle');

// Live preview elements
const previewAvatar = document.getElementById('previewAvatar');
const previewName = document.getElementById('previewName');
const previewEmail = document.getElementById('previewEmail');
const previewPhone = document.getElementById('previewPhone');
const previewBio = document.getElementById('previewBio');
const previewTwitter = document.getElementById('previewTwitter');
const previewLinkedin = document.getElementById('previewLinkedin');

document.addEventListener("DOMContentLoaded", () => {
  const storedEmail = localStorage.getItem("userEmail");
  if (storedEmail) {
    const emailInput = document.getElementById("email");
    if (emailInput) {
      emailInput.value = storedEmail;
      previewEmail.textContent = storedEmail;
    }
  }
});

// Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Handle avatar change
changePicBtn.addEventListener('click', () => {
  avatarInput.click();
});

avatarInput.addEventListener('change', () => {
  const file = avatarInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      avatar.src = e.target.result;
      previewAvatar.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Live preview on input
profileForm.addEventListener('input', () => {
  previewName.textContent = document.getElementById('username').value || '';
  previewEmail.textContent = document.getElementById('email').value || '';
  previewPhone.textContent = document.getElementById('phone').value || '';
  previewBio.textContent = document.getElementById('bio').value || '';
  previewTwitter.textContent = document.getElementById('twitter').value || '';
  previewLinkedin.textContent = document.getElementById('linkedin').value || '';
});

// Form submit
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Collect form data
  const profileData = {
    name: document.getElementById('username').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    bio: document.getElementById('bio').value,
    twitter: document.getElementById('twitter').value,
    linkedin: document.getElementById('linkedin').value,
    notifications: document.getElementById('notifications').value,
    newPassword: document.getElementById('newPassword').value
  };

  // Simple password validation
  const newPass = document.getElementById('newPassword').value;
  const confirmPass = document.getElementById('confirmPassword').value;
  if (newPass && newPass !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  console.log("Sending data to server:", profileData);

  // Mock backend call
  fetch('/api/update-profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profileData)
  })
  .then(response => {
    alert('Profile updated successfully!');
  })
  .catch(err => {
    alert('Error saving profile!');
  });
});
