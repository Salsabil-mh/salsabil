import { Container, Row, Col } from "react-bootstrap";

const Subscribe = () => {
return (
    <section>
        <Container className="mx-auto text-center bg-light text-dark p-5 sub-box mb-5">
            <Row className="align-item-center">
                <Col lg={12} md={5} xl={5}>
                    <span className="fs-2 ">To See My Projects, Leave Your Email Here!</span>
                </Col>
                <Col md={7} xl={7}>
                    <form className="mx-auto">
                        <div className="email-box  p-2 d-flex justify-content-between">
                        <input className=" emailInput border-0 " placeholder="Enter Your Email Address"></input>
                        <button className="subBtn btn fs-4" type="submit">Submit</button>
                        </div>
                    </form>
                    
                    
                </Col>
            </Row>
        </Container>
    </section>

)
}

export default Subscribe;