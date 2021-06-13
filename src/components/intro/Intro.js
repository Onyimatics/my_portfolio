import { init } from "ityped";
import { useEffect, useRef } from "react";

import './intro.scss';

export default function Intro() {
    const textRef = useRef();
    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Developer", "Engineer"],
    });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/babe.png" alt="Onyinye"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There,  I'm</h2>
                    <h1>Onyinye Ezike</h1>
                    <h3>Software  <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="Arrow Down"/>
                </a>
            </div>
        </div>
    )
}
