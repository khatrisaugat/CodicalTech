// import CardImage from '../assets/images/lock-design.png';
import Button from './Button';
function ProjectCard(props) {
    const handleClick = (e) => {
        // asdn
        window.open(props.previewLink);
    }
    return (
        <div className={props.float === "right" ? "project-card project-card-right" : "project-card"} style={{ backgroundColor: props.backgroundColor, color: props.color }}>
            <div className="card-title">
                <h3>{props.title}</h3>
            </div>
            <div className="card-image">
                <img src={props.image} alt="Simple Website" width="100%" />
            </div>
            <div className="card-button">
                <Button title="View" handleClick={handleClick} />
            </div>
        </div>
    )
}

export default ProjectCard;
