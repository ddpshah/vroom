const express = require("express");
const router = express.Router();

// Controllers
const {
    login,
    register,
    forgotPassword,
    resetPassword,
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgot-password").post(forgotPassword);

router.route("/reset-password/:resetToken").put(resetPassword);

module.exports = router;