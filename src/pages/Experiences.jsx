import React from 'react';
import "../styles/pages/Experiences.css";
import { InfoCard } from "../components/InfoCard";
import BU from "../images/bu.png";
import VT from "../images/vt.png";
import CP from "../images/cp.png";
import CU from "../images/cu.png";

export const Experiences = () => {
    return (
        <div className="exp">
            <div className="cards">
                <InfoCard className = "card" name="Course Assistant" img={BU} desc={
                <ul>
                    <li>Grade problem sets, proctor exams, and hold office hours for over 200 students</li>
                    <li>Assist in holding/running discussion sections consisting of 30+ students</li>
                    <li>Spring 2023: CS132/Linear Algebra</li>
                </ul>}/>
                <InfoCard className = "card" name="Tutor" img={VT} desc={
                <ul>
                    <li>Tutoring 10+ subjects including computer programming, linear algebra, calculus, etc.</li>
                    <li>Assess students’ strengths and weaknesses, help them increase test scores by over 50%</li>
                    <li>Prepare study guides and material catered to the individual student</li>
                </ul>}/>
            </div>
            <div className="cards">
                <InfoCard className = "card" name="Advanced Technical Prep Student" img={CP} desc={
                <ul>
                    <li>Participate in 10 week interview prep program</li>
                    <li>Analyze and implement advanced algorithms in preparation for technical interviews</li>
                </ul>}/>
                <InfoCard className = "card" name="SHAPE Student" img={CU} desc={
                <ul>
                    <li>Explored fundamentals of CS and web dev in 3 week accelerated program</li>
                    <li>Built a front-end website and a Python-based Minesweeper game.</li>
                    <li>Connected with 5+ Columbia students and alumni, gaining insight on the field of Computer Science</li>
                </ul>}/>
            </div>
        </div>
    )
}