document.addEventListener('DOMContentLoaded', (event) => {
  const loginForm = document.getElementById('loginForm');
  const logoutContainer = document.querySelector('.logout-container');
  const logoutButton = document.getElementById('logoutButton');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login validation here
    // If login is successful, redirect to admin page
    window.location.href = 'admin.html'; // Replace 'admin.html' with the actual admin page URL
  });

  logoutButton.addEventListener('click', function() {
    // Perform logout actions here
    window.location.href = 'login.html'; // Replace 'login.html' with the actual login page URL
    // Optionally, you can also clear any session or local storage data
  });

  // Toggle password visibility
  const togglePassword = document.getElementById('togglePassword');
  const password = document.getElementById('password');

  togglePassword.addEventListener('click', function() {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // Toggle the eye icon
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
  });
});
