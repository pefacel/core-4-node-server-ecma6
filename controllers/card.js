import { Card } from "../models/card.js";






export const getCards = async (_req, res) => {
  try {
    const cards = await Card.find();

    res.status(200).json(cards);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error de servidor" });
  }
};


