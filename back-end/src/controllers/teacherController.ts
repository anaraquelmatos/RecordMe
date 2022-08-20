import { Request, Response } from "express";
import * as teacherService from "../services/teacherService.js";

export async function getNameTeacher(req: Request, res: Response) {

    const teachers = await teacherService.getAllNames();

    res.send(teachers);
}