const router = require("express").Router();

const { getFilteredTickets } = require("../controllers/find_ticket");

router.route("/").post(getFilteredTickets);

module.exports = router;
