import React from 'react';
import "../styles/pages/Experiences.css";
import { InfoCard } from "../components/InfoCard";
import BU from "../bu.png";

export const Experiences = () => {
    return (
        <div className="exp">
            <InfoCard name="Course Assistant" img={BU} desc={<h1>Hi</h1>}/>
        </div>
    )
}