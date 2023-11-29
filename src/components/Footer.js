import React from 'react'

import {Card} from 'react-bootstrap';

const Footer = ({currentYear}) => {

  return (
    <>
        <Card.Text 
            style={{fontSize: "0.9rem"}} 
            className="position-absolute bottom-0 start-50 translate-middle mb-1">
            &copy;Panzek {currentYear}. All Rights Reserved. 
        </Card.Text>
    </>
  );
}

export default Footer;