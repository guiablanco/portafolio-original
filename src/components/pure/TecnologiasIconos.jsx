import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import logoReact from '../../assets/images/react-logo.png';
import logoHTML from '../../assets/images/HTML5.png';
import logoCSS from '../../assets/images/CSS3.png';
import logoSASS from '../../assets/images/sass-logo.png';
import logoJavascript from '../../assets/images/JavaScript.png';
import logoJava from '../../assets/images/java1366_2000.png';
import logoSpring from '../../assets/images/spring.png';
import logoBootstrap from '../../assets/images/Bootstrap_logo.png';
import logoMUI from '../../assets/images/mui-logo.png';

const TecnologiasIconos = () => {
    return (
        <div className='container tecnologies'>
            <Container>
                <Row>
                    <Col>
                        <img src={logoReact} alt='logo-React' className='logo-profile'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={logoHTML} alt='logo-HTML5' className='logo-profile'/>
                    </Col>
                    <Col>
                        <img src={logoCSS} alt='logo-CSS' className='logo-profile'/>
                    </Col>
                    <Col>
                        <img src={logoJavascript} alt='logo-React' className='logo-profile javascript'/>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <img src={logoSASS} alt='logo-SASS' className='logo-profile'/>
                    </Col>
                    <Col>
                        <img src={logoBootstrap} alt='logo-Bootstrap' className='logo-profile'/>
                    </Col>
                    <Col>
                        <img src={logoMUI} alt='logo-MUI' className='logo-profile'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={logoJava} alt='logo-Java' className='logo-profile'/>
                    </Col>
                    <Col>
                        <img src={logoSpring} alt='logo-Spring' className='logo-profile'/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TecnologiasIconos;
