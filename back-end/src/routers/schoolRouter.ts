import { Router } from "express";
import { getNameSchool } from "../controllers/schoolController.js";

const schoolRouter = Router();

schoolRouter.get("/schools-names", getNameSchool);

export default schoolRouter;