// notification.js
import { db, auth } from './firebase-config.js';
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const notificationBell = document.getElementById('notification-bell');
const notificationCount = document.getElementById('notification-count');
const notificationDropdown = document.getElementById('notification-dropdown');

let currentNotifications = [];

export function listenNotifications() {
  const user = auth.currentUser;
  if (!user) return;
  const notificationsRef = collection(db, 'notifications');
  const notifQuery = query(notificationsRef, where("userEmail", "==", user.email));
  onSnapshot(notifQuery, (snapshot) => {
    currentNotifications = [];
    snapshot.forEach(doc => currentNotifications.push(doc.data()));
    notificationCount.textContent = currentNotifications.length;
    renderNotificationDropdown();
  });
}

function renderNotificationDropdown() {
  notificationDropdown.innerHTML = "";
  if (currentNotifications.length === 0) {
    notificationDropdown.innerHTML = "<div>No notifications</div>";
    return;
  }
  currentNotifications.forEach(notif => {
    const div = document.createElement("div");
    div.className = "notification-item";
    div.textContent = notif.message + " (" + new Date(notif.timestamp.seconds * 1000).toLocaleString() + ")";
    notificationDropdown.appendChild(div);
  });
}

notificationBell.addEventListener('click', () => {
  notificationDropdown.classList.toggle('hidden');
});
