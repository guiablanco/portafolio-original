import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//images
import logoReact from '../../assets/images/react-logo.png';
import logoHTML from '../../assets/images/HTML5.png';
import logoCSS from '../../assets/images/CSS3.png';
import logoSASS from '../../assets/images/sass-logo.png';
import logoJavascript from '../../assets/images/JavaScript.png';
import logoJava from '../../assets/images/java1366_2000.png';
import logoSpring from '../../assets/images/spring.png';
import logoBootstrap from '../../assets/images/Bootstrap_logo.png';
import logoReactBootstrap from '../../assets/images/ReactBootstrap-logo.png';
import logoRedux from '../../assets/images/Redux-logo.png';
import logoEslint from '../../assets/images/logo-eslint.png';
import logoReactRouterDom from '../../assets/images/react-router-dom.png';
import logoSpringBoot from '../../assets/images/spring-boot-logo.png';
import logoGoogleFonts from '../../assets/images/Google-Fonts-Logo.png';
import logoJUnit5 from '../../assets/images/JUnit-logo.png';
import logoMockito from '../../assets/images/mockito-logo.png';
import logoGit from '../../assets/images/Git-Icon.png';
import logoGithub from '../../assets/images/Github-logo.png';
import logoGitlab from '../../assets/images/Gitlab-logo.png';
import logoBitbucket from '../../assets/images/Bitbucket-logo.png';
import logoSQL from '../../assets/images/SQL-logo.png';
import logoPostgresql from '../../assets/images/Postgresql-logo.png';
import logodbeaver from '../../assets/images/DBeaver-logo.png';
import logoTypescript from '../../assets/images/typescript-logo.png';
import logoNode from '../../assets/images/nodejs-logo.png';
import logoZod from '../../assets/images/zod-logo.png';
import logoNpm from '../../assets/images/npm-logo.png';
import logoAngular from '../../assets/images/angular-logo.png';
import logoAngularMaterial from '../../assets/images/angular-material-logo.png';


import '../../styles/profile.scss'

