import express from "express";
import {
  getUsers,
  getUserFriends,
  addRemoveFriend,
} from "./controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// REAd
router.get("/:id", verifyToken, getUsers);
router.get("/:id/friends", verifyToken, getUserFriends);

// Update

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
