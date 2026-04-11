import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserContext'; 
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import './AnyTime21.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function AnyTime() {
    const { startDate, setStartDate, endDate, setEndDate } = useContext(UserContext);
    const [openDate, setOpenDate] = useState(false);

    const handleChange = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
        console.log(startDate);
    };

    const handleClick = () => {
        setOpenDate((prev) => !prev);
    };

    return (
        <div className="cont21">
            <span onClick={handleClick} className="calender21">
                {`${format(startDate, 'MMM dd, yyyy')} to ${format(endDate, 'MMM dd, yyyy')}`}
            </span>
            {openDate && (
                <DateRangePicker
                    className='dateRange21'
                    ranges={[{ startDate, endDate, key: 'selection' }]}
                    onChange={handleChange}
                    minDate={new Date()}
                />
            )}
        </div>
    );
}

export default AnyTime;
