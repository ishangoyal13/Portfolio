import React from "react";
import "./Greeting.css";
import greeting from "../../portfolioDetails";
import emoji from "react-easy-emoji";
import { Roll } from 'react-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile2 from '../../assets/images/profile2.jpeg';


export default function Greeting() {
    return (
        <>
            <div className="greet-main" id="greeting">
                <Roll bottom duration={1000} distance="40px">
                    <div className="greeting-main">
                        <div className="greeting-text-div">
                            <div>
                                <h1 className="greeting-text">
                                    {" "}
                                    {greeting.title}{" "}
                                    <span className="wave-emoji">{emoji("👋")}</span>
                                </h1>
                                <p className="greeting-text-p subTitle">{greeting.subTitle}</p>

                            </div>
                            <div className="greeting-icon-div col-sm-8 col-lg-10 col-md-12">
                                <ul className="greeting-icons">

                                    <li>
                                        <a href="https://github.com/ishangoyal13" className="icon-spin6"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/ishan-goyal-99984a190/" className="icon-spin7"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/IshanGoyal1308" className="icon-spin8"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.hackerrank.com/ishangoyal13" className="icon-spin9"><FontAwesomeIcon icon={['fab', 'hackerrank']} /></a>
                                    </li>
                                    <li>
                                        <a href="https://pinterest.com/ishangoyal1305" className="icon-spin10"><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></a>
                                    </li>
                                </ul>

                            </div>
                        
                        </div>
                        <div className="greeting-image-div">
                            <img
                                alt="pic" src={profile2}></img>
                        </div>
                    </div>
                </Roll>

            </div>
            <div class="overlay"></div> {/*textured css effect at bottom*/}
        </>



    );
}