const TecnologiasIconos = () => {
    return (
        <div className='container'>

            <Container style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Row>
                    <Col>
                        <Card className='card' style={{ width: '23rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoAngular} style={{width:'5rem'}} />
                                    <Card.Body>
                                        <Card.Title>Angular</Card.Title>
                                        <Card.Text>
                                                Desarrollado por Fernando Herrera
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '13rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoTypescript} style={{width:'1.6rem'}} /> TypeScript</ListGroup.Item>
                                        <ListGroup.Item> <Card.Img variant="top" src={logoJavascript} style={{width:'1.7rem'}} /> Javascript</ListGroup.Item>
                                        <ListGroup.Item> <Card.Img variant="top" src={logoAngularMaterial} style={{width:'1.6rem'}} /> Angular Material</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Text href="">En progreso...</Card.Text>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='card' style={{ width: '23rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoReact} style={{width:'5rem'}} />
                                    <Card.Body>
                                        <Card.Title>React JS Básico</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '13rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoReactRouterDom} style={{width:'1.6rem'}} /> React-Router-Dom</ListGroup.Item>
                                        <ListGroup.Item> <Card.Img variant="top" src={logoReactBootstrap} style={{width:'1.7rem'}} /> React-Bootstrap</ListGroup.Item>
                                        <ListGroup.Item> <Card.Img variant="top" src={logoRedux} style={{width:'1.6rem'}} /> Redux</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1X19rLfbViRlysD6l9_MBygV92i4PACOj/view?usp=share_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card' style={{ width: '23rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoJavascript} style={{width:'3rem'}} />
                                    <Card.Body>
                                        <Card.Title>JavaScript</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '13rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoReact} style={{width:'2rem'}} />ReactJs</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoBootstrap} style={{width:'1.8rem'}} /> Bootstrap</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoEslint} style={{width:'1.8rem'}} /> Eslint</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1PQseG9OzthEu_pxKuRA231FHaRtTnFoq/view?usp=share_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='card' style={{ width: '23rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoHTML} style={{width:'2.5rem'}} />
                                    <Card.Img variant="top" src={logoCSS} style={{width:'1.8rem'}} />
                                    <Card.Body>
                                        <Card.Title>HTML5 Y CSS3</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '13rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoSASS} style={{width:'1.8rem'}} /> SASS</ListGroup.Item>
                                        <ListGroup.Item> <Card.Img variant="top" src={logoJavascript} style={{width:'1.5rem'}} /> JavaScript</ListGroup.Item>
                                        <ListGroup.Item> <Card.Img variant="top" src={logoGoogleFonts} style={{width:'2.5rem'}} /> Google Fonts</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1kXJK7Ur6mKJkE2IWDi4thbASluD4ZklZ/view?usp=share_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card' style={{ width: '23rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoTypescript} style={{width:'3rem', borderRadius:'9px'}} />
                                    <Card.Body>
                                        <Card.Title>TypeScript</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '13rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoNode} style={{width:'2rem'}} /> NodeJs</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoZod} style={{width:'1.5rem'}} /> Zod</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoNpm} style={{width:'2.3rem'}} /> npm</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1KUi6vBql4_ke7hy3S1AqG9-oS0gN9rsL/view?usp=drive_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                <Col>
                        <Card className='card' style={{ width: '23rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoJava} style={{width:'4.4rem'}} />
                                    <Card.Body>
                                        <Card.Title>Java</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '13rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoSpring} style={{width:'1.8rem'}} /> Spring</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoJUnit5} style={{width:'3rem'}} /> JUnit</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoMockito} style={{width:'3.5rem'}} /> Mockito</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1dwg2OM-iP2j1Ne7BXeU0MviJWvJZUXjd/view?usp=share_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card' style={{ width: '23rem' }}>
                            <div className='card-tech'>
                                <div>
                                    <Card.Img variant="top" src={logoSpring} style={{width:'4.4em'}} />
                                    <Card.Body>
                                        <Card.Title>Spring</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '13rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoSpringBoot} style={{width:'3rem'}} />  Spring Boot</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoJUnit5} style={{width:'3rem'}} /> JUnit</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoMockito} style={{width:'3.5rem'}} /> Mockito</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1lalXTu0rqU_WXQChMY5Rx5Gz2C3PnsJv/view?usp=share_link">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='card' style={{ width: '23rem' }}>
                            <div className='card-tech'>
                                <div>
                                    <Card.Img variant="top" src={logoSQL} style={{width:'5rem'}} />
                                    <Card.Body>
                                        <Card.Title>SQL</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '13rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoPostgresql} style={{width:'1.5rem'}} />  Postgresql</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logodbeaver} style={{width:'1.8rem'}} /> Dbeaver</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1myQKNwij-TrQ8b8DxU9fBkxRsPWgX8nM/view?usp=sharing">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card' style={{ width: '23rem' }}>
                            <div className='card-tech'>

                                <div>
                                    <Card.Img variant="top" src={logoGit} style={{width:'4.4rem'}} />
                                    <Card.Body>
                                        <Card.Title>Git</Card.Title>
                                        <Card.Text>
                                                Desarrollado en Open Bootcamp
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className='card2'>
                                    <ListGroup className="list-group-flush" style={{ width: '13rem'}}>
                                        <Card.Title >Trabajando con</Card.Title>
                                        <ListGroup.Item><Card.Img variant="top" src={logoGithub} style={{width:'1.5rem'}} />   Github</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoGitlab} style={{width:'1.5rem'}} /> Gitlab</ListGroup.Item>
                                        <ListGroup.Item><Card.Img variant="top" src={logoBitbucket} style={{width:'1.5rem'}} /> Bitbucket</ListGroup.Item>
                                    <Card.Body>
                                        <Card.Link href="https://drive.google.com/file/d/1B3KU88ncM8feNFQS_Q4KGkkjONfwL11d/view?usp=sharing">Certificado</Card.Link>
                                    </Card.Body>
                                    </ListGroup>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TecnologiasIconos;
