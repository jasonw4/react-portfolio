import React from 'react';
import "../styles/pages/Projects.css";
import { InfoCard } from "../components/InfoCard";
import BB from "../images/bball.png";
import AG from "../images/algo.png";
import SK from "../images/stock.png";
import MC from "../images/misc.png";

export const Projects = () => {
    return (
        <div className="projects">
           <div className="cards">
                <InfoCard className = "card" name="NBAMaster" img={BB} desc={
                <ul>
                    <li>Utilize NBA related APIs to display information about players and teams</li>
                    <li>Used Firebase to store user info in database and to handle third party OAuth and authentication</li>
                    <li>Implemented TicketMaster’s Discovery API to display upcoming games and ticket prices</li>
                </ul>}/>
                <InfoCard className = "card" name="Algorithm Visualizer" img={AG} desc={
                <ul>
                    <li>Created a widget based application that visualizes the execution of several well-known sorting algorithms</li>
                    <li>Allows users to randomize input and select their desired algorithm</li>
                    <li>Uses a histogram to visualize random values, and then sorts the histogram by height</li>
                </ul>}/>
            </div>
            <div className="cards">
                <InfoCard className = "card" name="Stock Predictor" img={SK} desc={
                <ul>
                    <li>Built a simple web application that explores the future of certain stock options</li>
                    <li>Utilized Yahoo Finance and Facebook APIs to gather stock market prediction information</li>
                </ul>}/>
                <InfoCard className = "card" name="Other Projects" img={MC} desc={
                <ul>
                    <li>Built applications such as a Minesweeper Game, a text based Wordle implementation, 
                        and aa personalized Engineering Questionnaire.</li>
                </ul>}/>
            </div>
        </div>
    )
}