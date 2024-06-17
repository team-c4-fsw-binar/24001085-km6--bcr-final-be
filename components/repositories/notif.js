const { Notification } = require("../../models");

// Membuat notifikasi
exports.createNotification = async (payload) => {
  return await Notification.create(payload);
};

exports.createManyNotifications = async (payload) => {
  return await Notification.bulkCreate(payload);
};

// Mendapatkan notifikasi berdasarkan user_id
exports.getUserNotifications = async (user_id) =>
  await Notification.findAll({ where: { user_id } });

// Mengupdate isRead menjadi true
exports.readNotification = async (id, isRead) => {
  await Notification.update({ isRead }, { where: { id } });
  return await Notification.findOne({ where: { id } });
};

// Menghapus notifikasi
exports.deleteNotification = async (id) => {
  await Notification.destroy({ where: { id } });
  return null;
};
