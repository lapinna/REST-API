import birdModel from "../models/birdModel.js";

export const create = async (req, res) => {
  try {
    const bird = new birdModel({ ...req.body });
    await bird.save();
    res.status(201).send("Resource created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const birds = await birdModel.find({});
    res.status(202).json(birds);
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (req, res) => {
  try {
    const bird = await birdModel.findById(req.params.id);
    res.status(200).json(bird);
  } catch (error) {
    console.error(error);
  }
};

export const updateById = async (req, res) => {
  try {
    const updatedBird = await birdModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBird);
  } catch (error) {
    console.error(error);
  }
};

export const deleteById = async (req, res) => {
  try {
    await birdModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Resource deleted");
  } catch (error) {
    console.error(error);
  }
};

export const deleteAll = async (req, res) => {
  try {
    await birdModel.deleteMany({});
    res.status(200).send("All resources deleted");
  } catch (error) {
    console.error(error);
  }
};
