import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactSection } from "../../portfolioDetails";
import "./contact.css";

export default function Contact() {
    let contactStyle = {
        position: "relative",
        width: "100%",
        color: "white"
    }
    return (
        <contact className="bg-dark text-light py-4" style={contactStyle}  id="contact">


            <p className="contact-head text-center ">Want To Discuss A Project?</p>
            <p className="text-center">Just Drop A Message Below And I'll Get In Touch!</p>



            {/* for creating  the white line*/}

            <hr
                style={{
                    border: "solid",
                    alignContent: 'center',
                    color: "white",
                    backgroundColor: "white",
                    height: 1,
                    width: 100,
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            />


            {/* queries call us office */}


            <section class="container-fluid">
                <div class=" row text-center">



                    <div class="col-sm-4 block1">
                        <h4 class="skill-heading3">
                            <FontAwesomeIcon icon={['fas', 'envelope']} />
                            {contactSection.tittle}</h4>
                        <ul class="icon-list1">
                            <li>{contactSection.email}</li>
                        </ul>
                    </div>



                    <div class="col-sm-4 block1">
                        <h4 class="skill-heading3">
                            <FontAwesomeIcon icon={['fas', 'phone-alt']} />
                            {contactSection.phone}</h4>
                        <ul class="icon-list1">
                            <li>{contactSection.num}</li>
                        </ul>
                    </div>



                    <div class="col-sm-4 block1">
                        <h4 class="skill-heading3">
                            <FontAwesomeIcon icon={['fas', 'home']} />
                            {contactSection.home}</h4>
                        <ul class="icon-list1">
                            <li>{contactSection.add}</li>
                        </ul>
                    </div>



                </div>
            </section>
            {/*  message box */}
            <form action="https://formsubmit.co/ishan.goyal1305@gmail.com" method="POST">
            <div class="row">
                    <div class="col-sm-6 col-xs-12">
                    {/* colspan */}
                    <div class="form-group">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="xyz" name="text" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="xyz@gmail.com" name="email" required />
                    </div>

                </div>
                <div class="col-sm-6 col-xs-12">                
                <div class="form-group">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter your message" name="message"></textarea>
                </div>
            </div></div>

            <div class="text-center">
                <button type="submit" class="btn btn-success">Send Message</button>
            </div>
            </form>
        </contact>
    );
}