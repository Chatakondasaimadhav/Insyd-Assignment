// src/App.js
import React from 'react';
import Notifications from './components/Notifications';

function App() {
  const userId = 'YOUR_USER_ID_HERE'; // Replace with actual MongoDB user ID

  return (
    <div className="App">
      <h1>Insyd Notification System</h1>
      <Notifications userId={userId} />
    </div>
  );
}

export default App;
