// headCook.js
import { db } from './firebase-config.js';
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const cateringOrdersList = document.getElementById('catering-orders-list');

export function listenCateringOrders() {
  const ordersRef = collection(db, 'cateringOrders');
  const q = query(ordersRef, where('status', '==', 'pending'));

  onSnapshot(q, (snapshot) => {
    cateringOrdersList.innerHTML = '';
    if(snapshot.empty){
      cateringOrdersList.innerHTML = '<li>No pending catering orders.</li>';
      return;
    }
    snapshot.forEach(docSnap => {
      const order = docSnap.data();
      const li = document.createElement('li');
      li.textContent = `Order #${docSnap.id}, Voyager ID: ${order.voyagerId}, Items: ${order.items.length}`;
      cateringOrdersList.appendChild(li);
    });
  });
}
