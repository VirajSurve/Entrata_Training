// src/components/Pages/PlacesFormPage.jsx
import { useContext, useEffect, useState } from "react";
import Perks from "../../Perks";
import PhotosUploader from "../../PhotosUploader";
import AccountNav from "../../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
import api from "../../api/axiosConfig.js";

export default function PlacesFormPage() {
    const { id } = useParams();
    const { user } = useContext(UserContext);

    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [addedPhotoes, setAddedPhotoes] = useState([]);
    const [description, setDiscription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [maxGuests, setMaxGuest] = useState(1);
    const [price, setPrice] = useState(100);
    const [rate, setRate] = useState(4.5);
    const [reviews, setReviews] = useState(10);
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!id) return;
        api.get(`/places/${id}`).then(({ data }) => {
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotoes(data.photos);
            setDiscription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuest(data.maxGuests);
            setPrice(data.price);
            setRate(data.rate);
            setReviews(data.reviews);
            setX(data.X);
            setY(data.Y);
        });
    }, [id]);

    // --- HELPER FUNCTIONS (This was the missing part) ---
    function inputHeader(text) {
        return <h2 className="text-2xl mt-4">{text}</h2>;
    }

    function inputDescription(text) {
        return <p className="text-sm text-gray-500">{text}</p>;
    }

    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }
    // --- END OF HELPER FUNCTIONS ---

    async function savePlace(e) {
        e.preventDefault();
        const placeData = {
            title, address, addedPhotoes, description, perks,
            extraInfo, checkIn, checkOut, maxGuests, price,
            rate, reviews, X, Y, name: user.name
        };

        try {
            if (id) {
                await api.put('/places', { id, ...placeData });
            } else {
                await api.post("/places", placeData);
            }
            setRedirect(true);
        } catch (error) {
            console.error("Failed to save place:", error);
            alert("Error saving place.");
        }
    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }

    return (
        <>
            <AccountNav />
            <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">
                <form onSubmit={savePlace}>
                    {preInput("Title", "Title for your place. It should be short and catchy.")}
                    <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="text" placeholder="e.g., My Lovely Apartment" value={title} onChange={e => setTitle(e.target.value)} />

                    {preInput("Address", "Address to this place.")}
                    <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />

                    {preInput("Photos", "The more, the better.")}
                    <PhotosUploader addedPhotoes={addedPhotoes} onChange={setAddedPhotoes} />

                    {preInput("Description", "Description of the place.")}
                    <textarea className="bg-gray-200 rounded-xl py-1 px-2 w-full border my-1" value={description} onChange={e => setDiscription(e.target.value)} />

                    {preInput("Perks", "Select all the perks of your place.")}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
                        <Perks selected={perks} onChange={setPerks} />
                    </div>

                    {preInput("Extra Info", "House rules, etc.")}
                    <textarea className="bg-gray-200 rounded-xl py-1 px-2 w-full border my-1" value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />

                    {preInput("Check-in, Check-out, Max Guests", "Add check-in and check-out times, and number of guests.")}
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                        <div>
                            <h3 className="mt-2 -mb-1">Check in Time</h3>
                            <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="text" placeholder="14:00" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Check out Time</h3>
                            <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="text" placeholder="11:00" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Max Guests</h3>
                            <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="number" value={maxGuests} onChange={e => setMaxGuest(e.target.value)} />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Price per Night ($)</h3>
                            <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="number" value={price} onChange={e => setPrice(e.target.value)} />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Rating</h3>
                            <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="number" step="0.1" value={rate} onChange={e => setRate(e.target.value)} />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Reviews Count</h3>
                            <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="number" value={reviews} onChange={e => setReviews(e.target.value)} />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Latitude (X)</h3>
                            <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="number" step="any" value={X} onChange={e => setX(e.target.value)} />
                        </div>
                        <div>
                            <h3 className="mt-2 -mb-1">Longitude (Y)</h3>
                            <input className="bg-gray-200 rounded-full py-1 px-2 w-full border my-1" type="number" step="any" value={Y} onChange={e => setY(e.target.value)} />
                        </div>
                    </div>

                    <div className="text-center mb-4">
                        <button className="bg-primary rounded-full py-2 px-6 text-white font-bold">Save</button>
                    </div>
                </form>
            </div>
        </>
    );
}