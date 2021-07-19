import "./About.scss";


function About() {
    return (
        <div className="about" id="about">
            <h1>About</h1>
            <div className="container">
                <div className="left">
                    <p>
                        I'm a graduate of Information Technology. Graduated from Griffith University in 2020. 
                        Experienced in developing well-structured interactive web applications using client-side development technologies, 
                        while following the best modern practices and methodologies like agile kanban and conducting proactive risk analysis,
                        utilising version control system and continuous testing to deploy stable resposive websites.
                    </p>
                </div>
                <div className="right">
                    <img src="Assets/about.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;
