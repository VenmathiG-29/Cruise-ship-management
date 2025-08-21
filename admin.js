// Voyager registration form event example
const voyagerRegForm = document.getElementById('voyager-reg-form');
voyagerRegForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target['voyager-email'].value.trim();
  const password = e.target['voyager-password'].value;
  const role = 'voyager';

  try {
    // Use Firebase Auth to create user and set custom claim or Firestore user doc for role
    // This requires secure Firebase Functions or Admin SDK (for simplicity, store user info in Firestore)
    await createAuthUser(email, password);
    await addUserDoc(email, role);
    showNotification('Voyager registered successfully!');
    e.target.reset();
  } catch (err) {
    showNotification('Voyager registration failed: ' + err.message);
  }
});

async function createAuthUser(email, password){
  // Admin should do this securely using Firebase Admin SDK (recommended)
  // Otherwise, prompt new users to register manually
}

async function addUserDoc(email, role){
  // Firestore user doc addition with role field
  await addDoc(collection(db, 'users'), { email, role, createdAt: new Date() });
}
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const storage = getStorage();

export async function uploadItemImage(file) {
  const storageRef = ref(storage, 'item-images/' + file.name);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
}
