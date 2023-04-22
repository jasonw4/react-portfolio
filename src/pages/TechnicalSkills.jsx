import React, { useState } from 'react';
import "../styles/pages/TechnicalSkills.css";
import { SkillCard } from '../components/SkillCard';

export const TechnicalSkills = () => {
    const pages = [
        {
            title: <h1><center>Over the course of my CS career, I have continued to build and grow my technical skills.</center></h1>,
            subTitle: <h2><center>Click the buttons to take a closer look!</center></h2>,
            skills: []
        },
        {
            title: <h1>Programming Languages</h1>,
            skills: [<SkillCard key={1} name="Python" />, <SkillCard key={2} name="Java"/>, <SkillCard key={3} name="HTML/CSS/JS" />, <SkillCard key={4} name="Swift"/>]
        },
        {
            title: <h1>Frameworks/Libraries</h1>,
            skills: [<SkillCard key={1} name="React.js"/>, <SkillCard key={2} name="Node.js"/>, <SkillCard key={3} name="NumPy"/>, <SkillCard key={4} name="SwiftUI"/>]
        },
        {
            title: <h1>Dev Tools</h1>,
            skills: [<SkillCard key={1} name="Git/Github"/>, <SkillCard key={2} name="Visual Studio Code"/>, <SkillCard key={3} name="Jupyter Notebooks"/>, <SkillCard key={4} name="Firebase"/>]
        }
    ];

    const [page, setPage] = useState(0);

    return (
        <div className="tskills">
            <div className="wrapper">
            <div className="content">
                <div><center>
                    {pages[page].title}
                    {pages[page].subTitle}
                </center></div>
                <div><center>
                    {pages[page].skills}
                </center></div>
            </div>
            <div className="buttons">
                <button className="button" onClick={() => setPage(0)}>Intro</button>
                <button className="button" onClick={() => setPage(1)}>Programming Languages</button>
                <button className="button" onClick={() => setPage(2)}>Frameworks/Libraries</button>
                <button className="button" onClick={() => setPage(3)}>Dev Tools</button>
            </div>
            </div>
        </div>
    )
}