import { Nav, Container , Row , Col, Tab } from "react-bootstrap"
import ProjectCards from "./ProjectCards.js"
import colorSharp2 from "../assets/img/vivid bg.jpg"
import projImg1 from "../assets/img/proj1.jpeg"
import projImg2 from "../assets/img/proj2.jpeg"
import projImg3 from "../assets/img/proj3.jpeg"

const Projects = () => {
    
    const allProjects= [
        {
            title:"Project 1",
            description:"Description",
            imgUrl: projImg1,
        },
        {
            title:"Project 2",
            description:"Description",
            imgUrl: projImg2,
        },
        {
            title:"Project 3",
            description:"Description",
            imgUrl: projImg3,
        },
        {
            title:"Project 4",
            description:"Description",
            imgUrl: projImg1,
        },
        {
            title:"Project 5",
            description:"Description",
            imgUrl: projImg2,
        },
        {
            title:"Project 6",
            description:"Description",
            imgUrl: projImg3,
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>This is the first project in React JS</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                            allProjects.map((project, index) =>{
                                return(
                                    <ProjectCards
                                    key={index}
                                    {...project}
                                    />
                                )
                            
                            })
                        }
                        </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second"></Tab.Pane>
                    <Tab.Pane className="text-center fs-5" eventKey="third">Hello, My name is Salsabil, this is my first React project..</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}


export default Projects;