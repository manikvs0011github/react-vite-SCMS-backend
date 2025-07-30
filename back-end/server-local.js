// Local-only runner so you can `node server-local.js` during development.
// This file is NOT used on Vercel.
import app from "./index.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Local server listening on http://localhost:${PORT}`);
});
