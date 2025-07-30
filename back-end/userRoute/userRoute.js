import express from "express"
import create from "../userController/userController.js"

const route = express.Router();

route.post("/signIn", create)

export default route;