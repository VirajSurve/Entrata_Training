import "./Any_where.css";
import React from 'react';
import pick from "./search (1).png";
function Anywhere() {
    return (
        <div>
            <div className="searchkar">
               <input className="any_input" type="text" placeholder="  Search..." />
                <img className="any_image" src={pick} alt="Search Icon" />
            </div>
        </div>
    );
}

export default Anywhere;