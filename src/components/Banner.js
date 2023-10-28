import { useState, useEffect } from "react"
import { Container, Row, Col, Nav} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/banner1.png"
import 'animate.css'
import TrackVisibility from "react-on-screen"

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDelete, setIsDelete] = useState(false)
    const wordsToDisplay = ["FrontEnd Developer", "BackEnd Developer", "FullStack Developer"]
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(250 - Math.random() *100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % wordsToDisplay.length;
        let fullText = wordsToDisplay[i];
        let updatedText = isDelete ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)
    
        setText(updatedText);

        if (isDelete){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDelete && updatedText === fullText){
            setIsDelete(true);
            setDelta(period);
        } else if (isDelete && updatedText === ""){
            setIsDelete(false);
            setLoopNum(loopNum +1)
            setDelta(500);
        }
    }

    return (
       <section className="banner " id="home">
            <Container >
                <Row>
                  <Col xs={12} lg={6} xl={7}>
                    <span className="tagline">Welcome To My Portfolio</span>
                    <h1 className="">{`Hi! I'm Salsabil Mohamed Yakout,`} <span className="">{text}</span></h1>
                    <p>Hello Everyone I'm a Junior in Web Development</p>
                    <Nav.Link href="#contact">
                    <button className="btn" onClick={() => console.log("connect")}>Let's Connect! <ArrowRightCircle size={25}/></button>
                    </Nav.Link>
                  </Col>
                  <Col xs={12} lg={6} xl={5}>
                  <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="banner-img" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
                  </Col>
                </Row>
            </Container>
            </section>
    )
}

export default Banner