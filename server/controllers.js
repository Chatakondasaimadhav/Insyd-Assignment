// controllers/notificationController.js
const Notification = require('../models/Notification');
const User = require('../models/User');

exports.createNotification = async (actorId, action) => {
  const actor = await User.findById(actorId).populate('followers');
  const message = `${actor.username} ${action}`;
  const notifications = actor.followers.map(follower => ({
    user: follower._id,
    message
  }));
  await Notification.insertMany(notifications);
};

exports.getNotifications = async (req, res) => {
  const { userId } = req.params;
  const notifications = await Notification.find({ user: userId }).sort({ createdAt: -1 });
  res.json(notifications);
};
