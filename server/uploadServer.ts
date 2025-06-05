import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
const upload = multer({ dest: path.resolve("uploads") });

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ success: false });
  }
  if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads", { recursive: true });
  }
  res.json({ success: true, url: `/uploads/${file.filename}` });
});

const port = Number(process.env.PORT) || 3001;
app.listen(port, () => {
  console.log(`upload server running at http://localhost:${port}`);
});
