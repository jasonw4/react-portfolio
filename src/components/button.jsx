import { React, useState } from 'react';
import "../styles/button.css"
import { AboutMe } from '../pages/AboutMe'

export const Button = (props) => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    if (props.name === "About Me"){
        return (
            <button className = "custButton1" onClick={handleClick}>
                <div className = "header">{props.name}</div>
                {clicked && <AboutMe/>}
            </button>
        )
    }
}