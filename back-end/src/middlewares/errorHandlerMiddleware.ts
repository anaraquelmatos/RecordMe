import { Request, Response, NextFunction } from "express";

export default function errorHandler(error, req: Request, res: Response, next: NextFunction) {

    if (error.type === "unauthorized") {
        return res.status(401).send({ message: error.message });
    }
    if (error.type === "not found") {
        return res.status(404).send({ message: error.message });
    }
    if (error.type === "conflict") {
        return res.status(409).send({ message: error.message });
    }
    if (error.response) {
        return res.send(error.message).status(error.response.status);
    }

    console.log(error);

    res.sendStatus(500);
}