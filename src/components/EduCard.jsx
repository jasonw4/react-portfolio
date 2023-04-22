import { React, useState } from 'react';
import BU from "../bu.png";
import "../styles/EduCard.css";


export const EduCard = () => {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };

    return (
        <div className="educard">
            <div className="image-container">
                <img className="logo" src={BU} alt="bu" />
            </div>
            <div className="info">
                {!showMoreInfo && (
                    <>
                        <h1><center>I currently attend Boston University, and will be graduating with the following:</center></h1>
                        <h3><center>Master of Science in Computer Science ~ 2025</center></h3>
                        <h3><center>Bachelor of Arts in Computer Science ~ 2025</center></h3>
                        <center><button className="button" onClick={toggleMoreInfo}>Selected Coursework</button></center>
                    </>
                )}
                {showMoreInfo && (
                    <div className="more-info">
                        <h1>Graduate</h1>
                        <ul>
                            <li>CS 542 - Intro to Machine Learning</li>
                        </ul>
                        <h1>Undergraduate</h1>
                        <ul><center>
                            <li>CS 411 - Software Engineering</li>
                            <li>CS 112 - Intro to CS 2</li>
                            <li>CS 330 - Intro to Analysis of Algorithms</li>
                            <li>CS 237 - Probability in CS</li>
                        </center></ul>
                        <center><button className="button" onClick={toggleMoreInfo}>Academic Degrees</button></center>
                    </div>
                )}
            </div>
        </div>
    )
}