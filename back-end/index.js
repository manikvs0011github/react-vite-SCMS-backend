import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./complaintRouter/ComplaintRouter.js";

const app = express();

// Basic middleware
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// Ensure DB is connected before handling routes
async function connectDB() {
  const uri = process.env.MONGOURI;
  if (!uri) {
    console.error("MONGOURI is not set in environment variables");
    return;
  }
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2) {
    return;
  }
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    console.log("DB Connected Successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err?.message || err);
  }
}

// Hook to connect on each cold start / request (no-op if already connected)
app.use(async (req, res, next) => {
  try { await connectDB(); } catch (_) {}
  next();
});

// Health / root route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Mount your API routes
app.use("/api", route);

// IMPORTANT: Do NOT call app.listen() on Vercel. Just export the app.
export default app;
