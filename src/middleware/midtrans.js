const crypto = require("crypto");

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;

const MIDTRANS_IPS = [`34.101.68.130`, `34.101.92.69`];

// Middleware untuk memvalidasi IP
exports.validateIP = (req, res, next) => {
  const requestIP =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const clientIP = requestIP.split(",").shift().trim();
  if (MIDTRANS_IPS.includes(clientIP)) {
    return next();
  }
  res.status(403).send("Forbidden");
};

// Middleware untuk memvalidasi signature key
exports.validateSignature = (req, res, next) => {
  const signatureKey = req.headers["x-signature-key"];
  const body = JSON.stringify(req.body);
  const calculatedSignature = crypto
    .createHmac("sha512", MIDTRANS_SERVER_KEY)
    .update(body)
    .digest("hex");

  if (signatureKey === calculatedSignature) {
    return next();
  }
  res.status(403).send("Forbidden");
};
