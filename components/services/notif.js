const {
  createNotification,
  createManyNotifications,
  getUserNotifications,
  readNotification,
  deleteNotification,
} = require("../repositories/notif");

exports.createNotification = async (payload) => {
  return await createNotification(payload);
};

exports.createManyNotifications = async (payload) => {
  return await createManyNotifications(payload);
};

exports.getUserNotifications = async (user_id) => {
  return await getUserNotifications(user_id);
};

exports.readNotification = async (id) => {
  const notification = await readNotification(id, true);
  if (!notification) {
    throw new Error("Notification not found");
  }
  return notification;
};

exports.deleteNotification = async (id) => await deleteNotification(id);
