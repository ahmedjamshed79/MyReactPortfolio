import "./SkillsCard.scss";

function SkillsCard(props) {
    return (
        <div className="skills-card" data-aos="fade-up">
            <img src={props.img} alt={props.img} />
            <h3> {props.title} </h3>
            <p> {props.des} </p>
            <h5>{props.subtitle1}</h5>
            <p> {props.det} </p>
            <h5>{props.subtitle2} </h5>
            {props.list.map((l)=>(
                <li key={Math.random()}>{l}</li>
            ))}
        </div>
    )
}

export default SkillsCard
