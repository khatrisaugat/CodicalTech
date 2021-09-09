import { Container } from "react-bootstrap"
import Banner from "../components/Banner"
import Section_Card from "../components/Section_Card"

function Main() {
    return (
        <div className="main">
            <Banner />
            <div className="all-body-section">
                <Container>
                    <Section_Card />
                </Container>
                <Container>
                    <Section_Card />
                </Container>
            </div>
        </div>
    )
}

export default Main
