import app from "../index.js";

export default function handler(req, res) {
  // Delegate the request to the Express app
  return app(req, res);
}
