import React from 'react';
import "../styles/SkillCard.css";

export const SkillCard = (props) => {
    const name = props.name
    const img = props.img
    return (
        <div className = "card">
            <h1>{name}</h1>
            <img className="logo" src={img} alt="dne"></img>
        </div>
    )
}