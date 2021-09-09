import CardImage from '../assets/images/lock-design.png';
function ProjectCard(props) {
    return (
        <div className={props.float === "right" ? "project-card project-card-right" : "project-card"} style={{ backgroundColor: props.backgroundColor, color: props.color }}>
            <div className="card-title">
                <h3>{props.title}</h3>
            </div>
            <div className="card-image">
                <img src={CardImage} alt="Simple Website" width="100%" />
            </div>
            <div className="card-button">
                <button>View</button>
            </div>
        </div>
    )
}

export default ProjectCard;
