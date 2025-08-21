// feedback.js
import { db, auth } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { showNotification } from './utils.js';

const feedbackSection = document.getElementById('feedback-section');
const feedbackForm = document.getElementById('feedback-form');
const feedbackMsgInput = document.getElementById('feedback-message');
const feedbackResponse = document.getElementById('feedback-response');

feedbackForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const message = feedbackMsgInput.value.trim();
  if (!message) {
    showNotification("Feedback message required!", "error");
    return;
  }
  const user = auth.currentUser;
  try {
    await addDoc(collection(db, 'feedbacks'), {
      message,
      userEmail: user ? user.email : "Anonymous",
      timestamp: new Date()
    });
    feedbackResponse.textContent = "Thank you for your feedback!";
    feedbackForm.reset();
  } catch (err) {
    feedbackResponse.textContent = "Error sending feedback: " + err.message;
  }
});
