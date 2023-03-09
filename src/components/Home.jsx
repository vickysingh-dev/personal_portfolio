import { useEffect } from "react";
import TypeWriter from "../utility/typewriter";

import github from "./../assets/icons/github.svg";
import codepen from "./../assets/icons/codepen.svg";
import linkedin from "./../assets/icons/linkedin.svg";
import email from "./../assets/icons/envelope.svg";
import instagram from "./../assets/icons/instagram.svg";

import "./css/home.css";

export default function Home() {
    // useEffect(() => {
    //     const txtElement = document.querySelector(".txt-type");
    //     const words = JSON.parse(txtElement.getAttribute("data-words"));
    //     const wait = txtElement.getAttribute("data-wait");

    //     // new TypeWriter(txtElement, words, wait);
    // }, []);

    return (
        <div className="home">
            <div className="background"></div>
            <div className="foreground">
                <div className="secondary-links">
                    <div className="sec-links item">
                        <a href="#">
                            <img
                                src={github}
                                alt="Git Hub Logo"
                                className="sec-links-image"
                            ></img>
                        </a>
                    </div>
                    <div className="sec-links item">
                        <a href="#">
                            <img
                                src={codepen}
                                alt="Code Pen Logo"
                                className="sec-links-image"
                            ></img>
                        </a>
                    </div>
                </div>
                <div className="primary-links">
                    <div className="prm-links item">
                        <a href="#">
                            <img
                                src={linkedin}
                                alt="Linked In Logo"
                                className="prm-links-image"
                            />
                        </a>
                    </div>
                    <div className="prm-links item">
                        <a href="#">
                            <img
                                src={email}
                                alt="Email Logo"
                                className="prm-links-image"
                            />
                        </a>
                    </div>
                    <div className="prm-links item">
                        <a href="#">
                            <img
                                src={instagram}
                                alt="Instagram Logo"
                                className="prm-links-image"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
