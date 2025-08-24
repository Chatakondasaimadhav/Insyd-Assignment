// src/components/Notifications.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Notifications.css'; // Optional styling

const Notifications = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/notifications/${userId}`)
      .then(res => setNotifications(res.data))
      .catch(err => console.error('Error fetching notifications:', err));
  }, [userId]);

  return (
    <div className="notifications-container">
      <h2>🔔 Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        <ul>
          {notifications.map(n => (
            <li key={n._id}>
              <strong>{n.message}</strong><br />
              <small>{new Date(n.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
