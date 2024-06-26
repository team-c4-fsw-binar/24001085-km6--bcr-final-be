const { Notification } = require("../../models");

exports.createNotification = async (payload) => {
  return await Notification.create(payload);
};

exports.createManyNotifications = async (payload) => {
  return await Notification.bulkCreate(payload);
};

exports.getUserNotifications = async (user_id) =>
  await Notification.findAll({ where: { user_id } });

exports.readNotification = async (id, isRead) => {
  await Notification.update({ isRead }, { where: { id } });
  return await Notification.findOne({ where: { id } });
};

exports.deleteNotification = async (id) => {
  await Notification.destroy({ where: { id } });
  return null;
};
