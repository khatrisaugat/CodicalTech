import { Col } from "react-bootstrap"
import MemberCard from "./MemberCard"
// import image from "../assets/images/lock-design.png"
import saugat from "../assets/images/saugat.png"
import samarpan from "../assets/images/samarpan.png"
import kiran from "../assets/images/kiran.png"
import dipesh from "../assets/images/dipesh.png"
import aayush from "../assets/images/aayush.png"

function TeamCard() {
    return (
        <div className="team-card">


            <Col sm="2">
                <MemberCard name="Saugat Khatri" description="Developer" image={saugat} />
            </Col>
            <Col sm="2">
                <MemberCard name="Samarpan Rai" description="Developer" image={samarpan} />
            </Col>
            <Col sm="2">
                <MemberCard name="Kiran Shrestha" description="Developer" image={kiran} />
            </Col>
            <Col sm="2">
                <MemberCard name="Dipesh Tamang" description="Developer" image={dipesh} />
            </Col>
            <Col sm="2">
                <MemberCard name="Aayush Poudel" description="Developer" image={aayush} />
            </Col>




        </div>
    )
}

export default TeamCard
