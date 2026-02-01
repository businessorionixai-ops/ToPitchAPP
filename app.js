const agreeCheck = document.getElementById('agree-check');
const startBtn = document.getElementById('start-btn');
const loader = document.getElementById('loader');
const signupTrigger = document.getElementById('signup-trigger');
const loginTrigger = document.getElementById('login-trigger');

// توليد ID من 15 رقم
function generateID() {
    return Array.from({length: 15}, () => Math.floor(Math.random() * 10)).join('');
}

// توليد Key من 30 حرف ورقم ميكس
function generateKey() {
    const chars = "abcdef0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from({length: 30}, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

// لودينغ سريع جداً
function fastLoad(callback) {
    loader.style.display = 'flex';
    setTimeout(() => {
        loader.style.display = 'none';
        callback();
    }, 300); // 0.3 ثانية
}

// تفعيل زر START
agreeCheck.addEventListener('change', function() {
    if(this.checked) startBtn.classList.add('active');
    else startBtn.classList.remove('active');
});

// تفعيل زر Sign Up
signupTrigger.addEventListener('click', () => {
    fastLoad(() => {
        const id = generateID();
        const key = generateKey();
        showMsg(`NEW ID: ${id}\nKEY: ${key.substring(0,10)}...`);
        console.log("Full Key:", key); // الكود الكامل في الكونسول للأمان
    });
});

// تفعيل زر Login
loginTrigger.addEventListener('click', () => {
    fastLoad(() => {
        showMsg("PLEASE ENTER YOUR CREDENTIALS");
    });
});

// تفعيل زر Start
startBtn.addEventListener('click', () => {
    showMsg("CONNECTING TO SERVER...");
});

function showMsg(t) {
    const wrap = document.getElementById('toast-wrap');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = t;
    wrap.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}
