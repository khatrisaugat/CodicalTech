import memberImg from '../assets/images/fish.jpg'
function MemberCard(props) {
    return (
        <div className="member-card">
            <span className="Line"> </span>
            <div className="member-image">
                <img src={props.image ? props.image : memberImg} alt="member" width="100%" />
            </div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default MemberCard
