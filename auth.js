// auth.js
import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { logAction } from './logging.js';

const authForm = document.getElementById('auth-form');
const loginBtn = document.getElementById('auth-login-btn');
const registerBtn = document.getElementById('auth-register-btn');
const authMessage = document.getElementById('auth-message');
const btnLoginToggle = document.getElementById('btn-login');
const btnLogout = document.getElementById('btn-logout');
const btnDashboard = document.getElementById('btn-dashboard');
const roleSelect = document.getElementById('role-select');
const authSection = document.getElementById('auth-section');
const dashboardSection = document.getElementById('dashboard');
const welcomeSection = document.getElementById('welcome-section');
const notification = document.getElementById('notification');

btnLoginToggle.addEventListener('click', () => {
  authSection.classList.toggle('hidden');
  welcomeSection.classList.toggle('hidden');
});

btnLogout.addEventListener('click', async () => {
  await signOut(auth);
  logAction("User logged out");
});

let currentUser = null;

loginBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  authMessage.textContent = '';
  try {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    await signInWithEmailAndPassword(auth, email, password);
    logAction("User logged in", email);
  } catch(err) {
    authMessage.textContent = err.message;
  }
});

registerBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  authMessage.textContent = '';
  try {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    await createUserWithEmailAndPassword(auth, email, password);
    authMessage.textContent = "Registration successful. Please login.";
  } catch(err) {
    authMessage.textContent = err.message;
  }
});

onAuthStateChanged(auth, (user) => {
  currentUser = user;
  if (user) {
    btnLoginToggle.classList.add("hidden");
    btnLogout.classList.remove("hidden");
    btnDashboard.classList.remove("hidden");
    authSection.classList.add("hidden");
    welcomeSection.classList.add("hidden");
    dashboardSection.classList.remove("hidden");
    notification.textContent = `Welcome, ${user.email}`;
    notification.classList.remove("hidden");
  } else {
    btnLoginToggle.classList.remove("hidden");
    btnLogout.classList.add("hidden");
    btnDashboard.classList.add("hidden");
    authSection.classList.add("hidden");
    welcomeSection.classList.remove("hidden");
    dashboardSection.classList.add("hidden");
    notification.classList.add("hidden");
  }
});
// After successful login, show role select and enable dashboard
onAuthStateChanged(auth, (user) => {
  if (user) {
    btnLoginToggle.classList.add("hidden");
    btnLogout.classList.remove("hidden");
    btnDashboard.classList.remove("hidden");
    authSection.classList.add("hidden");
    welcomeSection.classList.add("hidden");
    dashboardSection.classList.remove("hidden");
    roleSelect.classList.remove("hidden");
    showNotification(`Welcome, ${user.email}. Please select your role.`);
  } else {
    btnLoginToggle.classList.remove("hidden");
    btnLogout.classList.add("hidden");
    btnDashboard.classList.add("hidden");
    authSection.classList.add("hidden");
    welcomeSection.classList.remove("hidden");
    dashboardSection.classList.add("hidden");
    roleSelect.classList.add("hidden");
    hideElementById('voyager-order-history');
  }
});

roleSelect.addEventListener('change', () => {
  const role = roleSelect.value;
  if(role === 'voyager'){
    // Show voyager order history and relevant voyager UI
    document.getElementById('voyager-order-history').classList.remove('hidden');
    // Load voyager orders (call loadVoyagerOrders in voyager.js)
  } else {
    document.getElementById('voyager-order-history').classList.add('hidden');
  }
  // Show role-specific dashboards
  showDashboardSection(role);
});

// Helper notification function
function showNotification(message){
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.remove('hidden');
  setTimeout(() => notification.classList.add('hidden'), 6000);
}
import { 
  signInWithPhoneNumber, RecaptchaVerifier 
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

export function setupRecaptcha(containerId) {
  window.recaptchaVerifier = new RecaptchaVerifier(containerId, {
    'size': 'invisible',
  }, auth);
}

export async function sendOTP(phoneNumber){
  setupRecaptcha('recaptcha-container');
  const appVerifier = window.recaptchaVerifier;
  const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  window.confirmationResult = confirmation; // save confirmation for OTP verification
}

export async function verifyOTP(code) {
  return await window.confirmationResult.confirm(code);
}

function updateNavigationForRole(role) {
  document.querySelectorAll('nav button, nav select').forEach(el => el.classList.add('hidden'));

  if(role === 'voyager'){
    document.getElementById('btn-logout').classList.remove('hidden');
    document.getElementById('btn-dashboard').classList.remove('hidden');
    // Show voyager-specific links or buttons
  } else if(role === 'admin'){
    // Show admin links
    document.getElementById('btn-logout').classList.remove('hidden');
    document.getElementById('btn-dashboard').classList.remove('hidden');
    // Show admin controls
  }
  // Similarly for other roles
}
// Add UI forms for phone number and OTP input to index.html, connect event listeners to these functions.
