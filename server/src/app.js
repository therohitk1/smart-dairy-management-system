import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./utils/ErrorMiddleware.js";

const app = express();

app.use(cors({}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Handle errors globally using the ErrorMiddleware
app.use(ErrorMiddleware);

export { app };