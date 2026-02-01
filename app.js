// Generate ID (15 digits)
function generateID() {
  let id = '';
  for (let i = 0; i < 15; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
}

// Generate Password (30 chars)
function generatePassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let pass = '';
  for (let i = 0; i < 30; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

// START button activation
const agreeCheck = document.getElementById('agreeCheck');
const startBtn = document.getElementById('startBtn');

agreeCheck.addEventListener('change', () => {
  startBtn.disabled = !agreeCheck.checked;
});

// Show ID & Password on Sign Up or Log In
document.getElementById('loginBtn').addEventListener('click', () => {
  alert(`Your ID: ${generateID()}\nPassword: ${generatePassword()}`);
});

document.getElementById('signupBtn').addEventListener('click', () => {
  alert(`Your ID: ${generateID()}\nPassword: ${generatePassword()}`);
});
