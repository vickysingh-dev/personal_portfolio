import { useEffect } from "react";
import "./css/navbar.css";

export default function Navbar() {
    function toggleMenu(e) {
        console.log("btn pressed");
        document.querySelector(".nav-list").style.transform = "translateX(0)";
    }

    useEffect(() => {
        document
            .querySelector(".menu-btn")
            .addEventListener("click", toggleMenu);
        return document
            .querySelector(".menu-btn")
            .removeEventListener("click", toggleMenu);
    }, []);

    return (
        <div className="navbar">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            about
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            works
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            contact
                        </a>
                    </li>
                </ul>
                <div className="menu-btn close" onClick={toggleMenu}>
                    <div className="slant top"></div>
                    <div className="slant middle"></div>
                    <div className="slant bottom"></div>
                </div>
            </nav>
        </div>
    );
}
