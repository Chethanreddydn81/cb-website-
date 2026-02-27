// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('#main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// Sticky header effect
const header = document.querySelector('.sticky-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// QR Code Generation
document.addEventListener('DOMContentLoaded', function() {
    // Generate QR Code
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "https://example.com/codecraft-academy",
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Download functionality
    document.getElementById('downloadBtn').addEventListener('click', function(e) {
        e.preventDefault();

        // Create a Blob with the HTML content
        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeCraft Academy | Professional Coding Bootcamp</title>
    <!-- Styles and scripts would be included here -->
</head>
<body>
    <!-- Website content would be here -->
</body>
</html>`;

        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        // Create download link
        const a = document.createElement('a');
        a.href = url;
        a.download = 'codecraft-academy.html';
        document.body.appendChild(a);
        a.click();

        // Clean up
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 100);
    });

    // Print functionality
    document.getElementById('printBtn').addEventListener('click', function(e) {
        e.preventDefault();
        window.print();
    });
});

// Animate elements on scroll
const animatedElements = document.querySelectorAll('.program-card, .resource-card, .testimonial-card, .qr-feature-card');

const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(element => {
    elementObserver.observe(element);
});

// Authentication System
const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const closeModal = document.getElementById('closeModal');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authButtons = document.getElementById('authButtons');
const userProfile = document.getElementById('userProfile');
const dropdownMenu = document.getElementById('dropdownMenu');
const logoutBtn = document.getElementById('logoutBtn');
const userAvatar = document.getElementById('userAvatar');
const userName = document.getElementById('userName');

// Show auth modal
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.classList.add('active');
    loginTab.click();
});

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.classList.add('active');
    registerTab.click();
});

// Close modal
closeModal.addEventListener('click', () => {
    authModal.classList.remove('active');
});

// Tab switching
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

// Login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate login
    const user = {
        name: email.split('@')[0],
        email: email
    };

    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Update UI
    authButtons.style.display = 'none';
    userProfile.style.display = 'flex';
    userAvatar.textContent = user.name.charAt(0).toUpperCase();
    userName.textContent = user.name;

    // Show success notification
    showNotification(`Welcome back, ${user.name}! You have successfully logged in.`);

    // Close modal
    authModal.classList.remove('active');

    // Reset form
    loginForm.reset();
});

// Registration form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Create user object
    const user = {
        name: name,
        email: email
    };

    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Update UI
    authButtons.style.display = 'none';
    userProfile.style.display = 'flex';
    userAvatar.textContent = user.name.charAt(0).toUpperCase();
    userName.textContent = user.name;

    // Show success notification
    showNotification(`Welcome to CodeCraft Academy, ${name}! Your account has been created successfully. We've sent a confirmation email to ${email}.`);

    // Close modal
    authModal.classList.remove('active');

    // Reset form
    registerForm.reset();
});

// Logout functionality
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove user from localStorage
    localStorage.removeItem('currentUser');

    // Update UI
    authButtons.style.display = 'flex';
    userProfile.style.display = 'none';
    dropdownMenu.classList.remove('show');

    // Show notification
    showNotification('You have been logged out successfully.');
});

// Toggle dropdown menu
userProfile.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!userProfile.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Check if user is logged in on page load
function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
        authButtons.style.display = 'none';
        userProfile.style.display = 'flex';
        userAvatar.textContent = user.name.charAt(0).toUpperCase();
        userName.textContent = user.name;
    }
}

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        transform: translateX(120%);
        transition: transform 0.3s ease-in-out;
    `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Hide after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(120%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
});