// supervisor.js
import { db } from './firebase-config.js';
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const stationeryOrdersList = document.getElementById('stationery-orders-list');

export function listenStationeryOrders() {
  const ordersRef = collection(db, 'stationeryOrders');
  const q = query(ordersRef, where('status', '==', 'pending'));

  onSnapshot(q, (snapshot) => {
    stationeryOrdersList.innerHTML = '';
    if(snapshot.empty){
      stationeryOrdersList.innerHTML = '<li>No pending stationery orders.</li>';
      return;
    }
    snapshot.forEach(docSnap => {
      const order = docSnap.data();
      const li = document.createElement('li');
      li.textContent = `Order #${docSnap.id}, Voyager ID: ${order.voyagerId}, Items: ${order.items.length}`;
      stationeryOrdersList.appendChild(li);
    });
  });
}
