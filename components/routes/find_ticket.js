const router = require("express").Router();

const { getFilteredTickets } = require("../controllers/find_ticket");

router.route("/").get(getFilteredTickets);

module.exports = router;
