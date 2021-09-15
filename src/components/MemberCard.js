import memberImg from '../assets/images/fish.jpg'
function MemberCard(props) {
    return (
        <div className="member-card">
            <span className="Line"> </span>
            <div className="member-image">
                <img src={memberImg} alt="member" width="100%" />
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default MemberCard
