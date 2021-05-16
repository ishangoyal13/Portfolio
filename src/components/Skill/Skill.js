import React from "react";
import "./Skill.css";
import { skillsSection } from "../../portfolioDetails";
import {Fade} from 'react-reveal';

function SoftwareSkill() {
return (
    <div>
        <div className="software-skills-main-div">
        <ul className="dev-icons">
            
            {skillsSection.softwareSkills.map(skills => {
            return (
                <li className="software-skill-inline" name={skills.skillName}>
                <span
                        className="iconify"
                        data-icon={skills.classname}
                        style={skills.style}
                        data-inline="false"
                    ></span>
                <p>{skills.skillName}</p>
                </li>
            );
        })}
        </ul>
    </div>
    </div>
);
}

export default function Skills() {
    return (
        <section class="container-fluid" id="skills">
        <div className="skills-main-div">
            <Fade left duration={1000}>
            <div className="skills-image-div">
            <img
                alt="skill"
                src="https://cdn-images-1.medium.com/max/1200/1*_BSX61CxShyqW7oT7Kgc8Q.jpeg"
            ></img>
            </div>
            </Fade>
            <Fade right duration={1000}>
            <div className="skills-text-div">
                <h1 className="skills-heading">{skillsSection.title} </h1>
                <p className="subTitle skills-text-subtitle">
                {skillsSection.subTitle}
                </p>
                <SoftwareSkill />
                <div>
                {skillsSection.skills.map((skills) => {
                    return <p className="subTitle skills-text">{skills}</p>;
                })}
            </div>
            </div>
            </Fade>
        </div>
        </section>
    );
}
