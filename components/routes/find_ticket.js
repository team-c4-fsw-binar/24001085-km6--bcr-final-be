const router = require("express").Router();

const {
  getFilteredTickets,
  getTicketDetail,
} = require("../controllers/find_ticket");

router.route("/").post(getFilteredTickets);
router.route("/detail").post(getTicketDetail);

module.exports = router;
