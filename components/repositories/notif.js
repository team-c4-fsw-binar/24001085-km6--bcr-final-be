const { Notification } = require('../../models');

// Membuat notifikasi
exports.createNotification = async (payload) => {

  payload.isRead = false

  return await Notification.create(payload);
} 


// Mendapatkan notifikasi berdasarkan user_id
exports.getUserNotifications = async (user_id) => await Notification.findAll({ where: { user_id } });


// Mengupdate isRead menjadi true
exports.readNotification = async (id, isRead) => {
  await Notification.update({ isRead }, { where: { id } });
  return await Notification.findOne({ where: { id } });
}

// Menghapus notifikasi
exports.deleteNotification = async (id) => await Notification.destroy({ where: { id } });
