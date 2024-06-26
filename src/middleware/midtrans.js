const crypto = require("crypto");

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;

const MIDTRANS_IPS = [`34.101.68.130`, `34.101.92.69`];

exports.validateIP = (req, res, next) => {
  const requestIP =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const clientIP = requestIP.split(",").shift().trim();
  if (MIDTRANS_IPS.includes(clientIP)) {
    return next();
  }
  res.status(403).send("Forbidden");
};

exports.validateSignature = (req, res, next) => {
  const { order_id, status_code, gross_amount } = req.body;
  const receivedSignatureKey = req.body.signature_key;

  const input = order_id + status_code + gross_amount + MIDTRANS_SERVER_KEY;

  const calculatedSignature = crypto
    .createHash("sha512")
    .update(input)
    .digest("hex");

  if (receivedSignatureKey === calculatedSignature) {
    return next();
  }
  res.status(403).send("Forbidden");
};
