import './Intro.scss';

function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="Assets/man.png" alt=""/>
                </div>
             </div>
            <div className="right">
                 <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Safak Kocaoglu</h1>
                     <h3>
                        Freelance <span> Develoepr </span>
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
