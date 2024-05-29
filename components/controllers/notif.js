const { createNotification, getUserNotifications, readNotification, deleteNotification } = require("../services/notif");

exports.createNotification = async (req, res, next) => {
  try {
    // get body
    const { type, title, content } = req.body
    const user_id = req?.user?.id

    if (!type || type == "") {
      return next({
        message : "Type Must Be Filled!",
        statusCode : 400
      })
    }

    if (!title || title == "") {
      return next({
        message : "Title Must Be Filled!",
        statusCode : 400
      })
    }

    if (!content || content == "") {
      return next({
        message : "Content Must Be Filled!",
        statusCode : 400
      })
    }

    const data = await createNotification({
      type, title, content, user_id
    });

    res.status(201).json({
      message : `Success Create Notification`,
      data
    });
  } catch (error) {
    next(error)
  }
}

exports.getUserNotifications = async (req, res, next) => {
  try {
    const data = await getUserNotifications(req.user.id);
    res.status(200).json({
      message : `Success Get Notification`,
      data
    });
  } catch (error) {
    next(error)
  }
}

exports.readNotification = async (req, res, next) => {
  try {
    // get id by params
    const { id } = req.params
    
    const data = await readNotification(id);
    res.status(200).json({
      message : `Success Update Read Notification`,
      data
    });
  } catch (error) {
    next(error)
  }
}

exports.delNotification = async (req, res, next) => {
  try {
    // get id by params
    const { id } = req.params
    const data = await deleteNotification(id);
    res.status(200).json({
      message : `Success Delete Notification`,
      data
    });
  } catch (error) {
    next(error)
  }
}
