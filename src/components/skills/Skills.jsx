import "./Skills.scss";

import SkillsCard from "../skillsCard/SkillsCard";

function Skills() {
    const data = [
        {
            id: "design",
            img: "./Assets/designLogo.svg",
            title: "Design",
            des: "I’m exploring my creative side by designing beautiful and modern looking websites",
            subtitle1: "What I do",
            det: "Web UI/UX, Logo",
            subtitle2: "Tools I use",
            list: ["Figma", "Webflow","Canva", "Pen and Paper", " "," "]
        },
        {
            id: "dev",
            img: "./Assets/devLogo.svg",
            title: "Front-End",
            des: "Coding is my passion. I love to spend my energy and brain power into building web site",
            subtitle1: "Web Technologies",
            det: "HTML5, CSS3, JavaScript, React.js, Gatsby.js, Scss, Bootstrap, Taliwind and more ",
            subtitle2: "Dev Tools I use",
            list: ["Macbook Pro", "VS Code", "Github", "Npm", "Kanban Boards", " "]
        },
        {
            id: "personal",
            img: "./Assets/productivityLogo.svg",
            title: "Personal",
            des: "I am a productivity nerd and always strive to make myself better",
            subtitle1: "How I do it",
            det: "Time management, focused productivity, Communication, Getting Things Done",
            subtitle2: "Tools & Techniques I Use",
            list: ["Time-Blocking", "Apple Reminders","Apple Notes", "iCal", "Notion", "GTD"]
        }
    ];


    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="container">
                {data.map((d)=>(
                    <SkillsCard 
                        img={d.img}
                        title={d.title}
                        des={d.des}
                        subtitle1={d.subtitle1}
                        det={d.det}
                        subtitle2={d.subtitle2}
                        list={d.list}
                        key={d.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills;
