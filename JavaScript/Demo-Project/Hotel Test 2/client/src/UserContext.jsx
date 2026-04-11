// src/UserContext.jsx
import { createContext, useEffect, useState } from "react";
import api from "./api/axiosConfig"; // <-- Import the new api client

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    const [icon, setIcon] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guests, setGuests] = useState(1);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Use the new endpoint and the centralized client
                const { data } = await api.get('/auth/profile');
                setUser(data);
            } catch (error) {
                // This will fail if the cookie is invalid or expired, which is expected
                console.error("Not logged in or token expired");
            } finally {
                setReady(true);
            }
        };

        if (!user) {
            fetchUser();
        }
    }, [user]); // Depend on user state

    return (
        <UserContext.Provider value={{
            user, setUser, ready,
            icon, setIcon,
            startDate, setStartDate,
            endDate, setEndDate,
            guests, setGuests
        }}>
            {children}
        </UserContext.Provider>
    );
}