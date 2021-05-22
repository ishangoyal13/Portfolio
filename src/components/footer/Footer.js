import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { footerText,socialLinks } from '../../portfolioDetails';
import './Footer.css';

export default function Footer(){
    return(
        <>
        <section className="container-fluid" id="footer">
            <div className="footer-div col-sm-12 justify-content-center">
                    <ul className="social-network">
                        
                        <li>
                            <a href={socialLinks.facebook} className="icon-spin1"><FontAwesomeIcon icon={['fab','facebook-f']} /></a>
                        </li>
                        <li>
                            <a href={socialLinks.whatsapp} className="icon-spin2"><FontAwesomeIcon icon={['fab','whatsapp']} /></a>
                        </li>
                        <li>
                            <a href={socialLinks.twitter} className="icon-spin3"><FontAwesomeIcon icon={['fab','twitter']} /></a>
                        </li>
                        <li>
                            <a href={socialLinks.instagram} className="icon-spin4"><FontAwesomeIcon icon={['fab','instagram']} /></a>
                        </li>
                        <li>
                            <a href={socialLinks.pinterest} className="icon-spin5"><FontAwesomeIcon icon={['fab','pinterest-p']} /></a>
                        </li>
                    </ul>
                    <p className="footer-text text-center">{footerText.subTitle}</p>
                </div>
                
            
        </section>
        <div class="overlay"></div>
        </>
    );
}