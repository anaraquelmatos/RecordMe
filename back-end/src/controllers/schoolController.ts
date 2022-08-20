import { Request, Response } from "express";
import * as schoolService from "../services/schoolService.js";

export async function getNameSchool(req: Request, res: Response) {

    const schools = await schoolService.getAllNames();

    res.send(schools);
}