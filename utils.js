// utils.js

export function showNotification(message, type = "info") {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.backgroundColor = type === "error" ? "#cc0000" : "#007bff";
  notification.classList.remove('hidden');
  setTimeout(() => notification.classList.add('hidden'), 5000);
}

export function hasRole(userRoles, requiredRole) {
  return userRoles.includes(requiredRole);
}
