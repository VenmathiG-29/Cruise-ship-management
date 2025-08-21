// voyager.js
import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { logAction } from './logging.js';

export async function placeCateringOrder(voyagerId, orderItems){
  if(!voyagerId || !Array.isArray(orderItems) || orderItems.length === 0) throw new Error("Invalid order");

  await addDoc(collection(db, "cateringOrders"), {
    voyagerId,
    items: orderItems,
    orderDate: new Date(),
    status: "pending"
  });

  logAction(`New catering order placed by voyager ${voyagerId}`);
}

// Similarly implement ordering with forms, bookings, etc.
import { auth, db } from './firebase-config.js';
import { collection, query, where, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { logAction } from './logging.js';

const orderHistoryList = document.getElementById('order-history-list');

export async function loadVoyagerOrders() {
  if(!auth.currentUser) return;
  orderHistoryList.innerHTML = 'Loading order history...';

  const voyagerId = auth.currentUser.uid;
  const ordersRef = collection(db, 'orders');
  const q = query(ordersRef, where('voyagerId', '==', voyagerId), orderBy('orderDate', 'desc'));
  const snapshot = await getDocs(q);

  orderHistoryList.innerHTML = '';
  if(snapshot.empty){
    orderHistoryList.innerHTML = '<li>No orders placed yet.</li>';
    return;
  }

  snapshot.forEach(docSnap => {
    const order = docSnap.data();
    const li = document.createElement('li');
    li.textContent = `Order #${docSnap.id} placed on ${new Date(order.orderDate.seconds * 1000).toLocaleDateString()} - Status: ${order.status}`;
    orderHistoryList.appendChild(li);
  });
}

export async function placeOrder(orderData) {
  if(!auth.currentUser){
    alert('Please login first.');
    return;
  }
  orderData.voyagerId = auth.currentUser.uid;
  orderData.orderDate = new Date();
  orderData.status = "pending";
  // Add order to Firestore (similar to your order placing logic)
  // ...
  logAction('Voyager placed order.', auth.currentUser.email);
}
import { onSnapshot, collection, query, where } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export function listenVoyagerOrders(voyagerId, callback) {
  const ordersQuery = query(collection(db, "orders"), where("voyagerId", "==", voyagerId));
  return onSnapshot(ordersQuery, (snapshot) => {
    const orders = [];
    snapshot.forEach(doc => orders.push({ id: doc.id, ...doc.data() }));
    callback(orders);
  });
}

// Usage: listenVoyagerOrders(auth.currentUser.uid, updateUIFunction);
