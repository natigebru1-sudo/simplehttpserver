import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port1 = process.env.EXPRESS_PORT || 3000;

app.use(express.static(path.join(__dirname, "folder")));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "folder", "index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "folder", "about.html"));
});

app
  .route("/contact")
  .get((req, res) => {
    res.status(200).sendFile(path.join(__dirname, "folder", "contactUs.html"));
  })
  .post((req, res) => {
    console.log(req.body);
    res.status(201).sendFile(path.join(__dirname, "folder", "contactUs.html"));
  });

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "folder", "404.html"));
});

app.listen(port1, () => {
  console.log(`Server running on port ${port1}`);
  console.log(`http://localhost:${port1}/`);
});
