import React, { useContext } from "react";
import './Add_guest.css';
import { UserContext } from "../../UserContext";

function Add_guest() {
    const { guests, setGuests } = useContext(UserContext);

    const increase = () => {
        setGuests(prevGuests => prevGuests + 1);
    };

    const decrease = () => {
        if (guests > 1) {  // Ensure guests do not go below 1
            setGuests(prevGuests => prevGuests - 1);
        }
    };

    return (
        <div className="cont23">
            <div className="cover23">
                <h2 className="heading23a">{guests}</h2>
                <button className="button23" onClick={decrease}>-</button>
                <button className="button23" onClick={increase}>+</button>
            </div> 
        </div>
    );
}

export default Add_guest;
