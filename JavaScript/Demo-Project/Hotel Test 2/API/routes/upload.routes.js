// API/routes/upload.routes.js
import express from 'express';
import multer from 'multer';
import { uploadByLink, uploadFromDevice } from '../controllers/upload.controller.js';
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Get the absolute path to the project's root directory (API)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));

const router = express.Router();

// Ensure the uploads directory exists and set it as the destination for multer
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const photosMiddleware = multer({ dest: uploadsDir });

// CORRECTED PATH: Changed from '/upload-by-link' to '/by-link'
router.post('/by-link', uploadByLink);

// CORRECTED PATH: Changed from '/upload' to '/'
router.post('/', photosMiddleware.array('photos', 100), uploadFromDevice);

export default router;