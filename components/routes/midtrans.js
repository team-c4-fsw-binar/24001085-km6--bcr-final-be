const router = require("express").Router();

const { getToken } = require("../controllers/midtrans");

router.route("/").post(getToken);

module.exports = router;
