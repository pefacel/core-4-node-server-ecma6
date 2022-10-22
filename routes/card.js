import { Router } from "express";
import { getCards } from "../controllers/card.js";

const cardRoutes = Router();



cardRoutes.get("/",getCards)




export default cardRoutes