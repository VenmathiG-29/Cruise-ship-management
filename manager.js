// manager.js
import { db } from './firebase-config.js';
import { collection, query, where, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const managerBookingSection = document.getElementById('manager-booking-section');
const bookingList = document.getElementById('manager-booking-list');

// Load bookings filtered by type
export async function loadBookings(bookingType) {
  bookingList.innerHTML = 'Loading...';

  const bookingsRef = collection(db, 'bookings');
  const q = query(bookingsRef, where("type", "==", bookingType), orderBy("bookingDate", "desc"));
  const snapshot = await getDocs(q);

  bookingList.innerHTML = '';
  if(snapshot.empty){
    bookingList.innerHTML = '<li>No bookings for ' + bookingType + '</li>';
    return;
  }

  snapshot.forEach(docSnap => {
    const booking = docSnap.data();
    const li = document.createElement('li');
    li.textContent = `Voyager: ${booking.voyagerEmail}, Date: ${new Date(booking.bookingDate.seconds * 1000).toLocaleDateString()}, Status: ${booking.status}`;
    bookingList.appendChild(li);
  });
}
