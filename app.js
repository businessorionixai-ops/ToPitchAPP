// Selecting Elements
const agreeCheck = document.getElementById('agree-check');
const startBtn = document.getElementById('start-btn');
const signupBtn = document.getElementById('signup-trigger');
const loginBtn = document.getElementById('login-trigger');

// Toggle START Button function
agreeCheck.addEventListener('change', function() {
    if (this.checked) {
        startBtn.classList.add('active');
    } else {
        startBtn.classList.remove('active');
    }
});

// Start Game Logic
startBtn.addEventListener('click', function() {
    showMsg("ACCESSING THE PITCH...");
});

// Sign Up & Login triggers
signupBtn.addEventListener('click', function() {
    showMsg("Opening Secure Registration...");
});

loginBtn.addEventListener('click', function() {
    showMsg("Loading Secure Login...");
});

// Notification Function
function showMsg(text) {
    const wrap = document.getElementById('toast-wrap');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = text;
    wrap.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
