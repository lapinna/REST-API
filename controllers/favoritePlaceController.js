import favoritePlaceModel from "../models/favoritePlaceModel.js";
import birdModel from "../models/birdModel.js";
import catModel from "../models/catModel.js";
import dogModel from "../models/dogModel.js";

export const create = async (req, res) => {
  try {
    const place = new favoritePlaceModel({ ...req.body });
    await place.save();
    res.status(201).send("Resource created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const places = await favoritePlaceModel.find({});
    res.status(202).json(places);
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (req, res) => {
  try {
    const place = await favoritePlaceModel.findById(req.params.id);
    res.status(200).json(place);
  } catch (error) {
    console.error(error);
  }
};

export const updateById = async (req, res) => {
  try {
    const updatedPlace = await favoritePlaceModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPlace);
  } catch (error) {
    console.error(error);
  }
};

export const deleteById = async (req, res) => {
  try {
    await favoritePlaceModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Resource deleted");
  } catch (error) {
    console.error(error);
  }
};

export const deleteAll = async (req, res) => {
  try {
    await favoritePlaceModel.deleteMany({});
    res.status(200).send("All resources deleted");
  } catch (error) {
    console.error(error);
  }
};

export const getAllAnimals = async (req, res) => {
  try {
    const place = await favoritePlaceModel.findById(req.params.id);
    console.log("PLACE", place);
    const animals = await Promise.all(
      place.animal.map(async (animal) => {
        let modelName = animal.modelName;
        if (modelName === "bird") {
          return await birdModel.findById(animal.id);
        } else if (modelName === "cat") {
          return await catModel.findById(animal.id);
        } else if (modelName === "dog") {
          return await dogModel.findById(animal.id);
        }
      })
    );
    res.status(200).json(animals);
  } catch (error) {
    console.error(error);
  }
};