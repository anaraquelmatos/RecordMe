import { Router } from "express";
import schoolRouter from "./schoolRouter.js";
import teacherRouter from "./teacherRouter.js";

const router = Router();

router.use(schoolRouter);
router.use(teacherRouter);

export default router;