// models/User.js
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: String,
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('User', UserSchema);

// models/Notification.js
const NotificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Notification', NotificationSchema);
