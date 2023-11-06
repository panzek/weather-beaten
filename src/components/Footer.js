import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ copyrights}) => {

    return (
        <>
            <Container className="col socials"> 
                <Row>
                    <Col>
                    { copyrights} 
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <a href="https://twitter.com/ipanzek" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-twitter" size="lg"  className="icon-color"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://instagram.com/panzek" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" size="lg" className="icon-color"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://github.com/panzek" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-github" size="lg" className="icon-color"/>
                        </a>
                    </Col>
            </Row>
            </Container>
        </>
    )
}

export default Footer