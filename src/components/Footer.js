import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ copyrights}) => {

    return (
        <>
            <Container className="col socials"> 
                <Row>
                    <Col>
                    {copyrights} 
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <a 
                            href="https://twitter.com/ipanzek" 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label="Go to Developer's Twitter page (opens new tab on third party site)"
                            title="Twitter">
                            <FontAwesomeIcon 
                                icon="fa-brands fa-twitter" 
                                size="lg"  
                                className="icon-color"
                            />
                            <span className="sr-only">
                                Twitter
                            </span>
                        </a>
                    </Col>
                    <Col>
                        <a 
                            href="https://instagram.com/panzek" 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label="Go to Developer's Instagram page (opens new tab on third party site" 
                            title="Instagram">
                            <FontAwesomeIcon 
                                icon="fa-brands fa-instagram" 
                                aria-hidden="true" 
                                size="lg" 
                                className="icon-color"
                            />
                            <span className="sr-only">
                                Instagram
                            </span>
                        </a>
                    </Col>
                    <Col>
                        <a 
                            href="https://github.com/panzek" 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label="Go to developer's GitHub page (opens new tab on third party site"
                            title="GitHub">
                            <FontAwesomeIcon 
                            icon="fa-brands fa-github" 
                            size="lg" 
                            className="icon-color"                                
                            />
                        <span className="sr-only">
                            GitHub
                        </span>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer