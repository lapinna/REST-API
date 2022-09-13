import catModel from "../models/catModel.js";

export const create = async (req, res) => {
  try {
    const cat = new catModel({ ...req.body });
    await cat.save();
    res.status(201).send("Resource created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const cats = await catModel.find({});
    res.status(202).json(cats);
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (req, res) => {
  try {
    const cat = await catModel.findById(req.params.id);
    res.status(200).json(cat);
  } catch (error) {
    console.error(error);
  }
};

export const updateById = async (req, res) => {
  try {
    const updatedCats = await catModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCats);
  } catch (error) {
    console.error(error);
  }
};

export const deleteById = async (req, res) => {
  try {
    await catModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Resource deleted");
  } catch (error) {
    console.error(error);
  }
};

export const deleteAll = async (req, res) => {
  try {
    await catModel.deleteMany({});
    res.status(200).send("All resources deleted");
  } catch (error) {
    console.error(error);
  }
};
