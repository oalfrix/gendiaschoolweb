let timeout;

document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
        alert('You must log in to access this page.');
        window.location.href = 'admin.html';
    } else {
        startTimeout();
    }
});

let stayLoggedIn = false;

document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
        alert('You must log in to access this page.');
        window.location.href = 'admin.html';
    } else {
        startTimeout();
    }
});

function startTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(showLogoutPopup, 900000); // 15 minutes
}

function showLogoutPopup() {
    if (!stayLoggedIn) {
        if (confirm('Your session is about to expire. Do you want to stay logged in?')) {
            stayLoggedIn = true; // User chose to stay logged in, prevent future prompts
            startTimeout(); // Reset the timeout
        } else {
            logout();
        }
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    alert('You have been logged out.');
    window.location.href = 'admin.html';
}

// Reset the timeout whenever there's user activity
window.addEventListener('mousemove', startTimeout);
window.addEventListener('keydown', startTimeout);

