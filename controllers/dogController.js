import dogModel from "../models/dogModel.js";

export const create = async (req, res) => {
  try {
    const dog = new dogModel({ ...req.body });
    await dog.save();
    res.status(201).send("Resource created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const dogs = await dogModel.find({});
    res.status(202).json(dogs);
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (req, res) => {
  try {
    const dog = await dogModel.findById(req.params.id);
    res.status(200).json(dog);
  } catch (error) {
    console.error(error);
  }
};

export const updateById = async (req, res) => {
  try {
    const updatedDog = await dogModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedDog);
  } catch (error) {
    console.error(error);
  }
};

export const deleteById = async (req, res) => {
  try {
    await dogModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Resource deleted");
  } catch (error) {
    console.error(error);
  }
};

export const deleteAll = async (req, res) => {
  try {
    await dogModel.deleteMany({});
    res.status(200).send("All resources deleted");
  } catch (error) {
    console.error(error);
  }
};
