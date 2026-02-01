// توليد البيانات
const generateData = () => {
    const id = Array.from({length: 15}, () => Math.floor(Math.random()*10)).join('');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const key = Array.from({length: 30}, () => chars.charAt(Math.floor(Math.random()*chars.length))).join('');
    return { id, key };
};

const views = ['view-home', 'view-auth'];
const showView = (id) => {
    views.forEach(v => document.getElementById(v).classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
};

// Sign Up Logic
document.getElementById('signup-trigger').onclick = () => {
    const data = generateData();
    document.getElementById('display-id').value = data.id;
    document.getElementById('display-key').value = data.key;
    showView('view-auth');
    showMsg("CREDENTIALS GENERATED");
};

// Login Logic
document.getElementById('login-trigger').onclick = () => {
    document.getElementById('display-id').value = "";
    document.getElementById('display-id').placeholder = "ENTER YOUR ID";
    document.getElementById('display-key').value = "";
    document.getElementById('display-key').placeholder = "ENTER YOUR KEY";
    showView('view-auth');
};

// Checkbox Logic
document.getElementById('agree-check').onchange = (e) => {
    const btn = document.getElementById('start-btn');
    if(e.target.checked) btn.classList.add('active');
    else btn.classList.remove('active');
};

function showMsg(m) {
    const wrap = document.getElementById('toast-wrap');
    const t = document.createElement('div');
    t.className = 'toast'; t.innerText = m;
    wrap.innerHTML = ''; wrap.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}
