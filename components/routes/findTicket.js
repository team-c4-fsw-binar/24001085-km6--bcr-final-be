const router = require("express").Router();

const {
  getFilteredTickets,
  getTicketDetail,
} = require("../controllers/findTicket");

router.route("/").post(getFilteredTickets);
router.route("/detail").post(getTicketDetail);

module.exports = router;
