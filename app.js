const agreeCheck = document.getElementById('agree-check');
const startBtn = document.getElementById('start-btn');
const loader = document.getElementById('loader');

// 1. توليد ID من 15 رقم
function generateID() {
    return Array.from({length: 15}, () => Math.floor(Math.random() * 10)).join('');
}

// 2. توليد Key من 30 حرف ورقم (Hex/Mix)
function generateKey() {
    const chars = "abcdef0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from({length: 30}, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

// 3. نظام الـ Loading السريع
function fastLoad(callback) {
    loader.style.display = 'flex';
    setTimeout(() => {
        loader.style.display = 'none';
        callback();
    }, 400); // 0.4 ثانية برك - سرعة البرق
}

// 4. التحكم في زر START
agreeCheck.addEventListener('change', function() {
    startBtn.classList.toggle('active', this.checked);
});

// 5. عند الضغط على Sign Up (مثال عن توليد البيانات)
document.getElementById('signup-trigger').addEventListener('click', () => {
    fastLoad(() => {
        const newID = generateID();
        const newKey = generateKey();
        console.log("ID:", newID, "KEY:", newKey);
        showMsg("VAULT GENERATED!");
    });
});

function showMsg(t) {
    const wrap = document.getElementById('toast-wrap');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = t;
    wrap.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}
