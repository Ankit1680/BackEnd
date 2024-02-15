import { Router } from "express";
import { registerUser } from "../controllers/userController.js";

//router object
const router = Router();

router.route("/register").post(registerUser);

export default router;
