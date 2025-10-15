
// Observa estado de autenticação e protege dashboard
const path = location.pathname;
firebase.auth().onAuthStateChanged((user) => {
  const onDashboard = path.endsWith('/dashboard.html');
  const userInfoEl = document.getElementById('user-info');
  const restricted = document.getElementById('restricted-content');
  if (user) {
    if (userInfoEl) userInfoEl.textContent = 'Logado como: ' + (user.email || '(sem email)');
    if (restricted) restricted.hidden = false;
  } else {
    if (userInfoEl) userInfoEl.textContent = 'Nenhum usuário logado';
    if (onDashboard) location.assign('/pages/login.html');
  }
});

// Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      location.assign('/pages/dashboard.html');
    } catch (err) {
      alert('Erro ao entrar: ' + (err.message || err));
    }
  });
}

// Reset de senha
const resetForm = document.getElementById('reset-form');
if (resetForm) {
  resetForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('reset-email').value.trim();
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      alert('Enviado link de redefinição para ' + email);
      location.assign('/pages/login.html');
    } catch (err) {
      alert('Erro ao enviar link: ' + (err.message || err));
    }
  });
}

// Logout
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    await firebase.auth().signOut();
    location.assign('/pages/login.html');
  });
}
