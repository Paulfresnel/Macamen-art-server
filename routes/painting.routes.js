const express = require("express");
const router = express.Router();
const Painting = require("../models/Painting.model");
const fileUploader = require("../config/cloudinary.config")



router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
    // console.log("file is: ", req.file)
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    
    // Get the URL of the uploaded file and send it as a response.
    // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
    
    res.json({ fileUrl: req.file.path });
  });


router.get("/painting", async (req,res)=>{
  const paintings = await Painting.find();
  console.log(paintings);
  res.json({paintings: paintings})
})

router.post("/painting", async (req,res)=>{
  const {title, description, imageUrl, date, artStyle, priceTag, priceTagVisibility, dimensions} = req.body;
  const newPainting = await Painting.create({title, description, imageUrl, date, artStyle, priceTag, priceTagVisibility, dimensions});
  console.log("new painting created in DB:", newPainting);
  res.json("Painting successfully created in DB")
})

router.put('/painting/:paintingId', async (req,res)=>{
  const { painting } =req.body;
  const { paintingId } = req.params;
  const paintingUpdated = await Painting.updateOne(paintingId, {painting}, {new:true});
  console.log("succesfully updated", paintingUpdated);
})

router.delete("/painting/:paintingId", async (req,res)=>{
  const {paintingId} = req.params;
  const deletedPainting = await Painting.deleteOne(paintingId);
  console.log("succesfully deleted");
})

module.exports = router;
