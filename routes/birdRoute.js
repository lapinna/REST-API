import express from "express";
import {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  deleteAll,
} from "../controllers/birdController.js";

const router = express.Router();

router.post("/birds", create);
router.get("/birds", getAll);
router.get("/birds/:id", getById);
router.put("/birds/:id", updateById);
router.delete("/birds/:id", deleteById);
router.delete("/birds", deleteAll);

export default router;