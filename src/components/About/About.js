import React from "react";
import "./About.css";
import { aboutSection } from "../../portfolioDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function About() {
    return (
    
    <section class="container-fluid" id="about">
        
        <div class="row justify-content-center about-div">
            <div class="col-md-10 col-md-offset-1 col-sm-12">
                <div class="row">
                    <div class="col-md-5 col-sm-4 col-xs-12">
                        <h3 class="skill-heading3">
                            <FontAwesomeIcon icon={['fas','user']} />
                            {aboutSection.title}
                        </h3>
                        <div class="block">
                            <p class="para1">{aboutSection.aboutPara1}</p>
                            <p class="para1">{aboutSection.aboutPara2}</p>
                        </div>
                    </div> 
                    <div class="col-md-4 col-sm-4 colxs-6">
                        <h3 class="skill-heading3">
                            <FontAwesomeIcon icon={['fas','graduation-cap']} />
                            {aboutSection.education}
                        </h3>
                    <div class="block">
                        <h4 class="skill-heading4">{aboutSection.school}</h4>
                        <ul class="icon-list">
                            <li><FontAwesomeIcon icon={['fas','school']} />{aboutSection.schoolName}</li>
                            <li><FontAwesomeIcon icon={['fas','clock']} className="spinner" />{aboutSection.schoolDuration}</li>
                        </ul>
                    </div>
                    <div class="block">
                        <h4 class="skill-heading4">Graduation</h4>
                        <ul class="icon-list">
                            <li><FontAwesomeIcon icon={['fas','university']} />{aboutSection.universityName}</li>
                            <li><FontAwesomeIcon icon={['fas','clock']} className="spinner" />{aboutSection.universityDuration}</li>
                        </ul>
                    </div>
                    </div>
                
                </div>
            </div>
        </div>
        
    </section>
    
);
}