import { Container } from 'react-bootstrap'
// import Section_Card from './SectionCard'

function Banner() {
    return (
        <>
            <div className="banner">
                <Container>
                    <div className="banner-heading">
                        <h2>We craft your imagination</h2>
                    </div>
                    <div className="banner-text">
                        <p>We can turn your ideas into projects. Bring your dreams to life</p>
                    </div>
                </Container>
                <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFC300" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,266.7C384,299,480,309,576,309.3C672,309,768,299,864,261.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>



                {/* <div className="vector-curve"></div> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,218.7C672,256,768,288,864,298.7C960,309,1056,299,1152,277.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg> */}
            </div>

        </>
    )
}

export default Banner
