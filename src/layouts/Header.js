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

                        <div className="logo"> <b>Codical</b> </div>
                    </div>
                    <div className="navigation">
                        <ul className="nav-list">
                            <li><span onClick={() => NavClick("Header")}> Home</span></li>
                            <li><span onClick={() => NavClick("Projects")}> Projects</span></li>
                            <li><span onClick={() => NavClick("Contact")}>Contact</span></li>
                            <li><span onClick={() => NavClick("Contact")}>Contact</span></li>
                        </ul >
                    </div >
                </nav >
            </Container>
        </header >
    )
}

export default Header
