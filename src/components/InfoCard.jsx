import React from 'react';
import "../styles/InfoCard.css";

export const InfoCard = (props) => {
    const name = props.name
    const img = props.img
    const desc = props.desc
    return (
        <div className = "card">
            <h1>{name}</h1>
            <img className="logo" src={img} alt="dne"></img>
            <div>{desc}</div>
        </div>
    )
}