import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { footerText } from '../../portfolioDetails';
import './Footer.css';

export default function Footer(){
    return(
        <>
        <section className="container-fluid" id="footer">
            <div className="footer-div col-sm-12 justify-content-center">
                    <ul className="social-network">
                        
                        <li>
                            <a href="https://www.facebook.com/ishan.goyal1305" className="icon-spin1"><FontAwesomeIcon icon={['fab','facebook-f']} /></a>
                        </li>
                        <li>
                            <a href="https://wa.me/919877228288" className="icon-spin2"><FontAwesomeIcon icon={['fab','whatsapp']} /></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/IshanGoyal1308" className="icon-spin3"><FontAwesomeIcon icon={['fab','twitter']} /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ishan_goyal13/" className="icon-spin4"><FontAwesomeIcon icon={['fab','instagram']} /></a>
                        </li>
                        <li>
                            <a href="https://pinterest.com/ishangoyal1305" className="icon-spin5"><FontAwesomeIcon icon={['fab','pinterest-p']} /></a>
                        </li>
                    </ul>
                    <p className="footer-text text-center">{footerText.subTitle}</p>
                </div>
                
            
        </section>
        <div class="overlay"></div>
        </>
    );
}