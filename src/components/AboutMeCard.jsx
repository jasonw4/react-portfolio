import React, { useState, useEffect } from 'react';
import "../styles/AboutMeCard.css";

export const AboutMeCard = () => {
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        setShowCard(true);
    }, []);

    return (
        <div className={`abcard ${showCard ? 'show' : ''}`}>
            <h1><center>Where Am I From?</center></h1>
            <h3><center>West Haverstraw, NY</center></h3>
            <h1><center>What Am I Interested In?</center></h1>
            <h3><center>My main interests lie in software engineering as well as machine learning engineering. 
            I like to be challenged with new and intriguiging problems and ideas that help me grow as a programmer, learner, and creator.</center></h3>
            <h1><center>What's My Goal?</center></h1>
            <h3><center>I want to use my knowledge to impact the world in a meaningful way.</center></h3>
        </div>
    )
}