import express from "express";
import {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    deleteAll,
  } from "../controllers/catController.js";

const router = express.Router();

router.post("/cats", create);
router.get("/cats", getAll);
router.get("/cats/:id", getById);
router.put("/cats/:id", updateById);
router.delete("/cats/:id", deleteById);
router.delete("/cats", deleteAll);

export default router;