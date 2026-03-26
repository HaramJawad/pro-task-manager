import { useState, useEffect } from 'react';

const UseGreeting = () => {
    const [data, setData] = useState({ text: "", emoji: "" });

    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();
            let text = "";
            let emoji = "";

            if (hour >= 5 && hour < 12) {
                text = "GOOD MORNING";
                emoji = "☀️";
            } else if (hour >= 12 && hour < 17) {
                text = "GOOD AFTERNOON";
                emoji = "🌤️";
            } else if (hour >= 17 && hour < 21) {
                text = "GOOD EVENING";
                emoji = "🌅";
            } else {
                text = "GOOD NIGHT";
                emoji = "🌙";
            }

            setData({ text, emoji });
        };

        updateGreeting();
        const interval = setInterval(updateGreeting, 60000); // Har minute check karega

        return () => clearInterval(interval); // Cleanup function
    }, []);

    return data; // Yeh hook sirf data (text aur emoji) wapas karega
};

export default UseGreeting;