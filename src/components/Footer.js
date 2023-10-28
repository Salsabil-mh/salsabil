import { Container, Row, Col } from "react-bootstrap"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
              <Row className="d-flex justify-content-between mb-1">
                <Col sm={6}>
                    <h1 className="fw-bold">LOGO</h1>
                </Col>
                <Col sm={6}>

                <div className="social-icon float-end">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt=""/></a>
              </div>
                </Col>
              </Row>
              <Col className="float-end"><p>--Copyrights 2023-- All Rights Reserved Here By Salsabil Mohamed Yakout</p></Col>
            </Container>
        </footer>
    )
}

export default Footer