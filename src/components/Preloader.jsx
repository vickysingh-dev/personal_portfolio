import { useEffect } from "react";
// import shuffle from "./../utility/preloader";
import PreLoader from "./../utility/preloader";

export default function Preloader() {
    // let words, wait;
    useEffect(() => {
        const txtElement = document.querySelector(".loading-value");
        const words = JSON.parse(txtElement.getAttribute("data-words"));
        const wait = txtElement.getAttribute("data-wait");

        new PreLoader(txtElement, words, wait);
    }, []);

    return (
        <div className="preloader">
            <div className="loading-content">
                <h1
                    className="loading-value"
                    data-wait="2500"
                    data-words='["developer?", "programmer", "creator..!"]'
                >
                    vickysingh
                </h1>
            </div>
        </div>
    );
}
