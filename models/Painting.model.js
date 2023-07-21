const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const paintingSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    priceTag: {
      type: Number,
      required: [true, "Price tag is required."],
    },
    priceTagVisibility:{
        type: String,
        required: [true, "Price visibility is required"],
        enum: ["Visible", "Hidden"]
    },
    dimensions: {
      type: String,
      required: [true, "Dimensions are required"],
    },
    date:{
        type: Number,
        required: [true, "Date is required"],
        enum : [2019,2020,2021,2022,2023]
    },
    artStyle:{
        type: String,
        required: false,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Painting = model("Painting", paintingSchema);

module.exports = Painting;
