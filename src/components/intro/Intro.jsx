import './Intro.scss';
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {

    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Freelancer", "Web App Developer", "Front-End with React.js"],
      });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    {/* <img src="Assets/man.png" alt=""/> */}
                </div>
             </div>
            <div className="right">
                 <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ahmed Faraz</h1>
                     <h3>
                        <span ref={textRef}> </span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
}

export default Intro
