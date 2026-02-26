const express = require("express");
const router = express.Router();
const { login, register } = require("../auth.controller");
const {authorize} = require("../../middlewares/authorize.middleware");
const {authenticate } = require("../../middlewares/auth.middleware");

router.post("/login", login);
router.post("/register", register);
router.get(
  "/admin/dashboard",
  authenticate,
  authorize(["admin"]),

  (req, res) => {
    res.json({ message: "welcome admin" });
  },
);
router.get("/me", authenticate, async (req, res) => {
  res.json({
    user: req.user
  });
});

module.exports = router;
