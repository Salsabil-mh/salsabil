import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProgressBar from './ProgressBar';
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 776 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 775, min: 0 },
          items: 2
        }
      };

      return (
        <section className='skills-sec' id='skills'>
            <Container>
                <Row>
                 <Col>
                 <div className='skill-box mx-auto text-center p-4'>
                    <h2 className='h1 fw-bold'>
                        Skills
                    </h2>
                    <p className='mt-3 fs-5'>
                        Here You Can See My Skills
                    </p>
                    <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                        <div className='item text-center'>
                            <ProgressBar box="250" percentage="80" circleSize="90"/>
                            <h5>Web Development</h5>
                        </div>
                        <div className='item text-center'>
                            <ProgressBar box="250" percentage="95" circleSize="90"/>
                            <h5>UI/UX Design</h5>
                        </div>
                        <div className='item text-center'>
                            <ProgressBar box="250" percentage="90" circleSize="90"/>
                            <h5>Graphic Design</h5>
                        </div>
                        <div className='item text-center'>
                            <ProgressBar box="250" percentage="65" circleSize="90"/>
                            <h5>Video Editing</h5>
                        </div>
                        <div className='item text-center'>
                            <ProgressBar box="250" percentage="70" circleSize="90"/>
                            <h5>Socail Media Specialist</h5>
                        </div>
                    </Carousel>
                 </div>
                 </Col>
                </Row>
            </Container>
        </section>
      )
}

export default Skills