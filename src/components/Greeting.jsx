import React, { useState, useEffect } from 'react';
import UseGreeting from '../hooks/UseGreeting'; // Hook import karein
import "./Greeting.css"
const Greeting = () => {
    // extracting logic from hook
    const { text, emoji } = UseGreeting();
    return (
        <div className="greeting-container">
            <h3 className="greetingText">
                {text}
            </h3>
            <span className="greeting-emoji">{emoji}</span>
        </div>
    );
};

export default Greeting;