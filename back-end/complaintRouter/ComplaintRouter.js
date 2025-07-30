import express from "express";
import { addComplaint, getAllComplaints } from "../complaintController/complaintController.js";

const route = express.Router();

route.post("/complaints", addComplaint);
route.get("/allComplaints", getAllComplaints);

export default route;
