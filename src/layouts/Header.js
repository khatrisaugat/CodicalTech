import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/bigLogo.png';
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

                        <Link to="/" className="Link"><div className="logo" onClick={() => NavClick("root")}> <img src={Logo} alt="Codical" width="100%" className="logo-img" /> </div></Link>
                    </div>
                    <div className="navigation">
                        <ul className="nav-list">
                            <li><Link to="/" className="Link"><span onClick={() => NavClick("root")}> Home</span></Link></li>
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
