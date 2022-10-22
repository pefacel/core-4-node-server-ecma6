import mongoose from "mongoose";
 
const { Schema, model } = mongoose;

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});


export const Card = model("Card", cardSchema)

 