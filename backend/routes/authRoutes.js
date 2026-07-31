import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

import {
  register,
  login,
} from "../controllers/authController.js";

const router = express.Router();

// Local Auth
router.post("/register", register);
router.post("/login", login);

// Google Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        userId: req.user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.redirect("http://localhost:5173/");
  }
);

export default router;