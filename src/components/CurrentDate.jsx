import React, { useState, useEffect } from 'react';
import './CurrentDate.css'
function CurrentDate({dateText}) {
    const [dateStr, setDateStr] = useState("");
    useEffect(() => {
        const formatDate = () => {
            const now = new Date();
            const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
            setDateStr(new Intl.DateTimeFormat('en-US', options).format(now));
        };

        formatDate();
        const interval = setInterval(formatDate, 60000);
        return () => clearInterval(interval);
    }, []);
    return (
        <span className="current-date-text">{dateStr} . {dateText}</span>
    )
}

export default CurrentDate