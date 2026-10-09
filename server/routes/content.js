const express = require("express");
const { support, institution } = require("../data/content");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ support, institution });
});

module.exports = router;
