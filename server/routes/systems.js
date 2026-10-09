const express = require("express");
const crypto = require("crypto");
const { list, findById } = require("../data/systems");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(list());
});

// Simula la emisión de un token SSO de corta duración para redirigir al sistema.
router.post("/:id/access", (req, res) => {
  const system = findById(req.params.id);
  if (!system) {
    return res.status(404).json({ message: "Sistema no encontrado" });
  }
  const token = crypto.randomBytes(16).toString("hex");
  res.json({
    redirectUrl: `${system.url}/sso/callback?token=${token}`,
    token,
    expiresInSeconds: 60,
  });
});

module.exports = router;
