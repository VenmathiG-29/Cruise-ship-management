Cruise Ship Management Web Application
Overview
- The Cruise Ship Management Web Application is a comprehensive modular platform designed for cruise operations, enabling role-based management and booking of ship facilities. Voyagers can order catering/stationery items, book services, submit feedback, maintain wishlists, view notifications, and manage their profile. Admins, managers, head cooks, and supervisors have dedicated dashboards for operational oversight. The system is secure, scalable, and fully integrated with Firebase for authentication and database.

Updated Features
- Role-based login and navigation (Voyager, Admin, Manager, Head Cook, Supervisor)

- Multi-step, wizard-style order and booking forms

- Voyager dashboard with profile summary, loyalty points, and order history

- Real-time status updates on orders and bookings

- Admin dashboard for item management and voyager registration

- Manager dashboard for viewing and filtering bookings

- Head Cook and Supervisor dashboards for real-time monitoring of catering and stationery orders

- Notification center (bell icon) with dropdown for alerts and messages

- Interactive ship directory/map with search/filter

- Favorites/Wishlist for items and facilities

- Feedback and complaints form

- PDF download/print option for bookings/orders

- Upcoming events/announcements section

- Push notifications support

- Cancellation requests with reason tracking

- Image uploads for catering/stationery items, resorts (via Firebase Storage)

- Advanced search filters for orders/bookings

- User profile management and update

- Analytics dashboard with charts (manager & admin)

- Logging for every user and system action (stored in Firestore)

- Support for client validation and security best-practices

- Multi-language support (simple extension via JSON resources)

- Loyalty points progress bar for voyagers

- Dynamic FAQs/help section

Usage Guide

- Login/Register with email and password.

- Select your role from the dropdown after login.

- Voyagers: Place orders, book facilities, manage profile, view history, submit feedback, manage favorites, check notifications.

- Admins: Add/edit/delete items, register voyagers, view analytics.

- Managers: View and filter all bookings, see analytics charts.

- Head Cook & Supervisor: Real-time monitoring of requested orders.

- All users: Access announcements, ship directory/map, notification center, and download PDFs of receipts or tickets.

Advanced Features
- Feedback: Use the feedback form to submit complaints and suggestions. Admin view collects all submissions.

- Notifications: Real-time alerts for bookings, orders, events, system messages. Bell icon shows unread counts.

- Favorites: Quickly access frequently ordered items or facilities.

- Order/Booking Wizard: Streamlined, multi-step forms for easier reservation or ordering.

- Cancellation Handling: Request cancellations with reason; managers/admins approve or reject.

- Analytics: View charts of activity, bookings, loyalty points, and sales (requires Chart.js).

- Image Uploads: Admins and managers can attach images to items or resorts, visible in the directory.

- Multi-language: Switch languages for the whole UI, via /lang/ JSON resources.

- Ship Map: Interactive searchable map of the cruise ship's facilities.

Testing and Maintenance
- Unit tests for modules (suggest using Jest or Mocha for JS)

- Security audit: Ensure only authorized users have access to their modules

- Performance: Audit Firebase usage for optimal reads/writes

- Usability: Responsive UI for mobile and desktop
