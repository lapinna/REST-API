import express from "express";
import {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    deleteAll,
    getAllAnimals
  } from "../controllers/favoritePlaceController.js";

const router = express.Router();

router.post("/places", create);
router.get("/places", getAll);
router.get("/places/:id", getById);
router.put("/places/:id", updateById);
router.delete("/places/:id", deleteById);
router.delete("/places", deleteAll);
router.get("/places/animals/:id", getAllAnimals);

export default router;