import React, { useState } from 'react';
import "../styles/pages/TechnicalSkills.css";
import { SkillCard } from '../components/SkillCard';
import PY from "../images/python.gif";
import JV from "../images/java.gif";
import HCJ from "../images/hcj.gif";
import SW from "../images/swift.png";
import RT from "../images/react.gif";
import ND from "../images/node.gif";
import NP from "../images/numpy.png";
import SUI from "../images/swiftui.png";
import GT from "../images/git.png";
import VS from "../images/vscode.png";
import JN from "../images/jupyter.png";
import FB from "../images/firebase.gif";

export const TechnicalSkills = () => {
    const pages = [
        {
            title: <h1><center>Over the course of my CS career, I have continued to build and grow my technical skills.</center></h1>,
            subTitle: <h2><center>Click the buttons to take a closer look!</center></h2>,
            skills: []
        },
        {
            title: <h1>Programming Languages</h1>,
            skills: [<SkillCard key={1} name="Python" img={PY} />, <SkillCard key={2} name="Java" img={JV}/>, <SkillCard key={3} name="HTML/CSS/JS" img={HCJ}/>, <SkillCard key={4} name="Swift" img={SW}/>]
        },
        {
            title: <h1>Frameworks/Libraries</h1>,
            skills: [<SkillCard key={1} name="React.js" img={RT}/>, <SkillCard key={2} name="Node.js" img={ND}/>, <SkillCard key={3} name="NumPy" img={NP}/>, <SkillCard key={4} name="SwiftUI" img={SUI}/>]
        },
        {
            title: <h1>Dev Tools</h1>,
            skills: [<SkillCard key={1} name="Git/Github" img={GT}/>, <SkillCard key={2} name="Visual Studio Code" img={VS}/>, <SkillCard key={3} name="Jupyter Notebooks" img={JN}/>, <SkillCard key={4} name="Firebase" img={FB}/>]
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
                <div className="skillcard">
                    {pages[page].skills}
                </div>
            </div>
            <div className="buttons">
                <button className="x" onClick={() => setPage(0)}>Intro</button>
                <button className="x" onClick={() => setPage(1)}>Programming Languages</button>
                <button className="x" onClick={() => setPage(2)}>Frameworks/Libraries</button>
                <button className="x" onClick={() => setPage(3)}>Dev Tools</button>
            </div>
            </div>
        </div>
    )
}