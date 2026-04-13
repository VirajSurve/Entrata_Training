// controllers/upload.controller.js
import imageDownloader from "image-downloader";
import path from "path";
import { fileURLToPath } from 'url';
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
// Go up two directories from controllers/ to the project root
const __dirname = path.dirname(path.dirname(__filename)); 

export const uploadByLink = async (req, res) => {
    const { link } = req.body;
    if (!link) {
        return res.status(400).json({ message: "Please provide a link" });
    }
    const newName = 'photo' + Date.now() + '.jpg';
    const dest = path.join(__dirname, "uploads", newName);
    
    try {
        await imageDownloader.image({ url: link, dest });
        res.status(200).json(newName); // Only send the filename back
    } catch (error) {
        res.status(500).json({ message: "Image download failed", error: error.message });
    }
};

export const uploadFromDevice = (req, res) => {
    const uploadedFiles = [];
    if (req.files && req.files.length > 0) {
        for (let i = 0; i < req.files.length; i++) {
            const { path: tempPath, originalname } = req.files[i];
            const parts = originalname.split('.');
            const ext = parts[parts.length - 1];
            const newPath = tempPath + '.' + ext;
            fs.renameSync(tempPath, newPath);
            // We want to send back just the filename, not the full path
            uploadedFiles.push(path.basename(newPath));
        }
    }
    res.status(200).json(uploadedFiles);
};