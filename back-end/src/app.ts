import cors from "cors";
import express from "express";
import "express-async-errors";

import router from "./routers/index.js";
import  errorHandler from "./middlewares/errorHandlerMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(errorHandler);

export default app;