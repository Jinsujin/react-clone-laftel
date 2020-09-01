const express = require("express");

const router = express.Router();

/**
 * POST /post
 */
router.post("/", (req, res) => {
  res.json({ id: 1, content: "hello world!" });
});

module.exports = router;
