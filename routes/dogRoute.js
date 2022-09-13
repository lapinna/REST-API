import express from "express";
import {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    deleteAll,
  } from "../controllers/dogController.js";

const router = express.Router();

router.post("/dogs", create);
router.get("/dogs", getAll);
router.get("/dogs/:id", getById);
router.put("/dogs/:id", updateById);
router.delete("/dogs/:id", deleteById);
router.delete("/dogs", deleteAll);

export default router;