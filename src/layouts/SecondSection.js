import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import ProjectsData from '../assets/data/ProjectsData'

function SecondSection() {
    return (
        <div className="second-section" id="Projects">
            <h2>Our Projects</h2>
            <Container>
                <Row>
                    {ProjectsData.map((cur, index) => index % 2 === 0 ?
                        <Col sm="6" key={index}>
                            <ProjectCard title={cur.title} image={cur.image} previewLink={cur.previewLink} />
                        </Col> :
                        <Col sm="6" key={index}>
                            <ProjectCard title={cur.title} backgroundColor="#FFC300" color="#000" float="right" image={cur.image} />
                        </Col>
                    )}
                </Row>
            </Container>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFC300" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,266.7C384,299,480,309,576,309.3C672,309,768,299,864,261.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </div>
    )
}

export default SecondSection
