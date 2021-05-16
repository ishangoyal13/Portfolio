import React from "react";
import "./TopButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Top() {
    function TopEvent() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

    function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||  //when the user scrolls down 20px
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById("topButton").style.visibility = "visible";  //when scrolled it is visible
    } else {
        document.getElementById("topButton").style.visibility = "hidden";  //else hidden
    }
}
    window.onscroll = function () {
    scrollFunction();
};
    window.onload = function () {
    scrollFunction();
}; 
return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
        <FontAwesomeIcon icon={['fas','hand-point-up']} />
    </button>
);
}