import React from 'react'

import {Card} from 'react-bootstrap';

const Footer = ({currentYear}) => {

  return (
    <>
        <Card.Text 
            className="position-absolute bottom-0 start-50 translate-middle w-100 text-center mb-1"
            style={{fontSize: "0.9rem"}}
        >
            &copy;Panzek {currentYear}. All Rights Reserved. 
        </Card.Text>
    </>
  );
}

export default Footer;