const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
} = require("../controllers/authController");

router.use(
  cors({
    credentials: true,
    origin: "https://w3automation-frontend.vercel.app",
  })
);
router.get("/", test);
router.post("/register", registerUser);
router.post("/dashboard", loginUser);
module.exports = router;
