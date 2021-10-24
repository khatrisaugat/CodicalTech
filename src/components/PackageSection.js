import PackagesData from "../assets/data/PackagesData"
import { Container, Row, Col } from 'react-bootstrap'
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa'

function PackageSection(props) {
    // let data = props.getData === "PackageOne" ? PackagesData.PackageOne : props.getData === "PackageTwo" ? PackagesData.PackageTwo : PackagesData.PackageThree;
    let data;
    if (props.getData === "PackageOne") {
        data = PackagesData.PackageOne
    } else if (props.getData === "PackageTwo") {
        data = PackagesData.PackageTwo;
    } else if (props.getData === "PackageThree") {
        data = PackagesData.PackageThree
    }
    console.log(data);
    return (
        <div className="package-section">
            <h1>{data.title}</h1>
            <Container>
                <Row>
                    {data.types.map((cur, index) => (
                        <Col sm="3" key={index}>
                            <div className="title">
                                <h3>{cur.title}</h3>
                            </div>
                            <hr />
                            <div className="package-feature">
                                <ul className="package-feature-list">
                                    {cur.features.map((feature, i) => (
                                        <li key={i}>{feature.symbol ? <FaCheckCircle /> : <FaTimesCircle />} {feature.feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <hr />
                            <br />
                            <div className="features-buy-section">
                                <h4>Offer Price:</h4>
                                {cur.price}
                            </div>
                        </Col>
                    ))}


                </Row>

            </Container>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFC300" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,266.7C384,299,480,309,576,309.3C672,309,768,299,864,261.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}

export default PackageSection
