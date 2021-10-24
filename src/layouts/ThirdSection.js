import { Container, Col } from 'react-bootstrap'
import TeamCard from '../components/TeamCard'

function ThirdSection() {
    return (
        <div className="third-section" id="OurTeam">
            <h2>Our Team</h2>
            <Container>
                <Col sm="12">
                    <TeamCard />
                </Col>
            </Container>
        </div>
    )
}

export default ThirdSection
