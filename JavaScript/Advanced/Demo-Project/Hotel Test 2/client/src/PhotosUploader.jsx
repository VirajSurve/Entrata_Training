// src/PhotosUploader.jsx
import { useState } from "react";
import api from "./api/axiosConfig.js"; // <-- Import client

export default function PhotosUploader({ addedPhotoes, onChange }) {
    const [photoLink, setPhotoLink] = useState("");

    async function addPhotoByLink(e) {
        e.preventDefault();
        try {
            // Use new endpoint
            const { data: filename } = await api.post("/upload/by-link", { link: photoLink });
            onChange(prev => [...prev, filename]);
            setPhotoLink("");
        } catch (error) {
            console.error("Error adding photo by link", error);
            alert("Could not add photo from link.");
        }
    }

    async function uploadPhoto(e) {
        const files = e.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append('photos', files[i]);
        }

        try {
            // Use new endpoint
            const { data: filenames } = await api.post('/upload', data, {
                headers: { 'Content-type': 'multipart/form-data' }
            });
            onChange(prev => [...prev, ...filenames]);
        } catch (error) {
            console.error("Error uploading photos", error);
            alert("Upload failed.");
        }
    }
    
    // removePhoto and selectAsMain remain the same logistically

    function removePhoto(e, fileName) {
        e.preventDefault();
        onChange([...addedPhotoes.filter(photo => photo !== fileName)]);
    }

    function selectAsMain(e, fileName) {
        e.preventDefault();
        const addedPhotosWithoutSelected = addedPhotoes.filter(photo => photo !== fileName);
        const newAddedPhotos = [fileName, ...addedPhotosWithoutSelected];
        onChange(newAddedPhotos);
    }

    return (
        <>
            <div className="flex gap-2 mb-4">
                <input
                    className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1"
                    type="text"
                    placeholder="Add using a link..."
                    value={photoLink}
                    onChange={e => setPhotoLink(e.target.value)}
                />
                <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl">
                    Add&nbsp;photo
                </button>
            </div>
            <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 mt-4">
                {addedPhotoes.length > 0 && addedPhotoes.map(link => (
                    <div className="h-32 flex relative" key={link}>
                        <img className="w-full rounded-2xl object-cover" src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${link}`} alt="Uploaded" />
                        <button onClick={e => removePhoto(e, link)} className="cursor-pointer absolute bottom-2 right-2 text-white bg-black bg-opacity-50 rounded-xl p-1">
                            {/* SVG for remove */}
                        </button>
                        <button onClick={e => selectAsMain(e, link)} className="cursor-pointer absolute bottom-2 left-2 text-white bg-black bg-opacity-50 rounded-xl p-1">
                            {/* SVG for star */}
                        </button>
                    </div>
                ))}
                <label className="h-32 flex justify-center items-center gap-2 border-2 bg-transparent rounded-2xl p-8 text-2xl text-gray-600 cursor-pointer">
                    <input onChange={uploadPhoto} multiple type="file" className="hidden" />
                    {/* SVG for upload */}
                    Upload
                </label>
            </div>
        </>
    );
}