// routes/upload.routes.js
import express from "express";
import multer from "multer";
import { uploadByLink, uploadFromDevice } from "../controllers/upload.controller.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));

const router = express.Router();

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const photosMiddleware = multer({ dest: uploadsDir });

router.post("/by-link", uploadByLink);
router.post("/", photosMiddleware.array('photos', 100), uploadFromDevice);

export default router;