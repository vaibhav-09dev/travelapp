import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

const Re = mongoose.models.Re || mongoose.model("Re", ReviewSchema);

export default Re;