import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap'
function Header() {
    const NavClick = (Id) => {
        document.getElementById(Id).scrollIntoView();
        // alert(Id)
    }
    return (
        <header id="Header">
            <Container>
                <nav>
                    <div className="nav-title">

                        <div className="logo" onClick={() => NavClick("root")}> <b>Codical</b> </div>
                    </div>
                    <div className="navigation">
                        <ul className="nav-list">
                            <li><span onClick={() => NavClick("root")}> Home</span></li>
                            <li><span onClick={() => NavClick("Contact")}>Contact</span></li>
                            <li><span onClick={() => NavClick("OurTeam")}>Our Team</span></li>
                            {/* <li><span onClick={() => NavClick("Projects")}> Projects</span></li> */}
                            <li><Button variant="warning" onClick={() => NavClick("Projects")}>Projects</Button></li>
                        </ul >
                    </div >
                </nav >
            </Container>
        </header >
    )
}

export default Header
