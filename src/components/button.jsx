import { React, useState } from 'react';
import "../styles/button.css"
import { AboutMe } from '../pages/AboutMe';
import { Experiences } from '../pages/Experiences'

export const Button = (props) => {
    const [clicked1, setClicked1] = useState(false)
    const [clicked2, setClicked2] = useState(false)
    const [clicked3, setClicked3] = useState(false)
    const [clicked4, setClicked4] = useState(false)
    const [clicked5, setClicked5] = useState(false)
    const handleClick1 = () => {
        setClicked1(!clicked1)
    }
    const handleClick2 = () => {
        setClicked2(!clicked2)
    }
    if (props.name === "About Me"){
        return (
            <button className = "custButton1" onClick={handleClick1}>
                <div className = "header">{props.name}</div>
                {clicked1 && <AboutMe/>}
            </button>
        )
    }
    else if (props.name === "Experiences") {
        return (
            <button className = "custButton2" onClick={handleClick2}>
                <div className = "header">{props.name}</div>
                {clicked2 && <Experiences/>}
            </button>
        )
    }
}