import { Container,Row ,Col } from "react-bootstrap"
import TrackVisibility from "react-on-screen"
import contactSecImg from "../assets/img/contact.png"
const Contact = () => {
    
    return (
    <section className="contact" id="contact">
        <Container >
            <Row className="align-items-center">
                <Col md={6}>
                <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={contactSecImg}/>
                </div>}
            </TrackVisibility>
                    
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" className="" placeholder="First Name"/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="text" placeholder="Last Name"/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" className="" placeholder="Email Address"/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="tel" placeholder="Phone Number"/>
                            </Col>
                            <Col sm={12}>
                                <textarea row="6" placeholder="Message"></textarea>
                                <button type="submit">Send</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Contact