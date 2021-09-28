import { Col } from "react-bootstrap"
import MemberCard from "./MemberCard"

function TeamCard() {
    return (
        <div className="team-card">


            <Col sm="2">
                <MemberCard name="Saugat Khatri" description="Developer" />
            </Col>
            <Col sm="2">
                <MemberCard name="Samarpan Rai" description="Developer" />
            </Col>
            <Col sm="2">
                <MemberCard name="Kiran Shrestha" description="Developer" />
            </Col>
            <Col sm="2">
                <MemberCard name="Dipesh Tamang" description="Developer" />
            </Col>
            <Col sm="2">
                <MemberCard name="Aayush Poudel" description="Developer" />
            </Col>




        </div>
    )
}

export default TeamCard
