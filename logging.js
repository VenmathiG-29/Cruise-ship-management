// logging.js
export function logAction(action, user = "Unknown") {
  const time = new Date().toISOString();
  console.log(`[${time}] [${user}]: ${action}`);
  // Extend for server-side log persistence
}
import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function logAction(action, user = "Unknown") {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] User: ${user} Action: ${action}`);

  try {
    await addDoc(collection(db, 'logs'), { user, action, timestamp });
  } catch (err){
    console.error('Failed to log action:', err);
  }
}
