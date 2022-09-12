import mongoose from "mongoose";

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  isAggressive: {
    type: Boolean
  },
  isSocialDog: {
    type: Boolean
  },
  favoriteToys: {
    type: [String]
  },
  isBoss: {
    type: Boolean
  },
  placeId: {
    type: String
  }
});

export default mongoose.model("Dog", DogSchema);
