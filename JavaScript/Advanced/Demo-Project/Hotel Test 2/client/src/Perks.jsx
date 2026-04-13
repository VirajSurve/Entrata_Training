// src/Perks.jsx
import mountain from "./icons/mountain.png";
import garden from "./icons/garden.png";
import car from "./icons/car.png";
import bath from "./icons/bathtub.png";
import washer from "./icons/washer.png";
import workspace from "./icons/workspace.png";
import pets from "./icons/footstep.png";
import hottub from "./icons/hottub.png";
import pool from "./icons/pool.png";
import ice from "./icons/ice.png";
import TV from "./icons/TV.png";
import balcony from "./icons/balcony.png";
import cctv from "./icons/cctv.png";
import beach from "./icons/beach.png";
import windmill from "./icons/windmill.png";
import modern from "./icons/modern.png";
import outside from "./icons/outside.png";
import island from "./icons/island.png";
import lake from "./icons/lake.png";
import skiing from "./icons/skiing.png";
import castles from "./icons/castles.png";
import caves from "./icons/caves.png";
import camping from "./icons/camping.png";
import arctic from "./icons/arctic.png";
import desert from "./icons/desert.png";
import barns from "./icons/barns.png";
import lux from "./icons/Lux.png";

export default function Perks({selected, onChange}){

    function handleCheckboxClick(e){
        const {checked, name} = e.target;
        if (checked) {
            onChange([...selected, name]);
        } else {
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }

    return (
        <>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                {/* CORRECTED: onChange is on the input, not onClick on the label */}
                <input type="checkbox" checked={selected.includes("wifi")} name="wifi" onChange={handleCheckboxClick} />
                {/* CORRECTED: JSX uses camelCase for attributes like strokeLinecap */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                </svg>
                <span>Wifi</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Mountain view")} name="Mountain view" onChange={handleCheckboxClick} />
                <img className="size-7" src={mountain} alt="mountain icon" />
                <span>Mountain view</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Garden view")} name="Garden view" onChange={handleCheckboxClick} />
                <img className="size-7" src={garden} alt="garden icon" />
                <span>Garden view</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Car view")} name="Car view" onChange={handleCheckboxClick} />
                <img className="size-7" src={car} alt="car icon" />
                <span>Car view</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Bath")} name="Bath" onChange={handleCheckboxClick} />
                <img className="size-7" src={bath} alt="bath icon" />
                <span>Bath</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Paid washer – In building")} name="Paid washer – In building" onChange={handleCheckboxClick} />
                <img className="size-7" src={washer} alt="washer icon" />
                <span>Paid washer – In building</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Dedicated workspace")} name="Dedicated workspace" onChange={handleCheckboxClick} />
                <img className="size-7" src={workspace} alt="workspace icon" />
                <span>Dedicated workspace</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Pets allowed")} name="Pets allowed" onChange={handleCheckboxClick} />
                <img className="size-7" src={pets} alt="pets icon" />
                <span>Pets allowed</span>
            </label>
             <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Private hot tub")} name="Private hot tub" onChange={handleCheckboxClick} />
                <img className="size-7" src={hottub} alt="hottub icon" />
                <span>Private hot tub</span>
            </label>
             <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Pool")} name="Pool" onChange={handleCheckboxClick} />
                <img className="size-7" src={pool} alt="pool icon" />
                <span>Pool</span>
            </label>
             <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("AC – split-type system")} name="AC – split-type system" onChange={handleCheckboxClick} />
                <img className="size-7" src={ice} alt="ac icon" />
                <span>AC – split-type system</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Private back garden")} name="Private back garden" onChange={handleCheckboxClick} />
                <img className="size-7" src={garden} alt="garden icon" />
                <span>Private back garden</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Free parking")} name="Free parking" onChange={handleCheckboxClick} />
                <img className="size-7" src={car} alt="parking icon" />
                <span>Free parking</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("38-inch HDTV")} name="38-inch HDTV" onChange={handleCheckboxClick} />
                <img className="size-7" src={TV} alt="tv icon" />
                <span>38-inch HDTV</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Private balcony")} name="Private balcony" onChange={handleCheckboxClick} />
                <img className="size-7" src={balcony} alt="balcony icon" />
                <span>Private balcony</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Exterior security")} name="Exterior security" onChange={handleCheckboxClick} />
                <img className="size-7" src={cctv} alt="cctv icon" />
                <span>Exterior security</span>
            </label>
            {/* ... Add onChange={handleCheckboxClick} to all other checkboxes ... */}
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Beach")} name="Beach" onChange={handleCheckboxClick} />
                <img className="size-7" src={beach} alt="beach icon"/>
                <span>Beach</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Windmill")} name="Windmill" onChange={handleCheckboxClick} />
                <img className="size-7" src={windmill} alt="windmill icon"/>
                <span>Windmill</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Modern")} name="Modern" onChange={handleCheckboxClick} />
                <img className="size-7" src={modern} alt="modern icon"/>
                <span>Modern</span>
            </label>
             <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Outside")} name="Outside" onChange={handleCheckboxClick} />
                <img className="size-7" src={outside} alt="outside icon"/>
                <span>Outside</span>
            </label>
             <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Island")} name="Island" onChange={handleCheckboxClick} />
                <img className="size-7" src={island} alt="island icon"/>
                <span>Island</span>
            </label>
             <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Lake")} name="Lake" onChange={handleCheckboxClick} />
                <img className="size-7" src={lake} alt="lake icon"/>
                <span>Lake</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Skiing")} name="Skiing" onChange={handleCheckboxClick} />
                <img className="size-7" src={skiing} alt="skiing icon"/>
                <span>Skiing</span>
            </label>
             <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Castles")} name="Castles" onChange={handleCheckboxClick} />
                <img className="size-7" src={castles} alt="castles icon"/>
                <span>Castles</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Camping")} name="Camping" onChange={handleCheckboxClick} />
                <img className="size-7" src={camping} alt="camping icon"/>
                <span>Camping</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Arctic")} name="Arctic" onChange={handleCheckboxClick} />
                <img className="size-7" src={arctic} alt="arctic icon"/>
                <span>Arctic</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Desert")} name="Desert" onChange={handleCheckboxClick} />
                <img className="size-7" src={desert} alt="desert icon"/>
                <span>Desert</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Barns")} name="Barns" onChange={handleCheckboxClick} />
                <img className="size-7" src={barns} alt="barns icon"/>
                <span>Barns</span>
            </label>
            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" checked={selected.includes("Luxurious")} name="Luxurious" onChange={handleCheckboxClick} />
                <img className="size-7" src={lux} alt="luxurious icon"/>
                <span>Luxurious</span>
            </label>
        </>
    );
}