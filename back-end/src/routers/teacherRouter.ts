import { Router } from "express";
import { getNameTeacher } from "../controllers/teacherController.js";

const teacherRouter = Router();

teacherRouter.get("/teachers-names", getNameTeacher);

export default teacherRouter;