import { Router } from "express";
import { login, logout } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.route("/login").post(login);

// secure route
authRouter.route("/logout").post(verifyJWT, logout);

export default authRouter;